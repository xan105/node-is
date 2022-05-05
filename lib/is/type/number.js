/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { shouldInteger, shouldNumber } from "../../assert/type/number.js";

function isInteger(value){
  return Number.isSafeInteger(value);
}

function isIntegerPositive(value){
  return isInteger(value) && value > 0;
}

function isIntegerPositiveOrZero(value){
  return isInteger(value) && value >= 0;
}

function isIntegerWithinRange(value, min, max){
  shouldInteger(min);
  shouldInteger(max); 
  return isInteger(value) && value >= min && value <= max;
}

function isNumber(value){
  return typeof value === "number";
}

function isNumberWithinRange(value, min, max){
  shouldNumber(min);
  shouldNumber(max); 
  return isNumber(value) && value >= min && value <= max;
}

export {
  isInteger,
  isIntegerPositive,
  isIntegerPositiveOrZero,
  isIntegerWithinRange,
  isNumber,
  isNumberWithinRange
}