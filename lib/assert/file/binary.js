/*
MIT License

Copyright (c) 2019-2022 Anthony Beaumont

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
import * as check from "../../is/file/binary.js";

async function should64bit(filePath, platform){
  if (await check.is64bit(filePath, platform) === false) 
    throw new Failure("Requires a 64bits binary (x86_64) !", "ERR_UNSUPPORTED");
}

async function should32bit(filePath, platform){
  if (await check.is32bit(filePath, platform) === false) 
    throw new Failure("Requires a 32bits binary (x86) !", "ERR_UNSUPPORTED");
}

export { should64bit, should32bit }