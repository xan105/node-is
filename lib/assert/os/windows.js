/*
MIT License

Copyright (c) Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import { Failure } from "@xan105/error";
import * as check from "../../is/os/windows.js";

function shouldWindows(){
  if (check.isWindows() === false) 
    throw new Failure("Requires Windows", "ERR_UNSUPPORTED");
}

function shouldWindowsX86(){
  if (check.isWindowsX86() === false) 
    throw new Failure("Requires Windows (32bits)", "ERR_UNSUPPORTED");
}

function shouldWindowsX64(){
  if (check.isWindowsX86() === false) 
    throw new Failure("Requires Windows (64bits)", "ERR_UNSUPPORTED");
}

function shouldWin11orGreater(){
  if (check.isWin11orGreater() === false) 
    throw new Failure("Requires Windows 11 or above", "ERR_UNSUPPORTED");
}

function shouldWin10orGreater(){
  if (check.isWin10orGreater() === false) 
    throw new Failure("Requires Windows 10 or above", "ERR_UNSUPPORTED");
}

function shouldWin8orGreater(){
  if (check.isWin8orGreater() === false) 
    throw new Failure("Requires Windows 8 or above", "ERR_UNSUPPORTED");
}

function shouldWin7orGreater(){
  if (check.isWin7orGreater() === false) 
    throw new Failure("Requires Windows 7 or above", "ERR_UNSUPPORTED");
}

function shouldWin11orLesser(){
  if (check.isWin11orLesser() === false) 
    throw new Failure("Requires Windows 11 or previous", "ERR_UNSUPPORTED");
}

function shouldWin10orLesser(){
  if (check.isWin10orLesser() === false) 
    throw new Failure("Requires Windows 10 or previous", "ERR_UNSUPPORTED");
}

function shouldWin8orLesser(){
  if (check.isWin8orLesser() === false) 
    throw new Failure("Requires Windows 8 or previous", "ERR_UNSUPPORTED");
}

function shouldWin7orLesser(){
  if (check.isWin7orLesser() === false) 
    throw new Failure("Requires Windows 7 or previous", "ERR_UNSUPPORTED");
}

function shouldWin11(){
  if (check.isWin11() === false) 
    throw new Failure("Requires Windows 11", "ERR_UNSUPPORTED");
}

function shouldWin10(){
  if (check.isWin10() === false) 
    throw new Failure("Requires Windows 10", "ERR_UNSUPPORTED");
}

function shouldWin8(){
  if (check.isWin8() === false) 
    throw new Failure("Requires Windows 8", "ERR_UNSUPPORTED");
}

function shouldWin7(){
  if (check.isWin7() === false) 
    throw new Failure("Requires Windows 7", "ERR_UNSUPPORTED");
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
