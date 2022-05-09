/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/misc/ip.js";

function shouldIP(string, error = null){
  if (check.isIP(string) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a valid IP address !", { code: 2, info: { value: string } });
}

function shouldIPv4(string, error = null){
  if (check.isIPv4(string) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a valid IPv4 address !", { code: 2, info: { value: string } });
}

function shouldIPv6(string, error = null){
  if (check.isIPv6(string) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a valid IPv6 address !", { code: 2, info: { value: string } });
}

export {
  shouldIP,
  shouldIPv4,
  shouldIPv6
}