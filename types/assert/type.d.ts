export function shouldArray(value: any): void;
export function shouldArrayNotEmpty(value: any): void;
export function shouldArrayOfString(value: string[]): void;
export function shouldSizeArrayOfString(value: string[], length: number): void;
export function shouldArrayOfStringNotEmpty(value: string[]): void;
export function shouldSizeArrayOfStringNotEmpty(value: string[], length: number): void;
export function shouldArrayOfNumber(value: number[]): void;
export function shouldSizeArrayOfNumber(value: number[], length: number): void;
export function shouldArrayOfNumberWithinRange(value: number[], min: number, max: number): void;
export function shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): void;
export function shouldArrayOfInteger(value: number[]): void;
export function shouldSizeArrayOfInteger(value: number[], length: number): void;
export function shouldArrayOfIntegerPositive(value: number[]): void;
export function shouldSizeArrayOfIntegerPositive(value: number[], length: number): void;
export function shouldArrayOfIntegerPositiveOrZero(value: number[]): void;
export function shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number): void;
export function shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number): void;
export function shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number): void;
export function shouldArrayOfObj(value: any): void;
export function shouldSizeArrayOfObj(value: any, length: number): void;
export function shouldArrayOfObjWithProperties(value: any, prop: string[]): void;
export function shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): void;
export function shouldArrayOfBuffer(value: any): void;
export function shouldSizeArrayOfBuffer(value: any, length: number): void;

export function shouldBigInt(value: any): void;
export function shouldBigIntPositive(value: BigInt): void;
export function shouldBigIntPositiveOrZero(value: BigInt): void;
export function shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): void;
  
export function shouldBoolean(value: any): void;  
  
export function shouldBuffer(value: any): void;

export function shouldInteger(value: number): void;
export function shouldIntegerPositive(value: number): void;
export function shouldIntegerPositiveOrZero(value: number): void;
export function shouldIntegerWithinRange(value: number, min: number, max: number): void;
export function shouldNumber(value: number): void;
export function shouldNumberWithinRange(value: number, min: number, max: number): void;

export function shouldObj(value: any): void;
export function shouldObjNotEmpty(value: any): void;
export function shouldObjWithProperties(value: any, prop: string[]): void;

export function shouldString(value: any): void;
export function shouldStringNotEmpty(value: string): void;
export function shouldHexString(value: string): void;