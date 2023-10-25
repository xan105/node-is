/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/misc/runtime.js";

function shouldDeno(error = null){
  if (check.isDeno() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Deno Runtime !", 2);
}

function shouldNode(error = null){
  if (check.isNode() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Node Runtime !", 2);
}

function shouldBrowser(error = null){
  if (check.isBrowser() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Browser Runtime !", 2);
}

export {
  shouldDeno,
  shouldNode,
  shouldBrowser
};