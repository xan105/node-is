/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import * as check from "../../is/os/windows.js";

function shouldWindows(error = null){
  if (check.isWindows() === false) 
    throw asError(error) ?? new Failure("Requires Windows", "ERR_UNSUPPORTED");
}

function shouldWindowsX86(error = null){
  if (check.isWindowsX86() === false) 
    throw asError(error) ?? new Failure("Requires Windows (32bits)", "ERR_UNSUPPORTED");
}

function shouldWindowsX64(error = null){
  if (check.isWindowsX86() === false) 
    throw asError(error) ?? new Failure("Requires Windows (64bits)", "ERR_UNSUPPORTED");
}

function shouldWin11orGreater(error = null){
  if (check.isWin11orGreater() === false) 
    throw asError(error) ?? new Failure("Requires Windows 11 or above", "ERR_UNSUPPORTED");
}

function shouldWin10orGreater(error = null){
  if (check.isWin10orGreater() === false) 
    throw asError(error) ?? new Failure("Requires Windows 10 or above", "ERR_UNSUPPORTED");
}

function shouldWin8orGreater(error = null){
  if (check.isWin8orGreater() === false) 
    throw asError(error) ?? new Failure("Requires Windows 8 or above", "ERR_UNSUPPORTED");
}

function shouldWin7orGreater(error = null){
  if (check.isWin7orGreater() === false) 
    throw asError(error) ?? new Failure("Requires Windows 7 or above", "ERR_UNSUPPORTED");
}

function shouldWin11orLesser(error = null){
  if (check.isWin11orLesser() === false) 
    throw asError(error) ?? new Failure("Requires Windows 11 or previous", "ERR_UNSUPPORTED");
}

function shouldWin10orLesser(error = null){
  if (check.isWin10orLesser() === false) 
    throw asError(error) ?? new Failure("Requires Windows 10 or previous", "ERR_UNSUPPORTED");
}

function shouldWin8orLesser(error = null){
  if (check.isWin8orLesser() === false) 
    throw asError(error) ?? new Failure("Requires Windows 8 or previous", "ERR_UNSUPPORTED");
}

function shouldWin7orLesser(error = null){
  if (check.isWin7orLesser() === false) 
    throw asError(error) ?? new Failure("Requires Windows 7 or previous", "ERR_UNSUPPORTED");
}

function shouldWin11(error = null){
  if (check.isWin11() === false) 
    throw asError(error) ?? new Failure("Requires Windows 11", "ERR_UNSUPPORTED");
}

function shouldWin10(error = null){
  if (check.isWin10() === false) 
    throw asError(error) ?? new Failure("Requires Windows 10", "ERR_UNSUPPORTED");
}

function shouldWin8(error = null){
  if (check.isWin8() === false) 
    throw asError(error) ?? new Failure("Requires Windows 8", "ERR_UNSUPPORTED");
}

function shouldWin7(error = null){
  if (check.isWin7() === false) 
    throw asError(error) ?? new Failure("Requires Windows 7", "ERR_UNSUPPORTED");
}

export { 
  shouldWindows,
  shouldWindowsX86,
  shouldWindowsX64,
  shouldWindowsX86 as shouldWin32, //alias
  shouldWindowsX64 as shouldWin64, //alias
  shouldWin11orGreater,
  shouldWin10orGreater,
  shouldWin8orGreater,
  shouldWin7orGreater,
  shouldWin11orLesser,
  shouldWin10orLesser,
  shouldWin8orLesser,
  shouldWin7orLesser,
  shouldWin11,
  shouldWin10,
  shouldWin8,
  shouldWin7
}
