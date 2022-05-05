/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/constructor.js";

function asError(value){
  if (check.isError(value) === true) return value
  else return null
}

export { asError }