/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/string.js";

function asString(value){
  if (check.isString(value) === true) return value
  else return null
}

function asStringNotEmpty(value){
  if (check.isStringNotEmpty(value) === true) return value
  else return null
}

function asHexString(value){
  if (check.isHexString(value) === true) return value
  else return null
}

export {
  asString,
  asStringNotEmpty,
  asHexString
}