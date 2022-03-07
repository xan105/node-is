/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
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
