import { isIP, isIPv4, isIPv6 } from "node:net";

isIPAddress(string){
  const ip = isIP(string);
  return (ip === 4 || ip === 6) ? true : false;
}

export {
  isIPAddress,
  isIPv4 as isIPv4Address,
  isIPv6 as isIPv6Address
}