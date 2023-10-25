/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/array.js";
import { isObjLike } from "../is/type/obj.js";

function asArray(value){
  if (check.isArray(value) === true) return value
  else return null
}

function asArrayNotEmpty(value){
  if (check.isArrayNotEmpty(value) === true) return value
  else return null
}

function asArrayOfString(value){
  if (check.isArrayOfString(value) === true) return value
  else return null
}

function asSizeArrayOfString(value, length){
  if (check.isSizeArrayOfString(value, length) === true) return value
  else return null
}

function asArrayOfStringNotEmpty(value){
  if (check.isArrayOfStringNotEmpty(value) === true) return value
  else return null
}

function asSizeArrayOfStringNotEmpty(value, length){
  if (check.isSizeArrayOfStringNotEmpty(value, length) === true) return value
  else return null
}

function asArrayOfStringLike(value, pattern){
  if (check.isArrayOfStringLike(value, pattern) === true) return value
  else return null
}

function asSizeArrayOfStringLike(value, pattern, length){
  if (check.isSizeArrayOfStringLike(value, pattern, length) === true) return value
  else return null
}

function asArrayOfNumber(value){
  if (check.isArrayOfNumber(value) === true) return value
  else return null
}

function asSizeArrayOfNumber(value, length){
  if (check.isSizeArrayOfNumber(value, length) === true) return value
  else return null
}

function asArrayOfNumberWithinRange(value, min, max){
  if (check.isArrayOfNumberWithinRange(value, min, max) === true) return value
  else return null
}

function asSizeArrayOfNumberWithinRange(value, length, min, max){
  if (check.isSizeArrayOfNumberWithinRange(value, length, min, max) === true) return value
  else return null
}

function asArrayOfInteger(value){
  if (check.isArrayOfInteger(value) === true) return value
  else return null
}

function asSizeArrayOfInteger(value, length){
  if (check.isSizeArrayOfInteger(value, length) === true) return value
  else return null
}

function asArrayOfIntegerPositive(value){
  if (check.isArrayOfIntegerPositive(value) === true) return value
  else return null
}

function asSizeArrayOfIntegerPositive(value, length){
  if (check.isSizeArrayOfIntegerPositive(value, length) === true) return value
  else return null
}

function asArrayOfIntegerPositiveOrZero(value){
  if (check.isArrayOfIntegerPositiveOrZero(value) === true) return value
  else return null
}

function asSizeArrayOfIntegerPositiveOrZero(value, length){
  if (check.isSizeArrayOfIntegerPositiveOrZero(value, length) === true) return value
  else return null
}

function asArrayOfIntegerWithinRange(value, min, max){
  if (check.isArrayOfIntegerWithinRange(value, min, max) === true) return value
  else return null
}

function asSizeArrayOfIntegerWithinRange(value, length, min, max){
  if (check.isSizeArrayOfIntegerWithinRange(value, length, min, max) === true) return value
  else return null
}

function asArrayOfObj(value){
  if (check.isArrayOfObj(value) === true) return value
  else return null
}

function asSizeArrayOfObj(value, length){
  if (check.isSizeArrayOfObj(value, length) === true) return value
  else return null
}

function asArrayOfObjWithProperties(value, prop){
  if (check.isArrayOfObjWithProperties(value, prop) === true) return value
  else return null
}

function asSizeArrayOfObjWithProperties(value, length, prop){
  if (check.isSizeArrayOfObjWithProperties(value, length, prop) === true) return value
  else return null
}

function asArrayOfObjLike(value, schema){
  if (check.isArrayOfObjLike(value, schema) === true) return value
  else return null 
}

function asArrayOfSomeObjLike(value, schema){
  if (!check.isArray(value)) return null;
  const match = value.filter((elem) => isObjLike(elem, schema));
  if (match.length === 0) return null;
  return match;
}

function asSizeArrayOfObjLike(value, length, schema){
  if (check.isSizeArrayOfObjLike(value, length, schema) === true) return value
  else return null
}

function asArrayOfUint8Array(value){
  if (check.isArrayOfUint8Array(value) === true) return value
  else return null
}

function asSizeArrayOfUint8Array(value, length){
  if (check.isSizeArrayOfUint8Array(value, length) === true) return value
  else return null
}

export {
  asArray,
  asArrayNotEmpty,
  asArrayOfString,
  asSizeArrayOfString,
  asArrayOfStringNotEmpty,
  asSizeArrayOfStringNotEmpty,
  asArrayOfStringLike,
  asSizeArrayOfStringLike,
  asArrayOfNumber,
  asSizeArrayOfNumber,
  asArrayOfNumberWithinRange,
  asSizeArrayOfNumberWithinRange,
  asArrayOfInteger,
  asSizeArrayOfInteger,
  asArrayOfIntegerPositive,
  asSizeArrayOfIntegerPositive,
  asArrayOfIntegerPositiveOrZero,
  asSizeArrayOfIntegerPositiveOrZero,
  asArrayOfIntegerWithinRange,
  asSizeArrayOfIntegerWithinRange,
  asArrayOfObj,
  asSizeArrayOfObj,
  asArrayOfObjWithProperties,
  asSizeArrayOfObjWithProperties,
  asArrayOfObjLike,
  asArrayOfSomeObjLike,
  asSizeArrayOfObjLike,
  asArrayOfUint8Array,
  asSizeArrayOfUint8Array,
  asArrayOfUint8Array as asArrayOfBuffer, //alias (backward compatibility)
  asSizeArrayOfUint8Array as asSizeArrayOfBuffer //alias (backward compatibility)
}