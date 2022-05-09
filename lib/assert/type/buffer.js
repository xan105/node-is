/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/buffer.js";

function shouldBuffer(value, error = null){
  if (check.isBuffer(value) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a Buffer !", { code: 1, info: { type: typeof value, value: value } });
}

export { shouldBuffer }