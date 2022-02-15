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
import * as check from "../../is/type/string.js";

function shouldString(value){
  if (check.isString(value) === false) 
    throw new Failure("Expecting a string !", { code: 1, info: { type: typeof value, value: value } }); 
}

function shouldStringNotEmpty(value){
  if (check.isStringNotEmpty(value) === false) 
    throw new Failure("Expecting a non-empty string !", { code: 1, info: { type: typeof value, value: value } });
}

function shouldHexString(value){
  if (check.isHexString(value) === false) 
    throw new Failure("Expecting a hexadecimal string !", { code: 1, info: { type: typeof value, value: value } });
}

export {
  shouldString,
  shouldStringNotEmpty,
  shouldHexString
}