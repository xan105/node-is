/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import * as check from "../is/type/buffer.js";

function asBuffer(value){
  if (check.isBuffer(value) === true) return value
  else return null
}

export { asBuffer }