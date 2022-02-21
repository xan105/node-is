/*
MIT License

Copyright (c) Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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

function shouldArrayOfStringNotEmpty(value){
  if (check.isArrayOfStringNotEmpty(value) === false) 
    throw new Failure("Expecting an array of a non-empty string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfNumber(value){
  if (check.isArrayOfNumber(value) === false) 
    throw new Failure("Expecting an array of number !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfInteger(value,safe){
  if (check.isArrayOfInteger(value,safe) === false) 
    throw new Failure("Expecting an array of integer !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerPositive(value,safe){
  if (check.isArrayOfIntegerPositive(value,safe) === false) 
    throw new Failure("Expecting an array of integer > 0 !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerPositiveOrZero(value,safe){
  if (check.isArrayOfIntegerPositiveOrZero(value,safe) === false) 
    throw new Failure("Expecting an array of integer >= 0 !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfIntegerWithinRange(value,min,max,safe){
  if (check.isArrayOfIntegerWithinRange(value,min,max,safe) === false) 
    throw new Failure("Expecting an array of integer between the given range !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfObj(value){
  if (check.isArrayOfObj(value) === false) 
    throw new Failure("Expecting an array of \"plain obj\" ({}, new Object(), Object.create(null)) !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfObjWithProperties(value, prop){
  if (check.isArrayOfObjWithProperties(value, prop) === false) 
    throw new Failure("Expecting an array of \"plain obj\" ({}, new Object(), Object.create(null)) containing the given properties !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldArrayOfBuffer(value){
  if (check.isArrayOfBuffer(value) === false) 
    throw new Failure("Expecting an array of Buffer !", { code: 1, info: { type: typeof value, value: value } });
}

export {
  shouldArray,
  shouldArrayNotEmpty,
  shouldArrayOfString,
  shouldArrayOfStringNotEmpty,
  shouldArrayOfNumber,
  shouldArrayOfInteger,
  shouldArrayOfIntegerPositive,
  shouldArrayOfIntegerPositiveOrZero,
  shouldArrayOfIntegerWithinRange,
  shouldArrayOfObj,
  shouldArrayOfObjWithProperties,
  shouldArrayOfBuffer
}