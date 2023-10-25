/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/number.js";

function shouldInteger(value, error = null){
  if (check.isInteger(value) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected integer !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
  }
}

function shouldIntegerPositive(value, error = null){ 
  if (check.isIntegerPositive(value) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected integer > 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
  }
}

function shouldIntegerPositiveOrZero(value, error = null){
  if (check.isIntegerPositiveOrZero(value) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected integer >= 0 !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
  }
}

function shouldIntegerWithinRange(value, min, max, error = null){
  if (check.isIntegerWithinRange(value, min, max) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected integer between the specified range !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max] 
    }}); 
  }
}

function shouldNumber(value, error = null){
  if (check.isNumber(value) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected Number !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value 
    }});
  }
}

function shouldNumberWithinRange(value, min, max, error = null){
  if (check.isNumberWithinRange(value, min, max) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Number]"){
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { 
        type: typeof value, 
        tag: Object.prototype.toString.call(value), 
        value 
      }});
    }
     throw asError(error) ?? new Failure(asString(error) ?? "Expected Number between the specified range !", { code: 1, info: { 
      type: typeof value, 
      tag: Object.prototype.toString.call(value), 
      value,
      range: [min,max]
    }}); 
  }
}

export {
  shouldInteger,
  shouldIntegerPositive,
  shouldIntegerPositiveOrZero,
  shouldIntegerWithinRange,
  shouldNumber,
  shouldNumberWithinRange
}