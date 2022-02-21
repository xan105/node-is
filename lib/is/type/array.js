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

import { 
  isInteger, 
  isIntegerPositive, 
  isIntegerPositiveOrZero, 
  isIntegerWithinRange 
} from "./number.js";
import { isString, isStringNotEmpty } from "./string.js";
import { isObj } from "./obj.js";
import { isBuffer } from "./buffer.js";

import { shouldArrayOfString } from "../../assert/type/array.js";

function isArray(value){
  return Array.isArray(value);
}

function isArrayNotEmpty(value){
  return isArray(value) && value.length > 0;
}

function isArrayOfString(value){
  return isArray(value) && value.every(elem => isString(elem));
}

function isArrayOfStringNotEmpty(value){
  return isArray(value) && value.every(elem => isStringNotEmpty(elem));
}

function isArrayOfNumber(value){
  return isArray(value) && value.every(elem => typeof elem === "number");
}

function isArrayOfInteger(value, safe = true){
  return isArray(value) && value.every(elem => isInteger(elem, safe));
}

function isArrayOfIntegerPositive(value, safe = true){
  return isArray(value) && value.every(elem => isIntegerPositive(elem, safe));
}

function isArrayOfIntegerPositiveOrZero(value, safe = true){
  return isArray(value) && value.every(elem => isIntegerPositiveOrZero(elem, safe));
}

function isArrayOfIntegerWithinRange(value, min, max, safe = true){
  return isArray(value) && value.every(elem => isIntegerWithinRange(elem, min, max,safe));
}

function isArrayOfObj(value){
  return isArray(value) && value.every(elem => isObj(elem));
}

function isArrayOfObjWithProperties(value, prop){
  shouldArrayOfString(prop);
  if (!isArray(value)) return false;
  const result = value.every((elem) => { 
    if (!isObj(elem)) return false;
    
    for (const key of prop)
      if(!Object.prototype.hasOwnProperty.call(elem,key)) return false;

    return true;
  });
  return result;
}

function isArrayOfBuffer(value){
  return isArray(value) && value.every(elem => isBuffer(elem));
}

export {
  isArray,
  isArrayNotEmpty,
  isArrayOfString,
  isArrayOfStringNotEmpty,
  isArrayOfNumber,
  isArrayOfInteger,
  isArrayOfIntegerPositive,
  isArrayOfIntegerPositiveOrZero,
  isArrayOfIntegerWithinRange,
  isArrayOfObj,
  isArrayOfObjWithProperties,
  isArrayOfBuffer
}