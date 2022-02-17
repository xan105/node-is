export function shouldArray(value: any): void;
export function shouldArrayNotEmpty(value: any): void;
export function shouldArrayOfString(value: string[]): void;
export function shouldArrayOfStringNotEmpty(value: string[]): void;
export function shouldArrayOfNumber(value: number[]): void;
export function shouldArrayOfInteger(value: number[], safe?: boolean): void;
export function shouldArrayOfIntegerPositive(value: number[], safe?: boolean): void;
export function shouldArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): void;
export function shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number,safe?: boolean): void;
export function shouldArrayOfObj(value: any): void;
export function shouldArrayOfObjWithProperties(value: any): void;
export function shouldArrayOfBuffer(value: any): void;

export function shouldBigInt(value: any): void;
export function shouldBigIntPositive(value: BigInt): void;
export function shouldBigIntPositiveOrZero(value: BigInt): void;
export function shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): void;
  
export function shouldBoolean(value: any): void;  
  
export function shouldBuffer(value: any): void;

export function shouldInteger(value: number, safe?: boolean): void;
export function shouldIntegerPositive(value: number, safe?: boolean): void;
export function shouldIntegerPositiveOrZero(value: number, safe?: boolean): void;
export function shouldIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): void;

export function shouldObj(value: any): void;
export function shouldObjNotEmpty(value: any): void;

export function shouldString(value: any): void;
export function shouldStringNotEmpty(value: string): void;
export function shouldHexString(value: string): void;