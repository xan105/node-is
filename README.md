About
=====

Collection of various checks for asserting types and values at runtime.

📦 Scoped `@xan105` packages are for my own personal use but feel free to use them.

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

Check Object like
```js
import { isObjLike, isString, isNumber } from "@xan105/is";

const family = {
  name: "Xan",
  age: 26,
  child: {
    name: "Xanette",
    age: 15
  }
};

isObjLike(family,{
  name: isString,
  age: isNumber,
  child: {
    name: isString,
    age: isNumber
  }
});
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
assert.shouldIntegerWithinRange(1,0,2, "Custom error message");
assert.shouldArrayOfString(["a","b"], new Error("custom error", { cause: err }));
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

Install / Runtime
=================

### 📦 Package manager

```
npm install @xan105/is
```

<details><summary>Compatibility</summary>

- Node ✔️

</details>

### 🌐 CDN / HTTPS Bundle

```
import ... from "https://esm.sh/@xan105/is"
```

Please see https://esm.sh/ for more details.

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

💡 `assert` and `opt` are under their respective namespace.
```js
import { assert } from "@xan105/is";
assert.shouldWin10orGreater();

import { shouldWin10orGreater } from "@xan105/is/assert";
shouldWin10orGreater();
```

## Named export

<details><summary>binary</summary>
  
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
  
</details>

<details><summary>type: array</summary>

#### `isArray(value: unknown): boolean`
#### `isArrayNotEmpty(value: unknown): boolean`
#### `isArrayOfString(value: unknown): boolean`
#### `isSizeArrayOfString(value: unknown, length: number): boolean`
#### `isArrayOfStringNotEmpty(value: unknown): boolean`
#### `isSizeArrayOfStringNotEmpty(value: unknown, length: number): boolean`
#### `isArrayOfNumber(value: unknown): boolean`
#### `isSizeArrayOfNumber(value: unknown, length: number): boolean`
#### `isArrayOfNumberWithinRange(value: unknown, min: number, max: number): boolean`
#### `isSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number): boolean`
#### `isArrayOfInteger(value: unknown): boolean`
#### `isSizeArrayOfInteger(value: unknown, length: number): boolean`
#### `isArrayOfIntegerPositive(value: unknown): boolean`
#### `isSizeArrayOfIntegerPositive(value: unknown, length: number): boolean`
#### `isArrayOfIntegerPositiveOrZero(value: unknown): boolean`
#### `isSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number): boolean`
#### `isArrayOfIntegerWithinRange(value: unknown, min: number, max: number): boolean`
#### `isSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number): boolean`
#### `isArrayOfObj(value: unknown): boolean`
#### `isSizeArrayOfObj(value: unknown, length: number): boolean`
#### `isArrayOfObjWithProperties(value: unknown, prop: string[]): boolean`
#### `isSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[]): boolean`
#### `isArrayOfObjLike(value: unknown, schema: object): boolean`
#### `isArrayOfSomeObjLike(value: unknown, schema: object): boolean`

Same as `isArrayOfObjLike()` but at least **one element** in the array must pass the test instead of **all**

#### `isSizeArrayOfObjLike(value: unknown, length: number, schema: object): boolean`
#### `isArrayOfBuffer(value: unknown): boolean`
#### `isSizeArrayOfBuffer(value: unknown, length: number): boolean`
  
</details>  

<details><summary>type: number</summary>
  
#### `isBigInt(value: unknown): boolean`
#### `isBigIntPositive(value: unknown): boolean`
#### `isBigIntPositiveOrZero(value: unknown): boolean`
#### `isBigIntWithinRange(value: unknown, min: bigint, max: bigint): boolean`
#### `isInteger(value: unknown): boolean`
#### `isIntegerPositive(value: unknown): boolean`
#### `isIntegerPositiveOrZero(value: unknown): boolean`
#### `isIntegerWithinRange(value: unknown, min: number, max: number): boolean`
#### `isNumber(value: unknown): boolean`
#### `isNumberWithinRange(value: unknown, min: number, max: number): boolean`
  
</details>

<details><summary>type: object</summary>

#### `isObj(value: unknown): boolean`

as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null).

#### `isObjNotEmpty(value: unknown): boolean`
#### `isObjWithProperties(value: unknown, prop: string[]): boolean`
#### `isObjLike(value: unknown, schema: object): boolean`

Check if an obj is like the specified schema.<br/>
Where schema is an obj containing a set of required property name and its corresponding _check_ function.<br/>
If the obj has these properties and they are validated by said corresponding function then this will return true otherwise false. 

<details><summary>Example:</summary>

```js
const family = {
  name: "Xan",
  age: 26,
  child: {
    name: "Xanette",
    age: 15,
    height: 164,
    weight: 42
  }
};

isObjLike(family,{
  name: isString,
  age: isNumber,
  child: {
    name: isStringNotEmpty,
    age: [ isIntegerWithinRange, [0,100] ],
    height: isNumber,
    weight: [ isNumber, [] ]
  }
});
```

</details>

The check funtion should only return a **boolean**.<br/>
**Otherwise** or if the function throws then **false** will be assumed.<br/>
_NB: Function that use [@xan105/error](https://github.com/xan105/node-error) will bypass this and still throw (this is by design)._

The check funtion should be defined as follow: `something: [function, [args,...] ]`<br/>
If you don't have any args then an empty array: `something: [function, [] ]`<br/>
Or you can pass the function as is (shortcut): `something: function`<br/>
Note that `something: [function]` is invalid !

💡 You can flag a property to be _optional_ by using `{optional: true}`.<br/>
If the property is missing it will be skipped.<br/>
eg: `something: [function, [], {optional: true}]`

#### `isObjWithinObj(value: unknown): boolean`

Plain object assigned as property within another:

```js
{
  foo: {
    bar: "foo"
  },
  bar: {
    foo: "bar"
  }
}
```
  
</details>

<details><summary>type: string</summary>
  
#### `isString(value: unknown): boolean`
#### `isStringNotEmpty(value: unknown): boolean`
#### `isHexString(value: unknown): boolean`
  
</details>

<details><summary>type: other</summary>
  
#### `isBoolean(value: unknown): boolean`  
#### `isBuffer(value: unknown): boolean`
#### `isError(value: unknown): boolean`
#### `isRegExp(value: unknown): boolean`
  
</details>

<details><summary>os: Windows</summary>

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
  
</details>
  
<details><summary>os: Linux</summary>
  
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
  
</details>

<details><summary>misc</summary>
  
#### `isIP(value: string): boolean`
#### `isIPv4(value: string): boolean`
#### `isIPv6(value: string): boolean`
#### `isDeno(): boolean`
#### `isNode(): boolean`
#### `isBrowser(): boolean`
  
</details>
  
### assert

_Perform the same checks as above but throw an error instead._<br/>
_This replace the cumbersome and often repetitive "if(unexpected) throw Error" pattern_.

💡 Every assertion has an optional `error` parameter to override the default Error.<br/>
You can either use
  
- an instance of/inherit from the `Error` class 
- or a string to just change the default message.

eg: 
  
```js
assert.shouldIntegerWithinRange(1,0,2, "Custom error message");
assert.shouldArrayOfString(["a","b"], new Error("custom error", { cause: err }));
```
  
<details><summary>binary</summary>
  
#### `should64bit (filePath: string, error?: Error | string): Promise<void>`
#### `should32bit (filePath: string, error?: Error | string): Promise<void>`
#### `shouldPNG(filePath: string, error?: Error | string): Promise<void>`
#### `shouldJPG(filePath: string, error?: Error | string): Promise<void>`
#### `shouldICO(filePath: string, error?: Error | string): Promise<void>`
#### `shouldGIF(filePath: string, error?: Error | string): Promise<void>`
#### `shouldWEBP(filePath: string, error?: Error | string): Promise<void>`
#### `shouldQOI(filePath: string, error?: Error | string): Promise<void>`
  
</details>

<details><summary>type: array</summary>
  
#### `shouldArray(value: unknown, error?: Error | string): void`
#### `shouldArrayNotEmpty(value: unknown, error?: Error | string): void`
#### `shouldArrayOfString(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfString(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfStringNotEmpty(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfStringNotEmpty(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfNumber(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfNumber(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfNumberWithinRange(value: unknown, min: number, max: number, error?: Error | string): void`
#### `shouldSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number, error?: Error | string): void`
#### `shouldArrayOfInteger(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfInteger(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfIntegerPositive(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfIntegerPositive(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfIntegerPositiveOrZero(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfIntegerWithinRange(value: unknown, min: number, max: number, error?: Error | string): void`
#### `shouldSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number, error?: Error | string): void`
#### `shouldArrayOfObj(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfObj(value: unknown, length: number, error?: Error | string): void`
#### `shouldArrayOfObjWithProperties(value: unknown, prop: string[], error?: Error | string): void`
#### `shouldSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[], error?: Error | string): void`
#### `shouldArrayOfObjLike(value: unknown, schema: object, error?: Error | string): void`
#### `shouldArrayOfSomeObjLike(value: unknown, schema: object, error?: Error | string): void`
#### `shouldSizeArrayOfObjLike(value: unknown, length: number, schema: object, error?: Error | string): void`
#### `shouldArrayOfBuffer(value: unknown, error?: Error | string): void`
#### `shouldSizeArrayOfBuffer(value: unknown, length: number, error?: Error | string): void`
  
</details>
 
<details><summary>type: number</summary>

#### `shouldBigInt(value: unknown, error?: Error | string): void`
#### `shouldBigIntPositive(value: unknown, error?: Error | string): void`
#### `shouldBigIntPositiveOrZero(value: unknown, error?: Error | string): void`
#### `shouldBigIntWithinRange(value: unknown, min: bigint, max: bigint, error?: Error | string): void`
#### `shouldInteger(value: unknown, error?: Error | string): void`
#### `shouldIntegerPositive(value: unknown, error?: Error | string): void`
#### `shouldIntegerPositiveOrZero(value: unknown, error?: Error | string): void`
#### `shouldIntegerWithinRange(value: unknown, min: number, max: number, error?: Error | string): void`
#### `shouldNumber(value: unknown, error?: Error | string): void`
#### `shouldNumberWithinRange(value: unknown, min: number, max: number, error?: Error | string): void`
  
</details>

<details><summary>type: object</summary>

#### `shouldObj(value: unknown, error?: Error | string): void`
#### `shouldObjNotEmpty(value: unknown, error?: Error | string): void`
#### `shouldObjWithProperties(value: unknown, prop: string[], error?: Error | string): void`
#### `shouldObjLike(value: unknown, schema: object, error?: Error | string): void`
#### `shouldObjWithinObj(value: unknown, error?: Error | string | null): void`
  
</details>

<details><summary>type: string</summary>

#### `shouldString(value: unknown, error?: Error | string): void`
#### `shouldStringNotEmpty(value: unknown, error?: Error | string): void`
#### `shouldHexString(value: unknown, error?: Error | string): void`
  
</details>

<details><summary>type: other</summary>
  
#### `shouldBoolean(value: unknown, error?: Error | string): void`
#### `shouldBuffer(value: unknown, error?: Error | string): void`
#### `shouldError(value: unknown, error?: Error | string): void`
#### `shouldRegExp(value: unknown, error?: Error | string): void`
  
</details>

<details><summary>os: Windows</summary>
  
#### `shouldWindows(error?: Error | string): void`
#### `shouldWindowsX86(error?: Error | string): void`

alias: `shouldWin32(error?: Error | string): void`

#### `shouldWindowsX64(error?: Error | string): void`

alias: `shouldWin64(error?: Error | string): void`

#### `shouldWin11orGreater(error?: Error | string): void`
#### `shouldWin10orGreater(error?: Error | string): void`
#### `shouldWin8orGreater(error?: Error | string): void`
#### `shouldWin7orGreater(error?: Error | string): void`
#### `shouldWin11orLesser(error?: Error | string): void`
#### `shouldWin10orLesser(error?: Error | string): void`
#### `shouldWin8orLesser(error?: Error | string): void`
#### `shouldWin7orLesser(error?: Error | string): void`
#### `shouldWin11(error?: Error | string): void`
#### `shouldWin10(error?: Error | string): void`
#### `shouldWin8(error?: Error | string): void`
#### `shouldWin7(error?: Error | string): void`
  
</details>

<details><summary>os: Linux</summary>

#### `shouldLinux(error?: Error | string): void`
#### `shouldArch(error?: Error | string): Promise<void>`
#### `shouldArchLike(error?: Error | string): Promise<void>`
#### `shouldManjaro(error?: Error | string): Promise<void>`
#### `shouldDebian(error?: Error | string): Promise<void>`
#### `shouldDebianLike(error?: Error | string): Promise<void>`
#### `shouldUbuntu(error?: Error | string): Promise<void>`
#### `shouldUbuntuLike(error?: Error | string): Promise<void>`
#### `shouldMint(error?: Error | string): Promise<void>`
#### `shouldPopOS(error?: Error | string): Promise<void>`
#### `shouldElementaryOS(error?: Error | string): Promise<void>`
#### `shouldDeepin(error?: Error | string): Promise<void>`
#### `shouldRaspberryPiOS(error?: Error | string): Promise<void>`

alias: `shouldRaspbian(error?: Error | string): Promise<void>`

#### `shouldFedora(error?: Error | string): Promise<void>`
#### `shouldFedoraLike(error?: Error | string): Promise<void>`
#### `shouldOpenSUSE(error?: Error | string): Promise<void>`
#### `shouldSlackware(error?: Error | string): Promise<void>`
#### `shouldGentoo(error?: Error | string): Promise<void>`

#### `shouldGnome(error?: Error | string): void`
#### `shouldKDE(error?: Error | string): void`
#### `shouldXFCE(error?: Error | string): void`
#### `shouldMate(error?: Error | string): void`
#### `shouldCinnamon(error?: Error | string): void`

#### `shouldWayland(error?: Error | string): void`
  
</details>
  
<details><summary>misc</summary>

#### `shouldIP(value: string, error?: Error | string): void`
#### `shouldIPv4(value: string, error?: Error | string): void`
#### `shouldIPv6(value: string, error?: Error | string): void`
#### `shouldDeno(error?: Error | string): boolean`
#### `shouldNode(error?: Error | string): boolean`
#### `shouldBrowser(error?: Error | string): boolean`
  
</details>
  
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
  
<details><summary>type: array</summary>
  
#### `asArray(value: unknown): [] | null`
#### `asArrayNotEmpty(value: unknown): [] | null`
#### `asArrayOfString(value: unknown): string[] | null`
#### `asSizeArrayOfString(value: unknown, length: number): string[] | null`
#### `asArrayOfStringNotEmpty(value: unknown): string[] | null`
#### `asSizeArrayOfStringNotEmpty(value: unknown, length: number): string[] | null`
#### `asArrayOfNumber(value: unknown): number[] | null`
#### `asSizeArrayOfNumber(value: unknown, length: number): number[] | null`
#### `asArrayOfNumberWithinRange(value: unknown, min: number, max: number): number[] | null`
#### `asSizeArrayOfNumberWithinRange(value: unknown, length: number, min: number, max: number): number[] | null`
#### `asArrayOfInteger(value: unknown): number[] | null`
#### `asSizeArrayOfInteger(value: unknown, length: number): number[] | null`
#### `asArrayOfIntegerPositive(value: unknown): number[] | null`
#### `asSizeArrayOfIntegerPositive(value: unknown, length: number): number[] | null`
#### `asArrayOfIntegerPositiveOrZero(value: unknown): number[] | null`
#### `asSizeArrayOfIntegerPositiveOrZero(value: unknown, length: number): number[] | null`
#### `asArrayOfIntegerWithinRange(value: unknown, min: number, max: number): number[] | null`
#### `asSizeArrayOfIntegerWithinRange(value: unknown, length: number, min: number, max: number): number[] | null`
#### `asArrayOfObj(value: unknown): object[] | null`
#### `asSizeArrayOfObj(value: unknown, length: number): object[] | null`
#### `asArrayOfObjWithProperties(value: unknown, prop: string[]): object[] | null`
#### `asSizeArrayOfObjWithProperties(value: unknown, length: number, prop: string[]): object[] | null`
#### `asArrayOfObjLike(value: unknown, schema: object): object[] | null`
#### `asArrayOfSomeObjLike(value: unknown, schema: object): object[] | null`

This will return every element matching the given schema.<br />
Unlike `asArrayOfObjLike` which return the array only if all elements pass the test.

#### `asSizeArrayOfObjLike(value: unknown, length: number, schema: object): object[] | null`
#### `asArrayOfBuffer(value: unknown): Buffer[] | null`
#### `asSizeArrayOfBuffer(value: unknown, length: number): Buffer[] | null`
  
</details>

<details><summary>type: number</summary>
  
#### `asBigInt(value: unknown): bigint | null`
#### `asBigIntPositive(value: unknown): bigint | null`
#### `asBigIntPositiveOrZero(value: unknown): bigint | null`
#### `asBigIntWithinRange(value: unknown, min: bigint, max: bigint): bigint | null`
#### `asInteger(value: unknown): number | null`
#### `asIntegerPositive(value: unknown): number | null`
#### `asIntegerPositiveOrZero(value: unknown): number | null`
#### `asIntegerWithinRange(value: unknown, min: number, max: number): number | null`
#### `asNumber(value: unknown): number | null`
#### `asNumberWithinRange(value: unknown, min: number, max: number): number | null`
  
</details>
  
<details><summary>type: object</summary>
  
#### `asObj(value: unknown): object | null`
#### `asObjNotEmpty(value: unknown): object | null`
#### `asObjWithProperties(value: unknown, prop: string[]): object | null`
#### `asObjLike(value: unknown, schema: object): object | null`
#### `asObjWithinObj(value: unknown): object | null`
  
</details>

<details><summary>type: string</summary>
  
#### `asString(value: unknown): string | null`
#### `asStringNotEmpty(value: unknown): string | null`
#### `asHexString(value: unknown): string | null`
  
</details>
  
<details><summary>type: other</summary>

#### `asBoolean(value: unknown): boolean | null`
#### `asBuffer(value: unknown): Buffer | null`
#### `asError(value: unknown): Error | null`
#### `asRegExp(value: unknown): RegExp | null`
  
</details>
