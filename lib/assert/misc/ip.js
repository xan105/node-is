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
import * as check from "../../is/misc/ip.js";

function shouldIP(string){
  if (check.isIP(string) === false) 
    throw new Failure("Expecting a valid IP address !", { code: "ERR_INVALID", info: { value: string } });
}

function shouldIPv4(string){
  if (check.isIPv4(string) === false) 
    throw new Failure("Expecting a valid IPv4 address !", { code: "ERR_INVALID", info: { value: string } });
}

function shouldIPv6(string){
  if (check.isIPv6(string) === false) 
    throw new Failure("Expecting a valid IPv6 address !", { code: "ERR_INVALID", info: { value: string } });
}

export {
  shouldIP,
  shouldIPv4,
  shouldIPv6
}