export function shouldArray(value: any, error?: any): void;
export function shouldArrayNotEmpty(value: any, error?: any): void;
export function shouldArrayOfString(value: string[], error?: any): void;
export function shouldSizeArrayOfString(value: string[], length: number, error?: any): void;
export function shouldArrayOfStringNotEmpty(value: string[], error?: any): void;
export function shouldSizeArrayOfStringNotEmpty(value: string[], length: number, error?: any): void;
export function shouldArrayOfNumber(value: number[], error?: any): void;
export function shouldSizeArrayOfNumber(value: number[], length: number, error?: any): void;
export function shouldArrayOfNumberWithinRange(value: number[], min: number, max: number, error?: any): void;
export function shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number, error?: any): void;
export function shouldArrayOfInteger(value: number[], error?: any): void;
export function shouldSizeArrayOfInteger(value: number[], length: number, error?: any): void;
export function shouldArrayOfIntegerPositive(value: number[], error?: any): void;
export function shouldSizeArrayOfIntegerPositive(value: number[], length: number, error?: any): void;
export function shouldArrayOfIntegerPositiveOrZero(value: number[], error?: any): void;
export function shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, error?: any): void;
export function shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, error?: any): void;
export function shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, error?: any): void;
export function shouldArrayOfObj(value: any, error?: any): void;
export function shouldSizeArrayOfObj(value: any, length: number, error?: any): void;
export function shouldArrayOfObjWithProperties(value: any, prop: string[], error?: any): void;
export function shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[], error?: any): void;
export function shouldArrayOfObjLike(value: any, schema: Object): void;
export function shouldSizeArrayOfObjLike(value: any, length: number, schema: Object): void;
export function shouldArrayOfBuffer(value: any, error?: any): void;
export function shouldSizeArrayOfBuffer(value: any, length: number, error?: any): void;

export function shouldBigInt(value: any, error?: any): void;
export function shouldBigIntPositive(value: BigInt, error?: any): void;
export function shouldBigIntPositiveOrZero(value: BigInt, error?: any): void;
export function shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt, error?: any): void;
  
export function shouldBoolean(value: any, error?: any): void;  
  
export function shouldBuffer(value: any, error?: any): void;

export function shouldError(value: any, error?: any): void;

export function shouldInteger(value: number, error?: any): void;
export function shouldIntegerPositive(value: number, error?: any): void;
export function shouldIntegerPositiveOrZero(value: number, error?: any): void;
export function shouldIntegerWithinRange(value: number, min: number, max: number, error?: any): void;
export function shouldNumber(value: number, error?: any): void;
export function shouldNumberWithinRange(value: number, min: number, max: number, error?: any): void;

export function shouldObj(value: any, error?: any): void;
export function shouldObjNotEmpty(value: any, error?: any): void;
export function shouldObjWithProperties(value: any, prop: string[], error?: any): void;
export function shouldObjLike(value: any, schema: Object): void;

export function shouldString(value: any, error?: any): void;
export function shouldStringNotEmpty(value: string, error?: any): void;
export function shouldHexString(value: string, error?: any): void;