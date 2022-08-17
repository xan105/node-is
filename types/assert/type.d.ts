export function shouldArray(value: unknown, error?: Error | string): void;
export function shouldArrayNotEmpty(value: unknown, error?: Error | string): void;
export function shouldArrayOfString(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfString(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfStringNotEmpty(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfStringNotEmpty(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfNumber(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfNumber(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfNumberWithinRange(value: unknown, min: number, max: number, error?: Error | string): void;
export function shouldSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number, error?: Error | string): void;
export function shouldArrayOfInteger(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfInteger(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfIntegerPositive(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfIntegerPositive(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfIntegerPositiveOrZero(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfIntegerWithinRange(value: unknown, min: number, max: number, error?: Error | string): void;
export function shouldSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number, error?: Error | string): void;
export function shouldArrayOfObj(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfObj(value: unknown, length: number, error?: Error | string): void;
export function shouldArrayOfObjWithProperties(value: unknown, prop: string[], error?: Error | string): void;
export function shouldSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[], error?: Error | string): void;
export function shouldArrayOfObjLike(value: unknown, schema: object, error?: Error | string): void;
export function shouldArrayOfSomeObjLike(value: unknown, schema: object, error?: Error | string): void;
export function shouldSizeArrayOfObjLike(value: unknown, length: number, schema: object, error?: Error | string): void;
export function shouldArrayOfBuffer(value: unknown, error?: Error | string): void;
export function shouldSizeArrayOfBuffer(value: unknown, length: number, error?: Error | string): void;

export function shouldBigInt(value: unknown, error?: Error | string): void;
export function shouldBigIntPositive(value: unknown, error?: Error | string): void;
export function shouldBigIntPositiveOrZero(value: unknown, error?: Error | string): void;
export function shouldBigIntWithinRange(value: unknown, min: bigint, max: bigint, error?: Error | string): void;
  
export function shouldBoolean(value: unknown, error?: Error | string): void;  
  
export function shouldBuffer(value: unknown, error?: Error | string): void;

export function shouldError(value: unknown, error?: Error | string): void;
export function shouldRegExp(value: unknown, error?: Error | string): void;

export function shouldInteger(value: unknown, error?: Error | string): void;
export function shouldIntegerPositive(value: unknown, error?: Error | string): void;
export function shouldIntegerPositiveOrZero(value: unknown, error?: Error | string): void;
export function shouldIntegerWithinRange(value: unknown, min: number, max: number, error?: Error | string): void;
export function shouldNumber(value: unknown, error?: Error | string): void;
export function shouldNumberWithinRange(value: unknown, min: number, max: number, error?: Error | string): void;

export function shouldObj(value: unknown, error?: Error | string): void;
export function shouldObjNotEmpty(value: unknown, error?: Error | string): void;
export function shouldObjWithProperties(value: unknown, prop: string[], error?: Error | string): void;
export function shouldObjLike(value: unknown, schema: object, error?: Error | string): void;

export function shouldString(value: unknown, error?: Error | string): void;
export function shouldStringNotEmpty(value: unknown, error?: Error | string): void;
export function shouldHexString(value: unknown, error?: Error | string): void;