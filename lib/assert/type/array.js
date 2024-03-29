/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/array.js";

function shouldArray(value, error = null){
  if (check.isArray(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayNotEmpty(value, error = null){
  if (check.isArrayNotEmpty(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected non-empty array !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfString(value, error = null){
  if (check.isArrayOfString(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of string !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfString(value, length, error = null){
  if (check.isSizeArrayOfString(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of string !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfStringNotEmpty(value, error = null){
  if (check.isArrayOfStringNotEmpty(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of non-empty string !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfStringNotEmpty(value, length, error = null){
  if (check.isSizeArrayOfStringNotEmpty(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of non-empty string !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfStringLike(value, pattern, error = null){
  if (check.isArrayOfStringLike(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of string like given pattern !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      pattern
    }});
}

function shouldSizeArrayOfStringLikey(value, pattern, length, error = null){
  if (check.isSizeArrayOfStringLike(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of string like given pattern !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      pattern
    }});
}

function shouldArrayOfNumber(value, error = null){
  if (check.isArrayOfNumber(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of number !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfNumber(value, length, error = null){
  if (check.isSizeArrayOfNumber(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of number !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfNumberWithinRange(value, min, max, error = null){
  if (check.isArrayOfNumberWithinRange(value, min, max) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of number between the specified range !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max]
    }});
}

function shouldSizeArrayOfNumberWithinRange(value, length, min, max, error = null){
  if (check.isSizeArrayOfNumberWithinRange(value, length, min, max) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of number between the specified range !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max]
    }});
}

function shouldArrayOfInteger(value, error = null){
  if (check.isArrayOfInteger(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? asString(error) ?? "Expected array of integer !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfInteger(value, length, error = null){
  if (check.isSizeArrayOfInteger(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of integer !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfIntegerPositive(value, error = null){
  if (check.isArrayOfIntegerPositive(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of integer > 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfIntegerPositive(value, length, error = null){
  if (check.isSizeArrayOfIntegerPositive(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of integer > 0 !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfIntegerPositiveOrZero(value, error = null){
  if (check.isArrayOfIntegerPositiveOrZero(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of integer >= 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfIntegerPositiveOrZero(value, length, error = null){
  if (check.isSizeArrayOfIntegerPositiveOrZero(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of integer >= 0 !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfIntegerWithinRange(value, min, max, error = null){
  if (check.isArrayOfIntegerWithinRange(value, min, max) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of integer between the specified range !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max]
    }});
}

function shouldSizeArrayOfIntegerWithinRange(value, length, min, max, error = null){
  if (check.isSizeArrayOfIntegerWithinRange(value, length, min, max) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of integer between the specified range !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max]
    }});
}

function shouldArrayOfObj(value, error = null){
  if (check.isArrayOfObj(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of \"plain obj\" ({}, new Object(), Object.create(null)) !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfObj(value, length, error = null){
  if (check.isSizeArrayOfObj(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of "plain obj" ({}, new Object(), Object.create(null)) !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfObjWithProperties(value, prop, error = null){
  if (check.isArrayOfObjWithProperties(value, prop) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of \"plain obj\" ({}, new Object(), Object.create(null)) containing the specified properties !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfObjWithProperties(value, length, prop, error = null){
  if (check.isSizeArrayOfObjWithProperties(value, length, prop) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of "plain obj" ({}, new Object(), Object.create(null)) containing the specified properties !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfObjLike(value, schema, error = null){
  if (check.isArrayOfObjLike(value, schema) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of \"plain obj\" ({}, new Object(), Object.create(null)) like the specified schema !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldArrayOfSomeObjLike(value, schema, error = null){
  if (check.isArrayOfSomeObjLike(value, schema) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array with at least one \"plain obj\" ({}, new Object(), Object.create(null)) like the specified schema !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfObjLike(value, length, schema, error = null){
  if (check.isSizeArrayOfObjLike(value, length, schema) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of "plain obj" ({}, new Object(), Object.create(null)) like the specified schema !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}


function shouldArrayOfUint8Array(value, error = null){
  if (check.isArrayOfUint8Array(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected array of Uint8Array !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

function shouldSizeArrayOfUint8Array(value, length, error = null){
  if (check.isSizeArrayOfUint8Array(value, length) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? `Expected array[${length}] of Uint8Array !`, { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
}

export {
  shouldArray,
  shouldArrayNotEmpty,
  shouldArrayOfString,
  shouldSizeArrayOfString,
  shouldArrayOfStringNotEmpty,
  shouldSizeArrayOfStringNotEmpty,
  shouldArrayOfStringLike,
  shouldSizeArrayOfStringLikey,
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
  shouldArrayOfObjLike,
  shouldArrayOfSomeObjLike,
  shouldSizeArrayOfObjLike,
  shouldArrayOfUint8Array,
  shouldSizeArrayOfUint8Array,
  shouldArrayOfUint8Array as shouldArrayOfBuffer, //alias (backward compatibility)
  shouldSizeArrayOfUint8Array as shouldSizeArrayOfBuffer //alias (backward compatibility)
}