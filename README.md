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
#### `isArrayOfInteger(value: number[], safe?: boolean): boolean`
#### `isSizeArrayOfInteger(value: number[], length: number, safe?: boolean): boolean`
#### `isArrayOfIntegerPositive(value: number[], safe?: boolean): boolean`
#### `isSizeArrayOfIntegerPositive(value: number[], length: number, safe?: boolean): boolean`
#### `isArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): boolean`
#### `isSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, safe?: boolean): boolean`
#### `isArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: boolean): boolean`
#### `isSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, safe?: boolean): boolean`
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
#### `isInteger(value: number, safe?: boolean): boolean`
#### `isIntegerPositive(value: number, safe?: boolean): boolean`
#### `isIntegerPositiveOrZero(value: number, safe?: boolean): boolean`
#### `isIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): boolean`
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

_Perform the same checks as above but throw an error instead._
_This replace the cumbersome if(...) throw ..._

#### `should64bit (filePath: string): Promise<void>`
#### `should32bit (filePath: string): Promise<void>`

#### `shouldPNG(filePath: string): Promise<void>`
#### `shouldJPG(filePath: string): Promise<void>`
#### `shouldICO(filePath: string): Promise<void>`
#### `shouldGIF(filePath: string): Promise<void>`
#### `shouldWEBP(filePath: string): Promise<void>`
#### `shouldQOI(filePath: string): Promise<void>`

#### `shouldIP(value: string): void`
#### `shouldIPv4(value: string): void`
#### `shouldIPv6(value: string): void`

#### `shouldArray(value: any): void`
#### `shouldArrayNotEmpty(value: any): void`
#### `shouldArrayOfString(value: string[]): void`
#### `shouldSizeArrayOfString(value: string[], length: number): void`
#### `shouldArrayOfStringNotEmpty(value: string[]): void`
#### `shouldSizeArrayOfStringNotEmpty(value: string[], length: number): void`
#### `shouldArrayOfNumber(value: number[]): void`
#### `shouldSizeArrayOfNumber(value: number[], length: number): void`
#### `shouldArrayOfNumberWithinRange(value: number[], min: number, max: number): void`
#### `shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number): void`
#### `shouldArrayOfInteger(value: number[], safe?: boolean): void`
#### `shouldSizeArrayOfInteger(value: number[], length: number, safe?: boolean): void`
#### `shouldArrayOfIntegerPositive(value: number[], safe?: boolean): void`
#### `shouldSizeArrayOfIntegerPositive(value: number[], length: number, safe?: boolean): void`
#### `shouldArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): void`
#### `shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, safe?: boolean): void`
#### `shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: boolean): void`
#### `shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, safe?: boolean): void`
#### `shouldArrayOfObj(value: any): void`
#### `shouldSizeArrayOfObj(value: any, length: number): void`
#### `shouldArrayOfObjWithProperties(value: any, prop: string[]): void`
#### `shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[]): void`
#### `shouldArrayOfBuffer(value: any): void`
#### `shouldSizeArrayOfBuffer(value: any, length: number): void`

#### `shouldBigInt(value: any): void`
#### `shouldBigIntPositive(value: BigInt): void`
#### `shouldBigIntPositiveOrZero(value: BigInt): void`
#### `shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt): void`
#### `shouldInteger(value: number, safe?: boolean): void`
#### `shouldIntegerPositive(value: number, safe?: boolean): void`
#### `shouldIntegerPositiveOrZero(value: number, safe?: boolean): void`
#### `shouldIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): void`
#### `shouldNumber(value: number): void`
#### `shouldNumberWithinRange(value: number, min: number, max: number): void`

#### `shouldObj(value: any): void`
#### `shouldObjNotEmpty(value: any): void`
#### `shouldObjWithProperties(value: any, prop: string[]): void`

#### `shouldString(value: any): void`
#### `shouldStringNotEmpty(value: string): void`
#### `shouldHexString(value: string): void`
#### `shouldBoolean(value: any): void`
#### `shouldBuffer(value: any): void`

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

#### `shouldLinux(): void`
#### `shouldArch(): Promise<void>`
#### `shouldArchLike(): Promise<void>`
#### `shouldManjaro(): Promise<void>`
#### `shouldDebian(): Promise<void>`
#### `shouldDebianLike(): Promise<void>`
#### `shouldUbuntu(): Promise<void>`
#### `shouldUbuntuLike(): Promise<void>`
#### `shouldMint(): Promise<void>`
#### `shouldPopOS(): Promise<void>`
#### `shouldElementaryOS(): Promise<void>`
#### `shouldDeepin(): Promise<void>`
#### `shouldRaspberryPiOS(): Promise<void>`

alias: `shouldRaspbian(): Promise<void>`

#### `shouldFedora(): Promise<void>`
#### `shouldFedoraLike(): Promise<void>`
#### `shouldOpenSUSE(): Promise<void>`
#### `shouldSlackware(): Promise<void>`
#### `shouldGentoo(): Promise<void>`

#### `shouldGnome(): void`
#### `shouldKDE(): void`
#### `shouldXFCE(): void`
#### `shouldMate(): void`
#### `shouldCinnamon(): void`

#### `shouldWayland(): void`

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
#### `asArrayOfInteger(value: number[], safe?: boolean): number[] | null`
#### `asSizeArrayOfInteger(value: number[], length: number, safe?: boolean): number[] | null`
#### `asArrayOfIntegerPositive(value: number[], safe?: boolean): number[] | null`
#### `asSizeArrayOfIntegerPositive(value: number[], length: number, safe?: boolean): number[] | null`
#### `asArrayOfIntegerPositiveOrZero(value: number[], safe?: boolean): number[] | null`
#### `asSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, safe?: boolean): number[] | null`
#### `asArrayOfIntegerWithinRange(value: number[], min: number, max: number, safe?: boolean): number[] | null`
#### `asSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, safe?: boolean): number[] | null`
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
#### `asInteger(value: number, safe?: boolean): number | null`
#### `asIntegerPositive(value: number, safe?: boolean): number | null`
#### `asIntegerPositiveOrZero(value: number, safe?: boolean): number | null`
#### `asIntegerWithinRange(value: number, min: number, max: number, safe?: boolean): number | null`
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
