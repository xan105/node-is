/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/bigint.js";

function asBigInt(value){
  if (check.isBigInt(value) === true) return value
  else return null
}

function asBigIntPositive(value){
  if (check.isBigIntPositive(value) === true) return value
  else return null
}

function asBigIntPositiveOrZero(value){
  if (check.isBigIntPositiveOrZero(value) === true) return value
  else return null
}

function asBigIntWithinRange(value,min,max){
  if (check.isBigIntWithinRange(value,min,max) === true) return value
  else return null
}

export {
  asBigInt,
  asBigIntPositive,
  asBigIntPositiveOrZero,
  asBigIntWithinRange
}