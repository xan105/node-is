/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

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

export { 
  isObj, 
  isObjNotEmpty,
  isObjWithProperties
}