/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { isArray } from "./array.js";
import { shouldObj } from "../../assert/type/obj.js";
import { shouldArrayOfString } from "../../assert/type/array.js";

function isObj(value){ //as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null)
  if(value){
    if (Object.prototype.toString.call(value) === "[object Object]") return true;
    const prototype = Object.getPrototypeOf(value);
    if (prototype === null  || prototype === Object.prototype) return true;
  }
  return false;
}

function isObjNotEmpty(value){
  if (!isObj(value)) return false;
  return Object.keys(value).length !== 0;
}

function isObjWithProperties(value, prop){
  shouldArrayOfString(prop);
  if (!isObj(value)) return false;
  for (const name of prop) {
    if(!Object.hasOwn(value, name)) return false;
  }
  return true;
}

function isObjLike(value, schema){
  shouldObj(schema);
  if (!isObj(value)) return false;
  
  const test = (fn, ctx, args = []) => {
    try{
      return fn(ctx, ...args);
    }catch(err){
      if (err instanceof Failure)
        throw new Failure(`Schema test function [${fn.name}()] failed !`, { code: 0, cause: err })
      return false;
    }
  };
  
  for (const name in schema) { 
    if(!Object.hasOwn(schema, name)) continue;
    if(!Object.hasOwn(value, name)) return false; //target missing a required prop
    
    if (isObj(schema[name])) { //recursive | nested obj
      if (isObjLike(value[name], schema[name]) === true) continue;
      else return false;
    }
    else if (typeof schema[name] === "function"){ //simple call | shortcut
      if (test(schema[name], value[name]) === true) continue;
      else return false;
    }
    else if (isArray(schema[name])){ //detailed call
      if (schema[name].length !== 2 || typeof schema[name][0] !== "function" || !isArray(schema[name][1]))
        throw new Failure("Invalid schema ! Expecting an array as [function, [args]]", { code: 1, info: { name, type: typeof schema[name], value: schema[name] } });
      if (test(schema[name][0], value[name], schema[name][1]) === true) continue;
      else return false;
    }  
    else{
      throw new Failure("Invalid schema ! Expecting a function or an array as [function, [args]]", { code: 1, info: { name, type: typeof schema[name], value: schema[name] } });
    }
  }
  
  return true;
}

export { 
  isObj, 
  isObjNotEmpty,
  isObjWithProperties,
  isObjLike
}