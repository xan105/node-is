/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/bigint.js";

function shouldBigInt(value, error = null){
  if (check.isBigInt(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected BigInt !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value: value 
    }});
}

function shouldBigIntPositive(value, error = null){
  if (check.isBigIntPositive(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected BigInt > 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value: value 
    }});
}

function shouldBigIntPositiveOrZero(value, error = null){
  if (check.isBigIntPositiveOrZero(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected BigInt >= 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value: value 
    }});
}

function shouldBigIntWithinRange(value, min, max, error = null){
  if (check.isBigIntWithinRange(value, min, max) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected BigInt between the specified range !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value: value,
      range: [min,max] 
    }}); 
}

export {
  shouldBigInt,
  shouldBigIntPositive,
  shouldBigIntPositiveOrZero,
  shouldBigIntWithinRange
}