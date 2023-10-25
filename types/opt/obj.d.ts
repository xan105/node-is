export function asObj(value: unknown): object | null;
export function asObjNotEmpty(value: unknown): object | null;
export function asObjWithProperties(value: unknown, prop: string[]): object | null;
export function asObjLike(value: unknown, schema: object): object | null;
export function asObjWithinObj(value: unknown): object | null;
export function asError(value: unknown): Error | null;
export function asRegExp(value: unknown): RegExp | null;
export function asUint8Array(value: unknown): Uint8Array | Buffer | null;
export function asBuffer(value: unknown): Uint8Array | Buffer | null; //alias (backward compatibility)
export function asPromise(value: unknown): Promise | null;
export function asFunction(value: unknown): (...args: unknown[]) => unknown;
