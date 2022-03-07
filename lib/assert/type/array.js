/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/type/array.js";

function shouldArray(value){
  if (check.isArray(value) === false) 
    throw new Failure("Expecting an array !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayNotEmpty(value){
  if (check.isArrayNotEmpty(value) === false) 
    throw new Failure("Expecting a non-empty array !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfString(value){
  if (check.isArrayOfString(value) === false) 
    throw new Failure("Expecting an array of string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfString(value, length){
  if (check.isSizeArrayOfString(value, length) === false) 
    throw new Failure(`Expecting an array[${length}] of string !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfStringNotEmpty(value){
  if (check.isArrayOfStringNotEmpty(value) === false) 
    throw new Failure("Expecting an array of non-empty string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfStringNotEmpty(value, length){
  if (check.isSizeArrayOfStringNotEmpty(value, length) === false) 
    throw new Failure(`Expecting an array[${length}] of non-empty string !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfNumber(value){
  if (check.isArrayOfNumber(value) === false) 
    throw new Failure("Expecting an array of number !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfNumber(value, length){
  if (check.isSizeArrayOfNumber(value, length) === false) 
    throw new Failure(`Expecting an array[${length}] of number !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfNumberWithinRange(value, min, max){
  if (check.isArrayOfNumberWithinRange(value, min, max) === false) 
    throw new Failure("Expecting an array of number between the given range !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfNumberWithinRange(value, length, min, max){
  if (check.isSizeArrayOfNumberWithinRange(value, length, min, max) === false) 
    throw new Failure(`Expecting an array[${length}] of number between the given range !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfInteger(value, safe){
  if (check.isArrayOfInteger(value, safe) === false) 
    throw new Failure("Expecting an array of integer !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfInteger(value, length, safe){
  if (check.isSizeArrayOfInteger(value, length, safe) === false) 
    throw new Failure(`Expecting an array[${length}] of integer !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerPositive(value, safe){
  if (check.isArrayOfIntegerPositive(value, safe) === false) 
    throw new Failure("Expecting an array of integer > 0 !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfIntegerPositive(value, length, safe){
  if (check.isSizeArrayOfIntegerPositive(value, length, safe) === false) 
    throw new Failure(`Expecting an array[${length}] of integer > 0 !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerPositiveOrZero(value, safe){
  if (check.isArrayOfIntegerPositiveOrZero(value, safe) === false) 
    throw new Failure("Expecting an array of integer >= 0 !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfIntegerPositiveOrZero(value, length, safe){
  if (check.isSizeArrayOfIntegerPositiveOrZero(value, length, safe) === false) 
    throw new Failure(`Expecting an array[${length}] of integer >= 0 !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerWithinRange(value, min, max, safe){
  if (check.isArrayOfIntegerWithinRange(value, min, max, safe) === false) 
    throw new Failure("Expecting an array of integer between the given range !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfIntegerWithinRange(value, length, min, max, safe){
  if (check.isSizeArrayOfIntegerWithinRange(value, length, min, max, safe) === false) 
    throw new Failure(`Expecting an array[${length}] of integer between the given range !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfObj(value){
  if (check.isArrayOfObj(value) === false) 
    throw new Failure("Expecting an array of \"plain obj\" ({}, new Object(), Object.create(null)) !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfObj(value, length){
  if (check.isSizeArrayOfObj(value, length) === false) 
    throw new Failure(`Expecting an array[${length}] of "plain obj" ({}, new Object(), Object.create(null)) !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfObjWithProperties(value, prop){
  if (check.isArrayOfObjWithProperties(value, prop) === false) 
    throw new Failure("Expecting an array of \"plain obj\" ({}, new Object(), Object.create(null)) containing the given properties !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfObjWithProperties(value, length, prop){
  if (check.isSizeArrayOfObjWithProperties(value, length, prop) === false) 
    throw new Failure(`Expecting an array[${length}] of "plain obj" ({}, new Object(), Object.create(null)) containing the given properties !`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfBuffer(value){
  if (check.isArrayOfBuffer(value) === false) 
    throw new Failure("Expecting an array of Buffer !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldSizeArrayOfBuffer(value, length){
  if (check.isSizeArrayOfBuffer(value, length) === false) 
    throw new Failure(`Expecting an array[${length}] of Buffer !`, { code: 1, info: { type: typeof value, value: value } });
}

export {
  shouldArray,
  shouldArrayNotEmpty,
  shouldArrayOfString,
  shouldSizeArrayOfString,
  shouldArrayOfStringNotEmpty,
  shouldSizeArrayOfStringNotEmpty,
  shouldArrayOfNumber,
  shouldSizeArrayOfNumber,
  shouldArrayOfNumberWithinRange,
  shouldSizeArrayOfNumberWithinRange,
  shouldArrayOfInteger,
  shouldSizeArrayOfInteger,
  shouldArrayOfIntegerPositive,
  shouldSizeArrayOfIntegerPositive,
  shouldArrayOfIntegerPositiveOrZero,
  shouldSizeArrayOfIntegerPositiveOrZero,
  shouldArrayOfIntegerWithinRange,
  shouldSizeArrayOfIntegerWithinRange,
  shouldArrayOfObj,
  shouldSizeArrayOfObj,
  shouldArrayOfObjWithProperties,
  shouldSizeArrayOfObjWithProperties,
  shouldArrayOfBuffer,
  shouldSizeArrayOfBuffer
}