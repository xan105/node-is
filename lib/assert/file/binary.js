/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/file/binary.js";

async function should64bit(filePath){
  if (await check.is64bit(filePath) === false) 
    throw new Failure("Requires a 64bits binary (x86_64) !", "ERR_UNSUPPORTED");
}

async function should32bit(filePath){
  if (await check.is32bit(filePath) === false) 
    throw new Failure("Requires a 32bits binary (x86) !", "ERR_UNSUPPORTED");
}

export { should64bit, should32bit }