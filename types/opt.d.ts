export function asArray(value: any): any;
export function asArrayNotEmpty(value: any): any;
export function asArrayOfString(value: string[]): string[] | null;
export function asSizeArrayOfString(value: string[], length: number): string[] | null;
export function asArrayOfStringNotEmpty(value: string[]): string[] | null;
export function asSizeArrayOfStringNotEmpty(value: string[], length: number): string[] | null;
export function asArrayOfNumber(value: number[]): number[] | null;
export function asSizeArrayOfNumber(value: number[], length: number): number[] | null;
export function asArrayOfNumberWithinRange(value: number[], min: number, max: number): number[] | null;
export function asSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): number[] | null;
export function asArrayOfInteger(value: number[]): number[] | null;
export function asSizeArrayOfInteger(value: number[], length: number): number[] | null;
export function asArrayOfIntegerPositive(value: number[]): number[] | null;
export function asSizeArrayOfIntegerPositive(value: number[], length: number): number[] | null;
export function asArrayOfIntegerPositiveOrZero(value: number[]): number[] | null;
export function asSizeArrayOfIntegerPositiveOrZero(value: number[], length: number): number[] | null;
export function asArrayOfIntegerWithinRange(value: number[], min: number, max: number): number[] | null;
export function asSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number): number[] | null;
export function asArrayOfObj(value: any): any;
export function asSizeArrayOfObj(value: any, length: number): any;
export function asArrayOfObjWithProperties(value: any, prop: string[]): any;
export function asSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): any;
export function asArrayOfBuffer(value: any): any;
export function asSizeArrayOfBuffer(value: any, length: number): any;

export function asBigInt(value: any): any;
export function asBigIntPositive(value: BigInt): BigInt | null;
export function asBigIntPositiveOrZero(value: BigInt): BigInt | null;
export function asBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): BigInt | null;
  
export function asBoolean(value: any): any;  
  
export function asBuffer(value: any): any;

export function asInteger(value: number): number | null;
export function asIntegerPositive(value: number): number | null;
export function asIntegerPositiveOrZero(value: number): number | null;
export function asIntegerWithinRange(value: number, min: number, max: number): number | null;
export function asNumber(value: number): number | null;
export function asNumberWithinRange(value: number, min: number, max: number): number | null;

export function asObj(value: any): any;
export function asObjNotEmpty(value: any): any;
export function asObjWithProperties(value: any, prop: string[]): any;

export function asString(value: any): any;
export function asStringNotEmpty(value: string): string | null;
export function asHexString(value: string): string | null;