/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { shouldBoolean } from "../../assert/type/boolean.js";
import { shouldInteger, shouldNumber } from "../../assert/type/number.js";

function isInteger(value, safe = true){
  shouldBoolean(safe);
  return safe ? Number.isSafeInteger(value) : Number.isInteger(value);
}

function isIntegerPositive(value, safe = true){
  return isInteger(value,safe) && value > 0;
}

function isIntegerPositiveOrZero(value, safe = true){
  return isInteger(value,safe) && value >= 0;
}

function isIntegerWithinRange(value, min, max, safe = true){
  shouldInteger(min,safe);
  shouldInteger(max,safe); 
  return isInteger(value,safe) && value >= min && value <= max;
}

function isNumber(value){
  return typeof value === "number";
}

function isNumberWithinRange(value, min, max){
  shouldNumber(value, min, max);
  shouldNumber(value, min, max); 
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