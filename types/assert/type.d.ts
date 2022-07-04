export function shouldArray(value: any, error?: string | object): void;
export function shouldArrayNotEmpty(value: any, error?: string | object): void;
export function shouldArrayOfString(value: string[], error?: string | object): void;
export function shouldSizeArrayOfString(value: string[], length: number, error?: string | object): void;
export function shouldArrayOfStringNotEmpty(value: string[], error?: string | object): void;
export function shouldSizeArrayOfStringNotEmpty(value: string[], length: number, error?: string | object): void;
export function shouldArrayOfNumber(value: number[], error?: string | object): void;
export function shouldSizeArrayOfNumber(value: number[], length: number, error?: string | object): void;
export function shouldArrayOfNumberWithinRange(value: number[], min: number, max: number, error?: string | object): void;
export function shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number, error?: string | object): void;
export function shouldArrayOfInteger(value: number[], error?: string | object): void;
export function shouldSizeArrayOfInteger(value: number[], length: number, error?: string | object): void;
export function shouldArrayOfIntegerPositive(value: number[], error?: string | object): void;
export function shouldSizeArrayOfIntegerPositive(value: number[], length: number, error?: string | object): void;
export function shouldArrayOfIntegerPositiveOrZero(value: number[], error?: string | object): void;
export function shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, error?: string | object): void;
export function shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, error?: string | object): void;
export function shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, error?: string | object): void;
export function shouldArrayOfObj(value: any, error?: string | object): void;
export function shouldSizeArrayOfObj(value: any, length: number, error?: string | object): void;
export function shouldArrayOfObjWithProperties(value: any, prop: string[], error?: string | object): void;
export function shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[], error?: string | object): void;
export function shouldArrayOfObjLike(value: any, schema: object): void;
export function shouldSizeArrayOfObjLike(value: any, length: number, schema: object): void;
export function shouldArrayOfBuffer(value: any, error?: string | object): void;
export function shouldSizeArrayOfBuffer(value: any, length: number, error?: string | object): void;

export function shouldBigInt(value: any, error?: string | object): void;
export function shouldBigIntPositive(value: BigInt, error?: string | object): void;
export function shouldBigIntPositiveOrZero(value: BigInt, error?: string | object): void;
export function shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt, error?: string | object): void;
  
export function shouldBoolean(value: any, error?: string | object): void;  
  
export function shouldBuffer(value: any, error?: string | object): void;

export function shouldError(value: any, error?: string | object): void;
export function shouldRegExp(value: any, error?: string | object): void;

export function shouldInteger(value: number, error?: string | object): void;
export function shouldIntegerPositive(value: number, error?: string | object): void;
export function shouldIntegerPositiveOrZero(value: number, error?: string | object): void;
export function shouldIntegerWithinRange(value: number, min: number, max: number, error?: string | object): void;
export function shouldNumber(value: number, error?: string | object): void;
export function shouldNumberWithinRange(value: number, min: number, max: number, error?: string | object): void;

export function shouldObj(value: any, error?: string | object): void;
export function shouldObjNotEmpty(value: any, error?: string | object): void;
export function shouldObjWithProperties(value: any, prop: string[], error?: string | object): void;
export function shouldObjLike(value: any, schema: object): void;

export function shouldString(value: any, error?: string | object): void;
export function shouldStringNotEmpty(value: string, error?: string | object): void;
export function shouldHexString(value: string, error?: string | object): void;