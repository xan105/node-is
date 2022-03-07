/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Buffer } from "node:buffer";

function isBuffer(value){
  return Buffer.isBuffer(value);
}

export { isBuffer }