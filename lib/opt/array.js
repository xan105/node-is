/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/array.js";

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

function asArrayOfInteger(value, safe){
  if (check.isArrayOfInteger(value, safe) === true) return value
  else return null
}

function asSizeArrayOfInteger(value, length, safe){
  if (check.isSizeArrayOfInteger(value, length, safe) === true) return value
  else return null
}

function asArrayOfIntegerPositive(value, safe){
  if (check.isArrayOfIntegerPositive(value, safe) === true) return value
  else return null
}

function asSizeArrayOfIntegerPositive(value, length, safe){
  if (check.isSizeArrayOfIntegerPositive(value, length, safe) === true) return value
  else return null
}

function asArrayOfIntegerPositiveOrZero(value, safe){
  if (check.isArrayOfIntegerPositiveOrZero(value, safe) === true) return value
  else return null
}

function asSizeArrayOfIntegerPositiveOrZero(value, length, safe){
  if (check.isSizeArrayOfIntegerPositiveOrZero(value, length, safe) === true) return value
  else return null
}

function asArrayOfIntegerWithinRange(value, min, max, safe){
  if (check.isArrayOfIntegerWithinRange(value, min, max, safe) === true) return value
  else return null
}

function asSizeArrayOfIntegerWithinRange(value, length, min, max, safe){
  if (check.isSizeArrayOfIntegerWithinRange(value, length, min, max, safe) === true) return value
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

function asArrayOfBuffer(value){
  if (check.isArrayOfBuffer(value) === true) return value
  else return null
}

function asSizeArrayOfBuffer(value, length){
  if (check.isSizeArrayOfBuffer(value, length) === true) return value
  else return null
}

export {
  asArray,
  asArrayNotEmpty,
  asArrayOfString,
  asSizeArrayOfString,
  asArrayOfStringNotEmpty,
  asSizeArrayOfStringNotEmpty,
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
  asArrayOfBuffer,
  asSizeArrayOfBuffer
}