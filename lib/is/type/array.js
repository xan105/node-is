/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { 
  isString, 
  isStringNotEmpty,
  isStringLike
} from "./string.js";
import { 
  isInteger, 
  isIntegerPositive, 
  isIntegerPositiveOrZero, 
  isIntegerWithinRange,
  isNumber,
  isNumberWithinRange
} from "./number.js";
import { 
  isObj, 
  isObjWithProperties, 
  isObjLike,
  isUint8Array 
} from "./obj.js";

function isArray(value){
  return Array.isArray(value);
}

function isArrayNotEmpty(value){
  return isArray(value) && value.length > 0;
}

function isArrayOfString(value){
  return isArray(value) && value.every(el => isString(el));
}

function isSizeArrayOfString(value, length){
  return isArray(value) && value.length === length && value.every(el => isString(el));
}

function isArrayOfStringNotEmpty(value){
  return isArray(value) && value.every(el => isStringNotEmpty(el));
}

function isSizeArrayOfStringNotEmpty(value, length){
  return isArray(value) && value.length === length && value.every(el => isStringNotEmpty(el));
}

function isArrayOfStringLike(value, pattern){
  return isArray(value) && value.every(el => isStringLike(el, pattern));
}

function isSizeArrayOfStringLike(value, length, pattern){
  return isArray(value) && value.length === length && value.every(el => isStringLike(el, pattern));
}

function isArrayOfNumber(value){
  return isArray(value) && value.every(el => isNumber(el));
}

function isSizeArrayOfNumber(value, length){
  return isArray(value) && value.length === length && value.every(el => isNumber(el));
}

function isArrayOfNumberWithinRange(value, min, max){
  return isArray(value) && value.every(el => isNumberWithinRange(el, min, max));
}

function isSizeArrayOfNumberWithinRange(value, length, min, max){
  return isArray(value) && value.length === length && value.every(el => isNumberWithinRange(el, min, max));
}

function isArrayOfInteger(value){
  return isArray(value) && value.every(el => isInteger(el));
}

function isSizeArrayOfInteger(value, length){
  return isArray(value) && value.length === length && value.every(el => isInteger(el));
}

function isArrayOfIntegerPositive(value){
  return isArray(value) && value.every(el => isIntegerPositive(el));
}

function isSizeArrayOfIntegerPositive(value, length){
  return isArray(value) && value.length === length && value.every(el => isIntegerPositive(el));
}

function isArrayOfIntegerPositiveOrZero(value){
  return isArray(value) && value.every(el => isIntegerPositiveOrZero(el));
}

function isSizeArrayOfIntegerPositiveOrZero(value, length){
  return isArray(value) && value.length === length && value.every(el => isIntegerPositiveOrZero(el));
}

function isArrayOfIntegerWithinRange(value, min, max){
  return isArray(value) && value.every(el => isIntegerWithinRange(el, min, max));
}

function isSizeArrayOfIntegerWithinRange(value, length, min, max){
  return isArray(value) && value.length === length && value.every(el => isIntegerWithinRange(el, min, max));
}

function isArrayOfObj(value){
  return isArray(value) && value.every(el => isObj(el));
}

function isSizeArrayOfObj(value, length){
  return isArray(value) && value.length === length && value.every(el => isObj(el));
}

function isArrayOfObjWithProperties(value, prop){
  return isArray(value) && value.every(el => isObjWithProperties(el, prop));
}

function isSizeArrayOfObjWithProperties(value, length, prop){
  return isArray(value) && value.length === length && value.every(el => isObjWithProperties(el, prop));
}

function isArrayOfObjLike(value, schema){
  return isArray(value) && value.every(el => isObjLike(el, schema));
}

function isArrayOfSomeObjLike(value, schema){
  return isArray(value) && value.some(el => isObjLike(el, schema));
}

function isSizeArrayOfObjLike(value, length, schema){
  return isArray(value) && value.length === length && value.every((el) => isObjLike(el, schema));
}

function isArrayOfUint8Array(value){
  return isArray(value) && value.every(el => isUint8Array(el));
}

function isSizeArrayOfUint8Array(value, length){
  return isArray(value) && value.length === length && value.every(el => isUint8Array(el));
}

export {
  isArray,
  isArrayNotEmpty,
  isArrayOfString,
  isSizeArrayOfString,
  isArrayOfStringNotEmpty,
  isSizeArrayOfStringNotEmpty,
  isArrayOfStringLike,
  isSizeArrayOfStringLike,
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
  isArrayOfUint8Array,
  isSizeArrayOfUint8Array,
  isArrayOfUint8Array as isArrayOfBuffer, //alias (backward compatibility)
  isSizeArrayOfUint8Array as isSizeArrayOfBuffer //alias (backward compatibility)
}