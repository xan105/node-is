export function shouldObj(value: unknown, error?: Error | string | null): void;
export function shouldObjNotEmpty(value: unknown, error?: Error | string | null): void;
export function shouldObjWithProperties(value: unknown, prop: string[], error?: Error | string | null): void;
export function shouldObjLike(value: unknown, schema: object, error?: Error | string | null): void;
export function shouldObjWithinObj(value: unknown, error?: Error | string | null): void;
export function shouldError(value: unknown, error?: Error | string | null): void;
export function shouldRegExp(value: unknown, error?: Error | string | null): void;
