/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/obj.js";

function shouldObj(value, error = null){
  if (check.isObj(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }}); 
}

function shouldObjNotEmpty(value, error = null){
  if (check.isObjNotEmpty(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected non-empty \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }}); 
}

function shouldObjWithProperties(value, prop, error = null){
  if (check.isObjWithProperties(value, prop) === false)
    throw asError(error) ?? new Failure(asString(error) ?? `Expecting "plain obj" ({}, new Object(), Object.create(null)) containing properties: ${prop.join(",")}`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }}); 
}

function shouldObjLike(value, schema, error = null){
  if (check.isObjLike(value, schema) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected \"plain obj\" ({}, new Object(), Object.create(null)) like the specified schema", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }}); 
}

function shouldObjWithinObj(value, error = null){
  if (check.isObjWithinObj(value) === false)
  throw asError(error) ?? new Failure(asString(error) ?? "Expected \"plain obj\" ({}, new Object(), Object.create(null)) assigned as property within another", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }}); 
}

function shouldError(value, error = null){
  if (check.isError(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Error !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }});  
}

function shouldRegExp(value, error = null){
  if (check.isRegExp(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected RegExp !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }});  
}

function shouldUint8Array(value, error = null){
  if (check.isUint8Array(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Uint8Array !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }});  
}

function shouldPromise(value, error = null){
  if (check.isPromise(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Promise !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }});  
}

function shouldFunction(value, error = null){
  if (check.isFunction(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Function !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value
    }});  
}

export { 
  shouldObj, 
  shouldObjNotEmpty,
  shouldObjWithProperties,
  shouldObjLike,
  shouldObjWithinObj,
  shouldError,
  shouldRegExp,
  shouldUint8Array,
  shouldUint8Array as shouldBuffer, //alias (backward compatibility)
  shouldPromise,
  shouldFunction
}
