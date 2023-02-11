/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/obj.js";

function asObj(value){
  if (check.isObj(value) === true) return value
  else return null
}

function asObjNotEmpty(value){
  if (check.isObjNotEmpty(value) === true) return value
  else return null
}

function asObjWithProperties(value, prop){
  if (check.isObjWithProperties(value, prop) === true) return value
  else return null
}

function asObjLike(value, schema){
  if (check.isObjLike(value, schema) === true) return value
  else return null
}

function asObjWithinObj(value){
  if (check.isObjWithinObj(value) === true) return value
  else return null
}

function asError(value){
  if (check.isError(value) === true) return value
  else return null
}

function asRegExp(value){
  if (check.isRegExp(value) === true) return value
  else return null
}

export { 
  asObj, 
  asObjNotEmpty,
  asObjWithProperties,
  asObjLike,
  asObjWithinObj,
  asError,
  asRegExp
}