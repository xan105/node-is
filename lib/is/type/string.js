/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { shouldRegExp } from "../../assert/type/obj.js";

function isString(value){
  return typeof value === "string";
}

function isStringNotEmpty(value){
  return isString(value) && value.length > 0;
}

function isStringLike(value, pattern){
  shouldRegExp(pattern);
  return isStringNotEmpty(value) && pattern.test(value);
}

function isHexString(value){
  const pattern = /^[0-9A-Fa-f]+$/;
  return isStringLike(value, pattern)
}

export {
  isString,
  isStringNotEmpty,
  isStringLike,
  isHexString
}