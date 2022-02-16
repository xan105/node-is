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
import * as check from "../../is/type/number.js";

function shouldInteger(value, safe){
  if (check.isInteger(value, safe) === false){
    if (Object.prototype.toString.call(value) === "[object Number]")
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw new Failure("Expecting an integer !", { code: 1, info: { type: typeof value, value: value } });
  }
}

function shouldIntegerPositive(value, safe){
  if (check.isIntegerPositive(value, safe) === false){
    if (Object.prototype.toString.call(value) === "[object Number]")
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw new Failure("Expecting an integer > 0 !", { code: 1, info: { type: typeof value, value: value } });
  }
}

function shouldIntegerPositiveOrZero(value, safe){
  if (check.isIntegerPositiveOrZero(value, safe) === false){
    if (Object.prototype.toString.call(value) === "[object Number]")
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw new Failure("Expecting an integer >= 0 !", { code: 1, info: { type: typeof value, value: value } });
  }
}

function shouldIntegerWithinRange(value, min, max, safe){
  if (check.isIntegerWithinRange(value, min, max, safe) === false){
    if (Object.prototype.toString.call(value) === "[object Number]")
      throw new Failure("new Number() is confusing, dangerous, and wasteful. Avoid it", { code: "ERR_USAGE_NOT_RECOMMENDED", info: { type: typeof value, value: value } });
    throw new Failure("Expecting an integer between the given range !", { code: 1, info: { type: typeof value, value: value, range: [min,max] } }); 
  }
}

export {
  shouldInteger,
  shouldIntegerPositive,
  shouldIntegerPositiveOrZero,
  shouldIntegerWithinRange
}