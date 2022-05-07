/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import * as check from "../../is/type/constructor.js";

function shouldError(value, error = null){
  if (check.isError(value) === false)
    throw asError(error) ?? new Failure("Expecting an Error !", { code: 1, info: { type: typeof value, value: value } }); 
}

export { shouldError }