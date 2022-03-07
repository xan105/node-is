/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

function isString(value){
  return typeof value === "string";
}

function isStringNotEmpty(value){
  return isString(value) && value.length > 0;
}

function isHexString(value){
  const isHex = /^[0-9A-Fa-f]+$/;
  return isStringNotEmpty(value) && isHex.test(value);
}

export {
  isString,
  isStringNotEmpty,
  isHexString
}