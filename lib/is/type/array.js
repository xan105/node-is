import { isInteger, isIntegerPositive, isIntegerPositiveOrZero } from "./number.js";
import { isString, isStringNotEmpty } from "./string.js";
import { isObj } from "./obj.js";
import { Failure } from "../../util/error.js";

function isArray(value){
  return Array.isArray(value);
}

function isArrayNotEmpty(value){
  return Array.isArray(value) && value.length > 0;
}

function isArrayOfString(value){
  return Array.isArray(value) && value.every(elem => isString(elem));
}

function isArrayOfStringNotEmpty(value){
  return Array.isArray(value) && value.every(elem => isStringNotEmpty(elem));
}

function isArrayOfNumber(value){
  return Array.isArray(value) && value.every(elem => typeof elem === "number");
}

function isArrayOfInteger(value){
  return Array.isArray(value) && value.every(elem => isInteger(elem));
}

function isArrayOfIntegerPositive(value){
  return Array.isArray(value) && value.every(elem => isIntegerPositive(elem));
}

function isArrayOfIntegerPositiveOrZero(value){
  return Array.isArray(value) && value.every(elem => isIntegerPositiveOrZero(elem));
}

function isArrayOfObj(value){
  return Array.isArray(value) && value.every(elem => isObj(elem));
}

function isArrayOfObjWithProperties(value, prop){
  if (!isArrayOfString(prop)) throw new Failure("prop is not an array of string !","ERR_INVALID_ARGS");
  if (!Array.isArray(value)) return false;
  const result = value.every((elem) => { 
    if (!isObj(elem)) return false;
    
    for (const key of prop)
      if(!elem.hasOwnProperty(key)) return false;
    
    return true;
  });
  return result;
}

export {
  isArray,
  isArrayNotEmpty,
  isArrayOfString,
  isArrayOfStringNotEmpty,
  isArrayOfNumber,
  isArrayOfInteger,
  isArrayOfIntegerPositive,
  isArrayOfIntegerPositiveOrZero,
  isArrayOfObj,
  isArrayOfObjWithProperties
}