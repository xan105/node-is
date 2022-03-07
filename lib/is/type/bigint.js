/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { shouldBigInt } from "../../assert/type/bigint.js";

function isBigInt(value){
  return typeof value === "bigint";
}

function isBigIntPositive(value){
  return isBigInt(value) && value > 0n;
}

function isBigIntPositiveOrZero(value){
  return isBigInt(value) && value >= 0n;
}

function isBigIntWithinRange(value,min,max){
  shouldBigInt(min);
  shouldBigInt(max);
  return isBigInt(value) && value >= min && value <= max;
}

export {
  isBigInt,
  isBigIntPositive,
  isBigIntPositiveOrZero,
  isBigIntWithinRange
}