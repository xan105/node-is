/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/boolean.js";

function asBoolean(value){
  if (check.isBoolean(value) === true) return value
  else return null
}

export { asBoolean }