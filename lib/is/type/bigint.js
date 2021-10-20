function isBigInt(i){
  return typeof i === "bigint" ? true : false
}

function isBigIntPositive(i){
  return isBigInt(i) && i > 0n ? true : false;
}

function isBigIntPositiveOrZero(i){
  return isBigInt(i) && i >= 0n ? true : false;
}

function isBigIntWithinRange(i,min,max){
  return isBigInt(i) && i >= min && i <= max ? true : false;
}

export {
  isBigInt,
  isBigIntPositive,
  isBigIntPositiveOrZero,
  isBigIntWithinRange
}