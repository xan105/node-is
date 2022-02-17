export function isArray(value: any): boolean;
export function isArrayNotEmpty(value: any): boolean;
export function isArrayOfString(value: string[]): boolean;
export function isArrayOfStringNotEmpty(value: string[]): boolean;
export function isArrayOfNumber(value: number[]): boolean;
export function isArrayOfInteger(value: number[], safe?: boolean): boolean;
export function isArrayOfIntegerPositive(value: number[], safe?: boolean): boolean;
export function isArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): boolean;
export function isArrayOfIntegerWithinRange(value: number[], min: number, max: number,safe?: boolean): boolean;
export function isArrayOfObj(value: any): boolean;
export function isArrayOfObjWithProperties(value: any): boolean;

export function isBigInt(value: any): boolean;
export function isBigIntPositive(value: BigInt): boolean;
export function isBigIntPositiveOrZero(value: BigInt): boolean;
export function isBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): boolean;
  
export function isBoolean(value: any): boolean;  
  
export function isBuffer(value: any): boolean;

export function isInteger(value: number, safe?: boolean): boolean;
export function isIntegerPositive(value: number, safe?: boolean): boolean;
export function isIntegerPositiveOrZero(value: number, safe?: boolean): boolean;
export function isIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): boolean;

export function isObj(value: any): boolean;
export function isObjNotEmpty(value: any): boolean;

export function isString(value: any): boolean;
export function isStringNotEmpty(value: string): boolean;
export function isHexString(value: string): boolean;