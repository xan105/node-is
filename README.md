About
=====

Collection of various 'is ... ?' checks.

Example
=======

Check binary x64 or x86
```js
import { is64bit } from "@xan105/is";
const is64 = await is64bit("path/to/executable");
```

Check is valid PNG file
```js
import { isPNG } from "@xan105/is";
import { readFile } from "node:fs/promises";
const valid = isPNG(await readFile("path/to/img")); //read as a Buffer
```

Check winver
```js
import * as check from "@xan105/is";
check.isWin10orGreater();
check.isWin11();
check.isWindows();
check.isWin64(); //64-bits
//etc...
```

Check type
```js
import * as check from "@xan105/is";

check.isStringNotEmpty("hello world");
check.isIntegerWithinRange(1,0,2);
check.isArrayOfString(["a","b"]);
//etc...
```

Assertion<br/>
_perform the same check but throw an error instead._

```js
import { shouldWin10orGreater } from "@xan105/is/assert";
shouldWin10orGreater();
```

```js
import { assert } from "@xan105/is";

assert.shouldStringNotEmpty("hello world");
assert.shouldIntegerWithinRange(1,0,2);
assert.shouldArrayOfString(["a","b"]);
//etc...
```

Install
=======

`npm install @xan105/is`

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

## Named export

#### `is64bit (filePath: string, platform?: string): boolean`

Check if it's a 64-bit (x86_64) binary.<br />

📖 cf:
- https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- https://docs.microsoft.com/en-us/windows/win32/debug/pe-format#machine-types
- https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#File_header

##### Example

```js 
import { is64bit } from "@xan105/is/bin";
const is64 = await is64bit("hello_world.exe"); //True or false
```

Check binary from another platform

```js 
import { is64bit } from "@xan105/is/bin";
//Linux binary with Node running on Windows
const is64 = await is64bit("hello_world","linux"); //same values as os.platform()
//windows binary with Node running on Linux
const is64 = await is64bit("hello_world.exe","win32");
```

#### `is32bit (filePath: string, platform?: string): boolean`

Same as above but for a 32-bit (x86) binary.

#### `isPNG(buffer: Buffer): boolean`
#### `isJPG(buffer: Buffer): boolean`
#### `isICO(buffer: Buffer): boolean`

#### `isIP(value: string): boolean`
#### `isIPv4(value: string): boolean`
#### `isIPv6(value: string): boolean`

#### `isArray(value: any): boolean`
#### `isArrayNotEmpty(value: any): boolean`
#### `isArrayOfString(value: string[]): boolean`
#### `isArrayOfStringNotEmpty(value: string[]): boolean`
#### `isArrayOfNumber(value: number[]): boolean`
#### `isArrayOfInteger(value: number[], safe?: boolean): boolean`
#### `isArrayOfIntegerPositive(value: number[], safe?: boolean): boolean`
#### `isArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): boolean`
#### `isArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: boolean): boolean`
#### `isArrayOfObj(value: any): boolean`
#### `isArrayOfObjWithProperties(value: any): boolean`
#### `isArrayOfBuffer(value: any): boolean`
#### `isBigInt(value: any): boolean`
#### `isBigIntPositive(value: BigInt): boolean`
#### `isBigIntPositiveOrZero(value: BigInt): boolean`
#### `isBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): boolean`
#### `isBoolean(value: any): boolean`  
#### `isBuffer(value: any): boolean`
#### `isInteger(value: number, safe?: boolean): boolean`
#### `isIntegerPositive(value: number, safe?: boolean): boolean`
#### `isIntegerPositiveOrZero(value: number, safe?: boolean): boolean`
#### `isIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): boolean`
#### `isObj(value: any): boolean`
#### `isObjNotEmpty(value: any): boolean`

as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null).

#### `isString(value: any): boolean`
#### `isStringNotEmpty(value: string): boolean`
#### `isHexString(value: string): boolean`

#### `isWindows(): boolean`
#### `isWindowsX86(): boolean`

alias: `isWin32(): boolean`

#### `isWindowsX64(): boolean`

alias: `isWin64(): boolean`

#### `isWin11orGreater(): boolean`
#### `isWin10orGreater(): boolean`
#### `isWin8orGreater(): boolean`
#### `isWin7orGreater(): boolean`
#### `isWin11orLesser(): boolean`
#### `isWin10orLesser(): boolean`
#### `isWin8orLesser(): boolean`
#### `isWin7orLesser(): boolean`
#### `isWin11(): boolean`
#### `isWin10(): boolean`
#### `isWin8(): boolean`
#### `isWin7(): boolean`

### assert

_same as above: perform the same check but throw an error instead._

#### `should64bit (filePath: string, platform?: string): void`
#### `should32bit (filePath: string, platform?: string): void`

#### `shouldPNG(buffer: Buffer): void`
#### `shouldJPG(buffer: Buffer): void`
#### `shouldICO(buffer: Buffer): void`

#### `shouldIP(value: string): void`
#### `shouldIPv4(value: string): void`
#### `shouldIPv6(value: string): void`

#### `shouldArray(value: any): void`
#### `shouldArrayNotEmpty(value: any): void`
#### `shouldArrayOfString(value: string[]): void`
#### `shouldArrayOfStringNotEmpty(value: string[]): void`
#### `shouldArrayOfNumber(value: number[]): void`
#### `shouldArrayOfInteger(value: number[], safe?: boolean): void`
#### `shouldArrayOfIntegerPositive(value: number[], safe?: boolean): void`
#### `shouldArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): void`
#### `shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: boolean): void`
#### `shouldArrayOfObj(value: any): void`
#### `shouldArrayOfObjWithProperties(value: any): void`
#### `shouldArrayOfBuffer(value: any): void`
#### `shouldBigInt(value: any): void`
#### `shouldBigIntPositive(value: BigInt): void`
#### `shouldBigIntPositiveOrZero(value: BigInt): void`
#### `shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): void`
#### `shouldBoolean(value: any): void`
#### `shouldBuffer(value: any): void`
#### `shouldInteger(value: number, safe?: boolean): void`
#### `shouldIntegerPositive(value: number, safe?: boolean): void`
#### `shouldIntegerPositiveOrZero(value: number, safe?: boolean): void`
#### `shouldIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): void`
#### `shouldObj(value: any): void`
#### `shouldObjNotEmpty(value: any): void`

#### `shouldString(value: any): void`
#### `shouldStringNotEmpty(value: string): void`
#### `shouldHexString(value: string): void`

#### `shouldWindows(): void`
#### `shouldWindowsX86(): void`

alias: `shouldWin32(): void`

#### `shouldWindowsX64(): void`

alias: `shouldWin64(): void`

#### `shouldWin11orGreater(): void`
#### `shouldWin10orGreater(): void`
#### `shouldWin8orGreater(): void`
#### `shouldWin7orGreater(): void`
#### `shouldWin11orLesser(): void`
#### `shouldWin10orLesser(): void`
#### `shouldWin8orLesser(): void`
#### `shouldWin7orLesser(): void`
#### `shouldWin11(): void`
#### `shouldWin10(): void`
#### `shouldWin8(): void`
#### `shouldWin7(): void`