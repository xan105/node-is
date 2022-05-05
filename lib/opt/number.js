/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/number.js";

function asInteger(value){
  if (check.isInteger(value) === true) return value;
  else return null;
}

function asIntegerPositive(value){
  if (check.isIntegerPositive(value) === true) return value;
  else return null;
}

function asIntegerPositiveOrZero(value){
  if (check.isIntegerPositiveOrZero(value) === true) return value;
  else return null;
}

function asIntegerWithinRange(value, min, max){
  if (check.isIntegerWithinRange(value, min, max) === true) return value;
  else return null;
}

function asNumber(value){
  if (check.isNumber(value) === true) return value;
  else return null;
}

function asNumberWithinRange(value, min, max){
  if (check.isNumberWithinRange(value, min, max) === true) return value;
  else return null;
}

export {
  asInteger,
  asIntegerPositive,
  asIntegerPositiveOrZero,
  asIntegerWithinRange,
  asNumber,
  asNumberWithinRange
}