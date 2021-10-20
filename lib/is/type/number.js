function isInteger(i, safe = true){
  return safe ? Number.isSafeInteger(i) : Number.isInteger(i);
}

function isIntegerPositive(i, safe = true){
  return isInteger(i,safe) && i > 0 ? true : false;
}

function isIntegerPositiveOrZero(i, safe = true){
  return isInteger(i,safe) && i >= 0 ? true : false;
}

function isIntegerWithinRange(i, min, max, safe = true){
  return isInteger(i,safe) && i >= min && i <= max ? true : false;
}

export {
  isInteger,
  isIntegerPositive,
  isIntegerPositiveOrZero,
  isIntegerWithinRange
}