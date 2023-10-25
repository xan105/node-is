export function isObj(value: unknown): boolean;
export function isObjNotEmpty(value: unknown): boolean;
export function isObjWithProperties(value: unknown, prop: string[]): boolean;
export function isObjLike(value: unknown, schema: object): boolean;
export function isObjWithinObj(value: unknown): boolean;
export function isError(value: unknown): boolean;
export function isRegExp(value: unknown): boolean;
export function isUint8Array(value: unknown): boolean;
export function isBuffer(value: unknown): boolean; //alias (backward compatibility)
export function isPromise(value: unknown): boolean;
export function isFunction(value: unknown): boolean;