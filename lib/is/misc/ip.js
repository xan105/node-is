/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { isIP, isIPv4, isIPv6 } from "node:net";

function _isIP(string){
  const ip = isIP(string);
  return ip === 4 || ip === 6;
}

export {
  _isIP as isIP,
  isIPv4,
  isIPv6
}