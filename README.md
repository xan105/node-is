About
=====

Collection of various 'is ... ?' checks.

Example
=======

Check Windows/Linux 64-bit/32-bit executable
```js
import { is64bit, is32bit } from "@xan105/is";
const is64 = await is64bit("path/to/executable");
const is32 = await is32bit("path/to/executable");
```

Check is PNG file
```js
import { isPNG } from "@xan105/is";
const is = await isPNG("path/to/img");
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

Check Linux
```js
import * as check from "@xan105/is";
check.isDebian();
check.isDebianLike(); //Debian + derivatives (eg: Ubuntu)
check.isGnome();
check.isWayland();
```

Check type
```js
import * as check from "@xan105/is";

check.isStringNotEmpty("hello world");
check.isIntegerWithinRange(1,0,2);
check.isArrayOfString(["a","b"]);
//etc...
```

### Assertion
_Perform the same check but throw an error instead._

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

### Opt
_Return the given value when the condition is true otherwise null._

```js
import { asString, asInteger } from "@xan105/is/opt";

function(option = {}){
  const options = {
    param1: asString(option.param1) || "hello world",
    param2: asInteger(option.param2) ?? 0
  };
}
```

Install
=======

```
npm install @xan105/is
```

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

## Named export

#### `is64bit(filePath: string): Promise<boolean>`

Check if it's a 64-bits (x86_64) Windows or Linux binary.<br />

#### `is32bit(filePath: string): Promise<boolean>`

Same as above but for a 32-bits (x86) Windows or Linux binary.

#### `isPNG(filePath: string): Promise<boolean>`
#### `isJPG(filePath: string): Promise<boolean>`
#### `isICO(filePath: string): Promise<boolean>`
#### `isGIF(filePath: string): Promise<boolean>`
#### `isWEBP(filePath: string): Promise<boolean>`
#### `isQOI(filePath: string): Promise<boolean>`

#### `isIP(value: string): boolean`
#### `isIPv4(value: string): boolean`
#### `isIPv6(value: string): boolean`

#### `isArray(value: any): boolean`
#### `isArrayNotEmpty(value: any): boolean`
#### `isArrayOfString(value: string[]): boolean`
#### `isSizeArrayOfString(value: string[], length: number): boolean`
#### `isArrayOfStringNotEmpty(value: string[]): boolean`
#### `isSizeArrayOfStringNotEmpty(value: string[], length: number): boolean`
#### `isArrayOfNumber(value: number[]): boolean`
#### `isSizeArrayOfNumber(value: number[], length: number): boolean`
#### `isArrayOfNumberWithinRange(value: number[], min: number, max: number): boolean`
#### `isSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): boolean`
#### `isArrayOfInteger(value: number[]): boolean`
#### `isSizeArrayOfInteger(value: number[], length: number): boolean`
#### `isArrayOfIntegerPositive(value: number[]): boolean`
#### `isSizeArrayOfIntegerPositive(value: number[], length: number): boolean`
#### `isArrayOfIntegerPositiveOrZero(value: number[]): boolean`
#### `isSizeArrayOfIntegerPositiveOrZero(value: number[], length: number): boolean`
#### `isArrayOfIntegerWithinRange(value: number[], min: number, max: number): boolean`
#### `isSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number): boolean`
#### `isArrayOfObj(value: any): boolean`
#### `isSizeArrayOfObj(value: any, length: number): boolean`
#### `isArrayOfObjWithProperties(value: any, prop: string[]): boolean`
#### `isSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): boolean`
#### `isArrayOfBuffer(value: any): boolean`
#### `isSizeArrayOfBuffer(value: any, length: number): boolean`

#### `isBigInt(value: any): boolean`
#### `isBigIntPositive(value: BigInt): boolean`
#### `isBigIntPositiveOrZero(value: BigInt): boolean`
#### `isBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): boolean`
#### `isInteger(value: number): boolean`
#### `isIntegerPositive(value: number): boolean`
#### `isIntegerPositiveOrZero(value: number): boolean`
#### `isIntegerWithinRange(value: number, min: number, max: number): boolean`
#### `isNumber(value: number): boolean`
#### `isNumberWithinRange(value: number, min: number, max: number): boolean`

#### `isObj(value: any): boolean`

as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null).

#### `isObjNotEmpty(value: any): boolean`
#### `isObjWithProperties(value: any, prop: string[]): boolean`

#### `isString(value: any): boolean`
#### `isStringNotEmpty(value: string): boolean`
#### `isHexString(value: string): boolean`
#### `isBoolean(value: any): boolean`  
#### `isBuffer(value: any): boolean`
#### `isError(value: any): boolean`

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

#### `isLinux(): boolean`
#### `isArch(): Promise<boolean>`
#### `isArchLike(): Promise<boolean>`
#### `isManjaro(): Promise<boolean>`
#### `isDebian(): Promise<boolean>`
#### `isDebianLike(): Promise<boolean>`
#### `isUbuntu(): Promise<boolean>`
#### `isUbuntuLike(): Promise<boolean>`
#### `isMint(): Promise<boolean>`
#### `isPopOS(): Promise<boolean>`
#### `isElementaryOS(): Promise<boolean>`
#### `isDeepin(): Promise<boolean>`
#### `isRaspberryPiOS(): Promise<boolean>`

alias: `isRaspbian(): Promise<boolean>`

#### `isFedora(): Promise<boolean>`
#### `isFedoraLike(): Promise<boolean>`
#### `isOpenSUSE(): Promise<boolean>`
#### `isSlackware(): Promise<boolean>`
#### `isGentoo(): Promise<boolean>`

#### `isGnome(): boolean`
#### `isKDE(): boolean`
#### `isXFCE(): boolean`
#### `isMate(): boolean`
#### `isCinnamon(): boolean`

#### `isWayland(): boolean`

### assert

_Perform the same checks as above but throw an error instead._<br/>
_This replace the cumbersome if(...) throw ..._

💡 Every assertion has an optional `error` parameter to override the default Error throwned.

#### `should64bit (filePath: string, error?: any): Promise<void>`
#### `should32bit (filePath: string, error?: any): Promise<void>`

#### `shouldPNG(filePath: string, error?: any): Promise<void>`
#### `shouldJPG(filePath: string, error?: any): Promise<void>`
#### `shouldICO(filePath: string, error?: any): Promise<void>`
#### `shouldGIF(filePath: string, error?: any): Promise<void>`
#### `shouldWEBP(filePath: string, error?: any): Promise<void>`
#### `shouldQOI(filePath: string, error?: any): Promise<void>`

#### `shouldIP(value: string, error?: any): void`
#### `shouldIPv4(value: string, error?: any): void`
#### `shouldIPv6(value: string, error?: any): void`

#### `shouldArray(value: any, error?: any): void`
#### `shouldArrayNotEmpty(value: any, error?: any): void`
#### `shouldArrayOfString(value: string[], error?: any): void`
#### `shouldSizeArrayOfString(value: string[], length: number, error?: any): void`
#### `shouldArrayOfStringNotEmpty(value: string[], error?: any): void`
#### `shouldSizeArrayOfStringNotEmpty(value: string[], length: number, error?: any): void`
#### `shouldArrayOfNumber(value: number[], error?: any): void`
#### `shouldSizeArrayOfNumber(value: number[], length: number, error?: any): void`
#### `shouldArrayOfNumberWithinRange(value: number[], min: number, max: number, error?: any): void`
#### `shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number, error?: any): void`
#### `shouldArrayOfInteger(value: number[], error?: any): void`
#### `shouldSizeArrayOfInteger(value: number[], length: number, error?: any): void`
#### `shouldArrayOfIntegerPositive(value: number[], error?: any): void`
#### `shouldSizeArrayOfIntegerPositive(value: number[], length: number, error?: any): void`
#### `shouldArrayOfIntegerPositiveOrZero(value: number[], error?: any): void`
#### `shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, error?: any): void`
#### `shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, error?: any): void`
#### `shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, error?: any): void`
#### `shouldArrayOfObj(value: any, error?: any): void`
#### `shouldSizeArrayOfObj(value: any, length: number, error?: any): void`
#### `shouldArrayOfObjWithProperties(value: any, prop: string[], error?: any): void`
#### `shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[], error?: any): void`
#### `shouldArrayOfBuffer(value: any, error?: any): void`
#### `shouldSizeArrayOfBuffer(value: any, length: number, error?: any): void`

#### `shouldBigInt(value: any, error?: any): void`
#### `shouldBigIntPositive(value: BigInt, error?: any): void`
#### `shouldBigIntPositiveOrZero(value: BigInt, error?: any): void`
#### `shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt, error?: any): void`
#### `shouldInteger(value: number, error?: any): void`
#### `shouldIntegerPositive(value: number, error?: any): void`
#### `shouldIntegerPositiveOrZero(value: number, error?: any): void`
#### `shouldIntegerWithinRange(value: number, min: number, max: number, error?: any): void`
#### `shouldNumber(value: number, error?: any): void`
#### `shouldNumberWithinRange(value: number, min: number, max: number, error?: any): void`

#### `shouldObj(value: any, error?: any): void`
#### `shouldObjNotEmpty(value: any, error?: any): void`
#### `shouldObjWithProperties(value: any, prop: string[], error?: any): void`

#### `shouldString(value: any, error?: any): void`
#### `shouldStringNotEmpty(value: string, error?: any): void`
#### `shouldHexString(value: string, error?: any): void`
#### `shouldBoolean(value: any, error?: any): void`
#### `shouldBuffer(value: any, error?: any): void`
#### `shouldError(value: any, error?: any): void`

#### `shouldWindows(error?: any): void`
#### `shouldWindowsX86(error?: any): void`

alias: `shouldWin32(error?: any): void`

#### `shouldWindowsX64(error?: any): void`

alias: `shouldWin64(error?: any): void`

#### `shouldWin11orGreater(error?: any): void`
#### `shouldWin10orGreater(error?: any): void`
#### `shouldWin8orGreater(error?: any): void`
#### `shouldWin7orGreater(error?: any): void`
#### `shouldWin11orLesser(error?: any): void`
#### `shouldWin10orLesser(error?: any): void`
#### `shouldWin8orLesser(error?: any): void`
#### `shouldWin7orLesser(error?: any): void`
#### `shouldWin11(error?: any): void`
#### `shouldWin10(error?: any): void`
#### `shouldWin8(error?: any): void`
#### `shouldWin7(error?: any): void`

#### `shouldLinux(error?: any): void`
#### `shouldArch(error?: any): Promise<void>`
#### `shouldArchLike(error?: any): Promise<void>`
#### `shouldManjaro(error?: any): Promise<void>`
#### `shouldDebian(error?: any): Promise<void>`
#### `shouldDebianLike(error?: any): Promise<void>`
#### `shouldUbuntu(error?: any): Promise<void>`
#### `shouldUbuntuLike(error?: any): Promise<void>`
#### `shouldMint(error?: any): Promise<void>`
#### `shouldPopOS(error?: any): Promise<void>`
#### `shouldElementaryOS(error?: any): Promise<void>`
#### `shouldDeepin(error?: any): Promise<void>`
#### `shouldRaspberryPiOS(error?: any): Promise<void>`

alias: `shouldRaspbian(error?: any): Promise<void>`

#### `shouldFedora(error?: any): Promise<void>`
#### `shouldFedoraLike(error?: any): Promise<void>`
#### `shouldOpenSUSE(error?: any): Promise<void>`
#### `shouldSlackware(error?: any): Promise<void>`
#### `shouldGentoo(error?: any): Promise<void>`

#### `shouldGnome(error?: any): void`
#### `shouldKDE(error?: any): void`
#### `shouldXFCE(error?: any): void`
#### `shouldMate(error?: any): void`
#### `shouldCinnamon(error?: any): void`

#### `shouldWayland(error?: any): void`

### opt

_Return the given value when the condition is true otherwise null._<br/>
_Works great with operator such as `||` and `??`_

eg:
```js
function(option = {}){
  const options = {
    param1: asString(option.param1) || "hello world",
    param2: asInteger(option.param2) ?? 0
  };
}
```

#### `asArray(value: any): any`
#### `asArrayNotEmpty(value: any): any`
#### `asArrayOfString(value: string[]): string[] | null`
#### `asSizeArrayOfString(value: string[], length: number): string[] | null`
#### `asArrayOfStringNotEmpty(value: string[]): string[] | null`
#### `asSizeArrayOfStringNotEmpty(value: string[], length: number): string[] | null`
#### `asArrayOfNumber(value: number[]): number[] | null`
#### `asSizeArrayOfNumber(value: number[], length: number): number[] | null`
#### `asArrayOfNumberWithinRange(value: number[], min: number, max: number): number[] | null`
#### `asSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): number[] | null`
#### `asArrayOfInteger(value: number[]): number[] | null`
#### `asSizeArrayOfInteger(value: number[], length: number): number[] | null`
#### `asArrayOfIntegerPositive(value: number[]): number[] | null`
#### `asSizeArrayOfIntegerPositive(value: number[], length: number): number[] | null`
#### `asArrayOfIntegerPositiveOrZero(value: number[]): number[] | null`
#### `asSizeArrayOfIntegerPositiveOrZero(value: number[], length: number): number[] | null`
#### `asArrayOfIntegerWithinRange(value: number[], min: number, max: number): number[] | null`
#### `asSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number): number[] | null`
#### `asArrayOfObj(value: any): any`
#### `asSizeArrayOfObj(value: any, length: number): any`
#### `asArrayOfObjWithProperties(value: any, prop: string[]): any`
#### `asSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): any`
#### `asArrayOfBuffer(value: any): any`
#### `asSizeArrayOfBuffer(value: any, length: number): any`

#### `asBigInt(value: any): any`
#### `asBigIntPositive(value: BigInt): BigInt | null`
#### `asBigIntPositiveOrZero(value: BigInt): BigInt | null`
#### `asBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): BigInt | null`
#### `asInteger(value: number): number | null`
#### `asIntegerPositive(value: number): number | null`
#### `asIntegerPositiveOrZero(value: number): number | null`
#### `asIntegerWithinRange(value: number, min: number, max: number): number | null`
#### `asNumber(value: number): number | null`
#### `asNumberWithinRange(value: number, min: number, max: number): number | null`

#### `asObj(value: any): any`
#### `asObjNotEmpty(value: any): any`
#### `asObjWithProperties(value: any, prop: string[]): any`

#### `asString(value: any): any`
#### `asStringNotEmpty(value: string): string | null`
#### `asHexString(value: string): string | null`
#### `asBoolean(value: any): any`
#### `asBuffer(value: any): any`
#### `asError(value: any): any`
