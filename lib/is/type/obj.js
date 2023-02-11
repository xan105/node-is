/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { isArray } from "./array.js";
import { shouldObj } from "../../assert/type/obj.js";
import { shouldArrayOfString } from "../../assert/type/array.js";

function hasTag(value, name){
  const tag = `[object ${name}]`;
  return Object.prototype.toString.call(value) === tag;
}

function isObj(value){ //as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null)
  if(value){
    if (hasTag(value, "Object")) return true;
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
    if(!Object.hasOwn(schema, name)) continue; //safe iteration
    const targetHas = Object.hasOwn(value, name); 

    if (isObj(schema[name])) { //recursive | nested obj
      if(!targetHas) return false; //target missing a required prop
      if (isObjLike(value[name], schema[name]) === true) continue;
      else return false;
    }
    else if (typeof schema[name] === "function"){ //simple call | shortcut
      if(!targetHas) return false; //target missing a required prop
      if (test(schema[name], value[name]) === true) continue;
      else return false;
    }
    else if (isArray(schema[name])){ //detailed call
      
      const [ fn, args, option ] = schema[name];
      
      if (typeof fn !== "function" || !isArray(args)) 
        throw new Failure("Invalid schema ! Expected array as [function, [args]]", { code: 1, info: { name, type: typeof schema[name], value: schema[name] } });

      if(!targetHas){ //target missing a required prop
        if(option?.optional === true) continue; //ignore it if flagged as optional
        else return false;
      }

      if (test(fn, value[name], args) === true) continue;
      else return false;
    }  
    else{
      throw new Failure("Invalid schema ! Expected function or array as [function, [args]]", { code: 1, info: { name, type: typeof schema[name], value: schema[name] } });
    }
  }
  
  return true;
}

function isObjWithinObj(value){
  return isObj(value) && Object.values(value).every(elem => isObj(elem));
}

function isError(value){
  return hasTag(value, "Error");
}

function isRegExp(value){
  return hasTag(value, "RegExp");
}

export { 
  isObj, 
  isObjNotEmpty,
  isObjWithProperties,
  isObjLike,
  isObjWithinObj,
  isError,
  isRegExp
}