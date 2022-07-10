/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/string.js";

function shouldString(value, error = null){
  if (check.isString(value) === false){
    if (typeof value === "object" && Object.prototype.toString.call(value) === "[object String]")
      throw new Failure("new String() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw asError(error) ?? new Failure(asString(error) ?? "Expected string !", { code: 1, info: { type: typeof value, value: value } }); 
  }
}

function shouldStringNotEmpty(value, error = null){
  if (check.isStringNotEmpty(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected non-empty string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldHexString(value, error = null){
  if (check.isHexString(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected hexadecimal string !", { code: 1, info: { type: typeof value, value: value } });
}

export {
  shouldString,
  shouldStringNotEmpty,
  shouldHexString
}