export function asArray(value: unknown): [] | null;
export function asArrayNotEmpty(value: unknown): [] | null;
export function asArrayOfString(value: unknown): string[] | null;
export function asSizeArrayOfString(value: unknown, length: number): string[] | null;
export function asArrayOfStringNotEmpty(value: unknown): string[] | null;
export function asSizeArrayOfStringNotEmpty(value: unknown, length: number): string[] | null;
export function asArrayOfNumber(value: unknown): number[] | null;
export function asSizeArrayOfNumber(value: unknown, length: number): number[] | null;
export function asArrayOfNumberWithinRange(value: unknown, min: number, max: number): number[] | null;
export function asSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number): number[] | null;
export function asArrayOfInteger(value: unknown): number[] | null;
export function asSizeArrayOfInteger(value: unknown, length: number): number[] | null;
export function asArrayOfIntegerPositive(value: unknown): number[] | null;
export function asSizeArrayOfIntegerPositive(value: unknown, length: number): number[] | null;
export function asArrayOfIntegerPositiveOrZero(value: unknown): number[] | null;
export function asSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number): number[] | null;
export function asArrayOfIntegerWithinRange(value: unknown, min: number, max: number): number[] | null;
export function asSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number): number[] | null;
export function asArrayOfObj(value: unknown): object[] | null;
export function asSizeArrayOfObj(value: unknown, length: number): object[] | null;
export function asArrayOfObjWithProperties(value: unknown, prop: string[]): object[] | null;
export function asSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[]): object[] | null;
export function asArrayOfObjLike(value: unknown, schema: object): object[] | null;
export function asArrayOfSomeObjLike(value: unknown, schema: object): object[] | null;
export function asSizeArrayOfObjLike(value: unknown, length: number, schema: object): object[] | null;
export function asArrayOfBuffer(value: unknown): Buffer[] | null;
export function asSizeArrayOfBuffer(value: unknown, length: number): Buffer[] | null;

export function asBigInt(value: unknown): bigint | null;
export function asBigIntPositive(value: unknown): bigint | null;
export function asBigIntPositiveOrZero(value: unknown): bigint | null;
export function asBigIntWithinRange(value: unknown, min: bigint, max: bigint): bigint | null;
  
export function asBoolean(value: unknown): boolean | null;  
  
export function asBuffer(value: unknown): Buffer | null;

export function asError(value: unknown): Error | null;
export function asRegExp(value: unknown): RegExp | null;

export function asInteger(value: unknown): number | null;
export function asIntegerPositive(value: unknown): number | null;
export function asIntegerPositiveOrZero(value: unknown): number | null;
export function asIntegerWithinRange(value: unknown, min: number, max: number): number | null;
export function asNumber(value: unknown): number | null;
export function asNumberWithinRange(value: unknown, min: number, max: number): number | null;

export function asObj(value: unknown): object | null;
export function asObjNotEmpty(value: unknown): object | null;
export function asObjWithProperties(value: unknown, prop: string[]): object | null;
export function asObjLike(value: unknown, schema: object): object | null;

export function asString(value: unknown): string | null;
export function asStringNotEmpty(value: unknown): string | null;
export function asHexString(value: unknown): string | null;