/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/file/binary.js";

async function should64bit(filePath, error = null){
  if (await check.is64bit(filePath) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Requires a 64bits binary (x86_64) !", 2);
}

async function should32bit(filePath, error = null){
  if (await check.is32bit(filePath) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Requires a 32bits binary (x86) !", 2);
}

export { should64bit, should32bit }