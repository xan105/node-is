export function isArray(value: any): boolean;
export function isArrayNotEmpty(value: any): boolean;
export function isArrayOfString(value: string[]): boolean;
export function isSizeArrayOfString(value: string[], length: number): boolean;
export function isArrayOfStringNotEmpty(value: string[]): boolean;
export function isSizeArrayOfStringNotEmpty(value: string[], length: number): boolean;
export function isArrayOfNumber(value: number[]): boolean;
export function isSizeArrayOfNumber(value: number[], length: number): boolean;
export function isArrayOfNumberWithinRange(value: number[], min: number, max: number): boolean;
export function isSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): boolean;
export function isArrayOfInteger(value: number[]): boolean;
export function isSizeArrayOfInteger(value: number[], length: number): boolean;
export function isArrayOfIntegerPositive(value: number[]): boolean;
export function isSizeArrayOfIntegerPositive(value: number[], length: number): boolean;
export function isArrayOfIntegerPositiveOrZero(value: number[]): boolean;
export function isSizeArrayOfIntegerPositiveOrZero(value: number[], length: number): boolean;
export function isArrayOfIntegerWithinRange(value: number[], min: number, max: number): boolean;
export function isSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number): boolean;
export function isArrayOfObj(value: any): boolean;
export function isSizeArrayOfObj(value: any, length: number): boolean;
export function isArrayOfObjWithProperties(value: any, prop: string[]): boolean;
export function isSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): boolean;
export function isArrayOfBuffer(value: any): boolean;
export function isSizeArrayOfBuffer(value: any, length: number): boolean;

export function isBigInt(value: any): boolean;
export function isBigIntPositive(value: BigInt): boolean;
export function isBigIntPositiveOrZero(value: BigInt): boolean;
export function isBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): boolean;
  
export function isBoolean(value: any): boolean;  
  
export function isBuffer(value: any): boolean;

export function isError(value: any): boolean;

export function isInteger(value: number): boolean;
export function isIntegerPositive(value: number): boolean;
export function isIntegerPositiveOrZero(value: number): boolean;
export function isIntegerWithinRange(value: number, min: number, max: number): boolean;
export function isNumber(value: number): boolean;
export function isNumberWithinRange(value: number, min: number, max: number): boolean;

export function isObj(value: any): boolean;
export function isObjNotEmpty(value: any): boolean;
export function isObjWithProperties(value: any, prop: string[]): boolean;

export function isString(value: any): boolean;
export function isStringNotEmpty(value: string): boolean;
export function isHexString(value: string): boolean;