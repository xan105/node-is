/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/type/string.js";

function shouldString(value){
  if (check.isString(value) === false){
    if (Object.prototype.toString.call(value) === "[object String]")
      throw new Failure("new String() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw new Failure("Expecting a string !", { code: 1, info: { type: typeof value, value: value } }); 
  }
}

function shouldStringNotEmpty(value){
  if (check.isStringNotEmpty(value) === false) 
    throw new Failure("Expecting a non-empty string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldHexString(value){
  if (check.isHexString(value) === false) 
    throw new Failure("Expecting a hexadecimal string !", { code: 1, info: { type: typeof value, value: value } });
}

export {
  shouldString,
  shouldStringNotEmpty,
  shouldHexString
}