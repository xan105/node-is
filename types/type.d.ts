export function isArray(value: any): bool;
export function isArrayNotEmpty(value: any): bool;
export function isArrayOfString(value: string[]): bool;
export function isArrayOfStringNotEmpty(value: string[]): bool;
export function isArrayOfNumber(value: number[]): bool;
export function isArrayOfInteger(value: number[], safe?: bool): bool;
export function isArrayOfIntegerPositive(value: number[], safe?: bool): bool;
export function isArrayOfIntegerPositiveOrZero(value: number[], safe?: bool): bool;
export function isArrayOfIntegerWithinRange(value: number[], min: number, max: number,safe?: bool): bool;
export function isArrayOfObj(value: any): bool;
export function isArrayOfObjWithProperties(value: any): bool;

export function isBigInt(i: any): bool;
export function isBigIntPositive(i: BigInt): bool;
export function isBigIntPositiveOrZero(i: BigInt): bool;
export function isBigIntWithinRange(i: BigInt, min: BigInt, max: BigInt): bool;
  
export function isBuffer(value: any): bool;

export function isInteger(i: number, safe?: bool): bool;
export function isIntegerPositive(i: number, safe?: bool): bool;
export function isIntegerPositiveOrZero(i: number, safe?: bool): bool;
export function isIntegerWithinRange(i: number, min: number, max: number, safe?: bool): bool;

export function isObj(value: any): bool;
export function isObjEmpty(value: any): bool;

export function isString(value: any): bool;
export function isStringNotEmpty(value: string): bool;
export function isHexString(value: string): bool;