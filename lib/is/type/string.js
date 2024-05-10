/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { shouldRegExp } from "../../assert/type/obj.js";
import { patterns } from "../../util/regex.js";

function isString(value){
  return typeof value === "string";
}

function isStringNotEmpty(value){
  return isString(value) && value.length > 0;
}

function isStringLike(value, pattern){
  if (isStringNotEmpty(pattern)) pattern = patterns[pattern];
  shouldRegExp(pattern);
  return isStringNotEmpty(value) && pattern.test(value);
}

function isHexString(value){
  return isStringLike(value, "hex")
}

export {
  isString,
  isStringNotEmpty,
  isStringLike,
  isHexString
}