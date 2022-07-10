/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/boolean.js";

function shouldBoolean(value, error = null){
  if (check.isBoolean(value) === false) {
    if(typeof value === "object" && Object.prototype.toString.call(value) === "[object Boolean]")
      throw new Failure("new Boolean() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw asError(error) ?? new Failure(asString(error) ?? "Expected boolean !", { code: 1, info: { type: typeof value, value: value } }); 
  }
}

export { shouldBoolean }