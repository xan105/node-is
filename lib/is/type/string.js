function isString(value){
  return typeof value === "string" ? true : false;
}

function isStringNotEmpty(value){
  return isString(value) && value.length > 0 ? true : false;
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