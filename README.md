About
=====

Collection of various 'is ... ?' checks.

Example
=======

Check binary x64 or x86
```js
import { is64bit } from "@xan105/is/bin";
const is64 = await is64bit("path/to/executable");
```

Check is valid PNG file
```js
import { isPNG } from "@xan105/is/img";
import { readFile } from "node:fs/promises";
const valid = isPNG(await readFile("path/to/img")); //read as a Buffer
```

Check winver
```js
import { win as os } from "@xan105/is";
os.isWin10orGreater();
os.isWin11();
os.isWindows();
os.isWin64(); //64-bits
//etc...
```

Check type
```js
import { type } from "@xan105/is";

type.isStringNotEmpty("hello world");
type.isIntegerWithinRange(1,0,2);
type.isArrayOfString(["a","b"]);
//etc...
```

Install
=======

`npm install @xan105/is`

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

## Named export

- bin
- img
- type
- win

### bin

#### `is64bit (filePath: string, platform?: string): bool`

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

#### `is32bit (filePath: string, platform?: string): bool`

Same as above but for a 32-bit (x86) binary.

### img

#### `isPNG(buf: Buffer): bool`
#### `isJPG(buf: Buffer): bool`
#### `isICO(buf: Buffer): bool`

### type

#### `isArray(value: any): bool`
#### `isArrayNotEmpty(value: any): bool`
#### `isArrayOfString(value: string[]): bool`
#### `isArrayOfStringNotEmpty(value: string[]): bool`
#### `isArrayOfNumber(value: number[]): bool`
#### `isArrayOfInteger(value: number[], safe?: bool): bool`
#### `isArrayOfIntegerPositive(value: number[], safe?: bool): bool`
#### `isArrayOfIntegerPositiveOrZero(value: number[], safe?: bool): bool`
#### `isArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: bool): bool`
#### `isArrayOfObj(value: any): bool`
#### `isArrayOfObjWithProperties(value: any): bool`
#### `isBigInt(i: any): bool`
#### `isBigIntPositive(i: BigInt): bool`
#### `isBigIntPositiveOrZero(i: BigInt): bool`
#### `isBigIntWithinRange(i: BigInt, min: BigInt, max: BigInt): bool`
#### `isBuffer(value: any): bool`
#### `isInteger(i: number, safe?: bool): bool`
#### `isIntegerPositive(i: number, safe?: bool): bool`
#### `isIntegerPositiveOrZero(i: number, safe?: bool): bool`
#### `isIntegerWithinRange(i: number, min: number, max: number, safe?: bool): bool`
#### `isObj(value: any): bool`

as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null).

#### `isString(value: any): bool`
#### `isStringNotEmpty(value: string): bool`
#### `isHexString(value: string): bool`

### win

#### `isWindows(): bool`
#### `isWindowsX86(): bool`

alias: `isWin32(): bool`

#### `isWindowsX64(): bool`

alias: `isWin64(): bool`

#### `isWin11orGreater(): bool`
#### `isWin10orGreater(): bool`
#### `isWin8orGreater(): bool`
#### `isWin7orGreater(): bool`
#### `isWin11orLesser(): bool`
#### `isWin10orLesser(): bool`
#### `isWin8orLesser(): bool`
#### `isWin7orLesser(): bool`
#### `isWin11(): bool`
#### `isWin10(): bool`
#### `isWin8(): bool`
#### `isWin7(): bool`