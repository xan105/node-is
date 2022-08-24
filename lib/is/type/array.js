/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { 
  isInteger, 
  isIntegerPositive, 
  isIntegerPositiveOrZero, 
  isIntegerWithinRange,
  isNumber,
  isNumberWithinRange
} from "./number.js";
import { isString, isStringNotEmpty } from "./string.js";
import { isObj, isObjWithProperties, isObjLike } from "./obj.js";
import { isBuffer } from "./buffer.js";

function isArray(value){
  return Array.isArray(value);
}

function isArrayNotEmpty(value){
  return isArray(value) && value.length > 0;
}

function isArrayOfString(value){
  return isArray(value) && value.every(elem => isString(elem));
}

function isSizeArrayOfString(value, length){
  return isArray(value) && value.length === length && value.every(elem => isString(elem));
}

function isArrayOfStringNotEmpty(value){
  return isArray(value) && value.every(elem => isStringNotEmpty(elem));
}

function isSizeArrayOfStringNotEmpty(value, length){
  return isArray(value) && value.length === length && value.every(elem => isStringNotEmpty(elem));
}

function isArrayOfNumber(value){
  return isArray(value) && value.every(elem => isNumber(elem));
}

function isSizeArrayOfNumber(value, length){
  return isArray(value) && value.length === length && value.every(elem => isNumber(elem));
}

function isArrayOfNumberWithinRange(value, min, max){
  return isArray(value) && value.every(elem => isNumberWithinRange(elem, min, max));
}

function isSizeArrayOfNumberWithinRange(value, length, min, max){
  return isArray(value) && value.length === length && value.every(elem => isNumberWithinRange(elem, min, max));
}

function isArrayOfInteger(value){
  return isArray(value) && value.every(elem => isInteger(elem));
}

function isSizeArrayOfInteger(value, length){
  return isArray(value) && value.length === length && value.every(elem => isInteger(elem));
}

function isArrayOfIntegerPositive(value){
  return isArray(value) && value.every(elem => isIntegerPositive(elem));
}

function isSizeArrayOfIntegerPositive(value, length){
  return isArray(value) && value.length === length && value.every(elem => isIntegerPositive(elem));
}

function isArrayOfIntegerPositiveOrZero(value){
  return isArray(value) && value.every(elem => isIntegerPositiveOrZero(elem));
}

function isSizeArrayOfIntegerPositiveOrZero(value, length){
  return isArray(value) && value.length === length && value.every(elem => isIntegerPositiveOrZero(elem));
}

function isArrayOfIntegerWithinRange(value, min, max){
  return isArray(value) && value.every(elem => isIntegerWithinRange(elem, min, max));
}

function isSizeArrayOfIntegerWithinRange(value, length, min, max){
  return isArray(value) && value.length === length && value.every(elem => isIntegerWithinRange(elem, min, max));
}

function isArrayOfObj(value){
  return isArray(value) && value.every(elem => isObj(elem));
}

function isSizeArrayOfObj(value, length){
  return isArray(value) && value.length === length && value.every(elem => isObj(elem));
}

function isArrayOfObjWithProperties(value, prop){
  return isArray(value) && value.every((elem) => isObjWithProperties(elem, prop));
}

function isSizeArrayOfObjWithProperties(value, length, prop){
  return isArray(value) && value.length === length && value.every((elem) => isObjWithProperties(elem, prop));
}

function isArrayOfObjLike(value, schema){
  return isArray(value) && value.every((elem) => isObjLike(elem, schema));
}

function isArrayOfSomeObjLike(value, schema){
  return isArray(value) && value.some((elem) => isObjLike(elem, schema));
}

function isSizeArrayOfObjLike(value, length, schema){
  return isArray(value) && value.length === length && value.every((elem) => isObjLike(elem, schema));
}

function isArrayOfBuffer(value){
  return isArray(value) && value.every(elem => isBuffer(elem));
}

function isSizeArrayOfBuffer(value, length){
  return isArray(value) && value.length === length && value.every(elem => isBuffer(elem));
}

export {
  isArray,
  isArrayNotEmpty,
  isArrayOfString,
  isSizeArrayOfString,
  isArrayOfStringNotEmpty,
  isSizeArrayOfStringNotEmpty,
  isArrayOfNumber,
  isSizeArrayOfNumber,
  isArrayOfNumberWithinRange,
  isSizeArrayOfNumberWithinRange,
  isArrayOfInteger,
  isSizeArrayOfInteger,
  isArrayOfIntegerPositive,
  isSizeArrayOfIntegerPositive,
  isArrayOfIntegerPositiveOrZero,
  isSizeArrayOfIntegerPositiveOrZero,
  isArrayOfIntegerWithinRange,
  isSizeArrayOfIntegerWithinRange,
  isArrayOfObj,
  isSizeArrayOfObj,
  isArrayOfObjWithProperties,
  isSizeArrayOfObjWithProperties,
  isArrayOfObjLike,
  isArrayOfSomeObjLike,
  isSizeArrayOfObjLike,
  isArrayOfBuffer,
  isSizeArrayOfBuffer
}