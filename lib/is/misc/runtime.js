/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

function isDeno(){
  // @ts-ignore
  return typeof Deno !== "undefined";
}

function isNode(){
  if (typeof navigator !== "undefined")
  {
    return navigator.userAgent.startsWith("Node.js"); //(node >= 21)
  }
  else
  {
    return typeof process !== "undefined" &&
           process.versions?.node &&
           !process.versions?.nw &&
           // @ts-ignore
           !(process.versions?.electron && process.type === "browser");
  }
}

function isBrowser(){
  //eslint-disable-next-line no-undef
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}

export {
  isDeno,
  isNode,
  isBrowser
};