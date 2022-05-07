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
  for (const key in value) { 
    if(Object.hasOwn(value, key)) return true; 
  }
  return false;
}

function isObjWithProperties(value, prop){
  shouldArrayOfString(prop);
  if (!isObj(value)) return false;
  for (const key of prop) {
    if(!Object.hasOwn(value, key)) return false;
  }
  return true;
}

function isObjLike(value, schema){
  shouldObj(schema);
  if (!isObj(value)) return false;
  
  const test = (fn, val, args = []) => {
    try{
      return fn(val, ...args);
    }catch{
      return false;
    }
  };
  
  for (const key in schema) { 
    if(!Object.hasOwn(schema, key)) continue;
    if(!Object.hasOwn(value, key)) return false;
    
    if (isObj(schema[key])) {
      if (isObjLike(value[key], schema[key]) === true) continue;
      else return false;
    }
    else if (typeof schema[key] === "function"){
      if (test(schema[key], value[key]) === true) continue;
      else return false;
    }
    else if (isArray(schema[key])){
      if (schema[key].length !== 2 || typeof schema[key][0] !== "function" || !isArray(schema[key][1]))
        throw new Failure("Invalid schema ! Expecting an array as [function, [args]]", { code: 1, info: { name: key, type: typeof schema[key], value: schema[key] } });
      if (test(schema[key][0], value[key], schema[key][1]) === true) continue;
      else return false;
    }  
    else{
      throw new Failure("Invalid schema ! Expecting a function or an array as [function, [args]]", { code: 1, info: { name: key, type: typeof schema[key], value: schema[key] } });
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