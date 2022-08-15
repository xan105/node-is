export function isArray(value: unknown): boolean;
export function isArrayNotEmpty(value: unknown): boolean;
export function isArrayOfString(value: unknown): boolean;
export function isSizeArrayOfString(value: unknown, length: number): boolean;
export function isArrayOfStringNotEmpty(value: unknown): boolean;
export function isSizeArrayOfStringNotEmpty(value: unknown, length: number): boolean;
export function isArrayOfNumber(value: unknown): boolean;
export function isSizeArrayOfNumber(value: unknown, length: number): boolean;
export function isArrayOfNumberWithinRange(value: unknown, min: number, max: number): boolean;
export function isSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number): boolean;
export function isArrayOfInteger(value: unknown): boolean;
export function isSizeArrayOfInteger(value: unknown, length: number): boolean;
export function isArrayOfIntegerPositive(value: unknown): boolean;
export function isSizeArrayOfIntegerPositive(value: unknown, length: number): boolean;
export function isArrayOfIntegerPositiveOrZero(value: unknown): boolean;
export function isSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number): boolean;
export function isArrayOfIntegerWithinRange(value: unknown, min: number, max: number): boolean;
export function isSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number): boolean;
export function isArrayOfObj(value: unknown): boolean;
export function isSizeArrayOfObj(value: unknown, length: number): boolean;
export function isArrayOfObjWithProperties(value: unknown, prop: string[]): boolean;
export function isSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[]): boolean;
export function isArrayOfObjLike(value: unknown, schema: object): boolean;
export function isSizeArrayOfObjLike(value: unknown, length: number, schema: object): boolean;
export function isArrayOfBuffer(value: unknown): boolean;
export function isSizeArrayOfBuffer(value: unknown, length: number): boolean;

export function isBigInt(value: unknown): boolean;
export function isBigIntPositive(value: unknown): boolean;
export function isBigIntPositiveOrZero(value: unknown): boolean;
export function isBigIntWithinRange(value: unknown, min: bigint, max: bigint): boolean;
  
export function isBoolean(value: unknown): boolean;  
  
export function isBuffer(value: unknown): boolean;

export function isError(value: unknown): boolean;
export function isRegExp(value: unknown): boolean;

export function isInteger(value: unknown): boolean;
export function isIntegerPositive(value: unknown): boolean;
export function isIntegerPositiveOrZero(value: unknown): boolean;
export function isIntegerWithinRange(value: unknown, min: number, max: number): boolean;
export function isNumber(value: unknown): boolean;
export function isNumberWithinRange(value: unknown, min: number, max: number): boolean;

export function isObj(value: unknown): boolean;
export function isObjNotEmpty(value: unknown): boolean;
export function isObjWithProperties(value: unknown, prop: string[]): boolean;
export function isObjLike(value: unknown, schema: object): boolean;

export function isString(value: unknown): boolean;
export function isStringNotEmpty(value: unknown): boolean;
export function isHexString(value: unknown): boolean;