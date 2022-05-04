/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Buffer } from "node:buffer";
import { find } from "../../util/header-magic.js";

const WIN32 = { //cf: https://docs.microsoft.com/en-us/windows/win32/debug/pe-format 
  header: Buffer.from('50450000','hex'), // "P" and "E" followed by two null bytes
  x86: Buffer.from('4C01','hex'), //x86
  x86_64: Buffer.from('6486','hex'), //x86_64 (AMD64)
  aarch32: Buffer.from('c001','hex'), //ARM (up to ARMv7/Aarch32) 
  aarch64: Buffer.from('64aa','hex') //ARMv8/Aarch64
 /* There are a lot more possible values
    Example:
    Buffer.from('6450','hex') -> RISC-V 64-bit address space 
    cf: https://docs.microsoft.com/en-us/windows/win32/debug/pe-format#machine-types
  */
};

const LINUX = { //cf: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#File_header
  header: Buffer.from('7F454C46','hex'), // 0x7F followed by "ELF" in ASCII
  "32bit" : Buffer.from('01','hex'), //32-bit executable
  "64bit" : Buffer.from('02','hex') //64-bit executable
  /*x86: Buffer.from('03','hex'), //x86
  x86_64: Buffer.from('3E','hex'), //x86_64 (AMD64)
  aarch32: Buffer.from('28','hex'), //ARM (up to ARMv7/Aarch32) 
  aarch64: Buffer.from('B7','hex') //ARMv8/Aarch64*/
};

async function is64bit(filePath){
  const is = await find(filePath, [
    Buffer.concat([WIN32.header, WIN32.x86_64]),
    Buffer.concat([WIN32.header, WIN32.aarch64]),
    Buffer.concat([LINUX.header, LINUX["64bit"]])
  ]);
  return is;
}

async function is32bit(filePath){
  const is = await find(filePath, [
    Buffer.concat([WIN32.header, WIN32.x86]),
    Buffer.concat([WIN32.header, WIN32.aarch32]),
    Buffer.concat([LINUX.header, LINUX["32bit"]])
  ]);
  return is;
}

export { is64bit, is32bit }