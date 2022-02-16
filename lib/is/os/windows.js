/*
MIT License

Copyright (c) 2019-2021 Anthony Beaumont

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

import { platform, release, arch } from "node:os";

function getVersion () {
  const version = release().split(".");
  return { major: +version[0], minor: +version[1], build: +version[2] };
}

function isWindows(){
  return platform() === "win32";
}

function isWindowsX86(){
  return isWindows() && arch() === "x32";
}

function isWindowsX64(){
  return isWindows() && arch() === "x64";
}

function isWin11orGreater(){
  if (!isWindows()) return false; 
  const win = getVersion();
  if (win.major > 10)
    return true
  else if (win.major == 10 && win.minor == 0 && win.build >= 22000)
    return true
  else
    return false;
}

function isWin10orGreater(){
  if (!isWindows()) return false; 
  const win = getVersion();
  if (win.major >= 10)
    return true;
  else
    return false;
}

function isWin8orGreater(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major > 6)
    return true;
  else if (win.major == 6 && win.minor >= 2)
    return true;
  else
    return false;
}

function isWin7orGreater(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major > 6)
    return true;
  else if (win.major == 6 && win.minor >= 1)
    return true;
  else
    return false;
}

function isWin11orLesser(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major <= 10)
    return true;
  else
    return false;
}

function isWin10orLesser(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 10 && win.minor == 0 && win.build < 22000)
    return true;
  else if (win.major < 10)
    return true;
  else
    return false;
}

function isWin8orLesser(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 6 && win.minor <= 3)
    return true;
  else if (win.major < 6)
    return true;
  else
    return false;
}

function isWin7orLesser(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 6 && win.minor == 1)
    return true;
  else if (win.major < 6)
    return true;
  else
    return false;
}

function isWin11(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 10 && win.minor == 0 && win.build >= 22000)
    return true;
  else
    return false;
}

function isWin10(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 10 && win.minor == 0 && win.build < 22000)
    return true;
  else
    return false;
}

function isWin8(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 6 && (win.minor == 2 || win.minor == 3))
    return true;
  else
    return false;
}

function isWin7(){
  if (!isWindows()) return false;
  const win = getVersion();
  if (win.major == 6 && win.minor == 1)
    return true;
  else
    return false;
}

export { 
  isWindows,
  isWindowsX86,
  isWindowsX64,
  isWindowsX86 as isWin32, //alias
  isWindowsX64 as isWin64, //alias
  isWin11orGreater,
  isWin10orGreater,
  isWin8orGreater,
  isWin7orGreater,
  isWin11orLesser,
  isWin10orLesser,
  isWin8orLesser,
  isWin7orLesser,
  isWin11,
  isWin10,
  isWin8,
  isWin7
}
