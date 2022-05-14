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

Install
=======

```
npm install @xan105/is
```

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

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

<details><summary>misc</summary>
  
#### `isIP(value: string): boolean`
#### `isIPv4(value: string): boolean`
#### `isIPv6(value: string): boolean`
  
</details>

<details><summary>type: array</summary>

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
#### `isArrayOfObjLike(value: any, schema: object): boolean`
#### `isSizeArrayOfObjLike(value: any, length: number, schema: object): boolean`
#### `isArrayOfBuffer(value: any): boolean`
#### `isSizeArrayOfBuffer(value: any, length: number): boolean`
  
</details>  

<details><summary>type: number</summary>
  
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
  
</details>

<details><summary>type: object</summary>

#### `isObj(value: any): boolean`

as in a "plain obj" and not a JS obj so {}, new Object() and Object.create(null).

#### `isObjNotEmpty(value: any): boolean`
#### `isObjWithProperties(value: any, prop: string[]): boolean`
#### `isObjLike(value: any, schema: object): boolean`

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
  
</details>

<details><summary>type: string</summary>
  
#### `isString(value: any): boolean`
#### `isStringNotEmpty(value: string): boolean`
#### `isHexString(value: string): boolean`
  
</details>

<details><summary>type: other</summary>
  
#### `isBoolean(value: any): boolean`  
#### `isBuffer(value: any): boolean`
#### `isError(value: any): boolean`
  
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

### assert

_Perform the same checks as above but throw an error instead._<br/>
_This replace the cumbersome if(...) throw ..._

💡 Every assertion has an optional `error` parameter to override the default Error.<br/>
You can either use
  
- an instance of/inherit from the `Error` class 
- or a string to just change the default message.

<details><summary>binary</summary>
  
#### `should64bit (filePath: string, error?: string | object): Promise<void>`
#### `should32bit (filePath: string, error?: string | object): Promise<void>`
#### `shouldPNG(filePath: string, error?: string | object): Promise<void>`
#### `shouldJPG(filePath: string, error?: string | object): Promise<void>`
#### `shouldICO(filePath: string, error?: string | object): Promise<void>`
#### `shouldGIF(filePath: string, error?: string | object): Promise<void>`
#### `shouldWEBP(filePath: string, error?: string | object): Promise<void>`
#### `shouldQOI(filePath: string, error?: string | object): Promise<void>`
  
</details>
  
<details><summary>misc</summary>

#### `shouldIP(value: string, error?: string | object): void`
#### `shouldIPv4(value: string, error?: string | object): void`
#### `shouldIPv6(value: string, error?: string | object): void`
  
</details>

<details><summary>type: array</summary>
  
#### `shouldArray(value: any, error?: string | object): void`
#### `shouldArrayNotEmpty(value: any, error?: string | object): void`
#### `shouldArrayOfString(value: string[], error?: string | object): void`
#### `shouldSizeArrayOfString(value: string[], length: number, error?: string | object): void`
#### `shouldArrayOfStringNotEmpty(value: string[], error?: string | object): void`
#### `shouldSizeArrayOfStringNotEmpty(value: string[], length: number, error?: string | object): void`
#### `shouldArrayOfNumber(value: number[], error?: string | object): void`
#### `shouldSizeArrayOfNumber(value: number[], length: number, error?: string | object): void`
#### `shouldArrayOfNumberWithinRange(value: number[], min: number, max: number, error?: string | object): void`
#### `shouldSizeArrayOfNumberWithinRange(value: number[], length: number, min: number, max: number, error?: string | object): void`
#### `shouldArrayOfInteger(value: number[], error?: string | object): void`
#### `shouldSizeArrayOfInteger(value: number[], length: number, error?: string | object): void`
#### `shouldArrayOfIntegerPositive(value: number[], error?: string | object): void`
#### `shouldSizeArrayOfIntegerPositive(value: number[], length: number, error?: string | object): void`
#### `shouldArrayOfIntegerPositiveOrZero(value: number[], error?: string | object): void`
#### `shouldSizeArrayOfIntegerPositiveOrZero(value: number[], length: number, error?: string | object): void`
#### `shouldArrayOfIntegerWithinRange(value: number[], min: number, max: number, error?: string | object): void`
#### `shouldSizeArrayOfIntegerWithinRange(value: number[], length: number, min: number, max: number, error?: string | object): void`
#### `shouldArrayOfObj(value: any, error?: string | object): void`
#### `shouldSizeArrayOfObj(value: any, length: number, error?: string | object): void`
#### `shouldArrayOfObjWithProperties(value: any, prop: string[], error?: string | object): void`
#### `shouldSizeArrayOfObjWithProperties(value: any, length: number, prop: string[], error?: string | object): void`
#### `shouldArrayOfObjLike(value: any, schema: object): void`
#### `shouldSizeArrayOfObjLike(value: any, length: number, schema: object): void`
#### `shouldArrayOfBuffer(value: any, error?: string | object): void`
#### `shouldSizeArrayOfBuffer(value: any, length: number, error?: string | object): void`
  
</details>
 
<details><summary>type: number</summary>

#### `shouldBigInt(value: any, error?: string | object): void`
#### `shouldBigIntPositive(value: BigInt, error?: string | object): void`
#### `shouldBigIntPositiveOrZero(value: BigInt, error?: string | object): void`
#### `shouldBigIntWithinRange(value: BigInt, min: BigInt, max: BigInt, error?: string | object): void`
#### `shouldInteger(value: number, error?: string | object): void`
#### `shouldIntegerPositive(value: number, error?: string | object): void`
#### `shouldIntegerPositiveOrZero(value: number, error?: string | object): void`
#### `shouldIntegerWithinRange(value: number, min: number, max: number, error?: string | object): void`
#### `shouldNumber(value: number, error?: string | object): void`
#### `shouldNumberWithinRange(value: number, min: number, max: number, error?: string | object): void`
  
</details>

<details><summary>type: object</summary>

#### `shouldObj(value: any, error?: string | object): void`
#### `shouldObjNotEmpty(value: any, error?: string | object): void`
#### `shouldObjWithProperties(value: any, prop: string[], error?: string | object): void`
#### `shouldObjLike(value: any, schema: object): void`
  
</details>

<details><summary>type: string</summary>

#### `shouldString(value: any, error?: string | object): void`
#### `shouldStringNotEmpty(value: string, error?: string | object): void`
#### `shouldHexString(value: string, error?: string | object): void`
  
</details>

<details><summary>type: other</summary>
  
#### `shouldBoolean(value: any, error?: string | object): void`
#### `shouldBuffer(value: any, error?: string | object): void`
#### `shouldError(value: any, error?: string | object): void`
  
</details>

<details><summary>os: Windows</summary>
  
#### `shouldWindows(error?: string | object): void`
#### `shouldWindowsX86(error?: string | object): void`

alias: `shouldWin32(error?: string | object): void`

#### `shouldWindowsX64(error?: string | object): void`

alias: `shouldWin64(error?: string | object): void`

#### `shouldWin11orGreater(error?: string | object): void`
#### `shouldWin10orGreater(error?: string | object): void`
#### `shouldWin8orGreater(error?: string | object): void`
#### `shouldWin7orGreater(error?: string | object): void`
#### `shouldWin11orLesser(error?: string | object): void`
#### `shouldWin10orLesser(error?: string | object): void`
#### `shouldWin8orLesser(error?: string | object): void`
#### `shouldWin7orLesser(error?: string | object): void`
#### `shouldWin11(error?: string | object): void`
#### `shouldWin10(error?: string | object): void`
#### `shouldWin8(error?: string | object): void`
#### `shouldWin7(error?: string | object): void`
  
</details>

<details><summary>os: Linux</summary>

#### `shouldLinux(error?: string | object): void`
#### `shouldArch(error?: string | object): Promise<void>`
#### `shouldArchLike(error?: string | object): Promise<void>`
#### `shouldManjaro(error?: string | object): Promise<void>`
#### `shouldDebian(error?: string | object): Promise<void>`
#### `shouldDebianLike(error?: string | object): Promise<void>`
#### `shouldUbuntu(error?: string | object): Promise<void>`
#### `shouldUbuntuLike(error?: string | object): Promise<void>`
#### `shouldMint(error?: string | object): Promise<void>`
#### `shouldPopOS(error?: string | object): Promise<void>`
#### `shouldElementaryOS(error?: string | object): Promise<void>`
#### `shouldDeepin(error?: string | object): Promise<void>`
#### `shouldRaspberryPiOS(error?: string | object): Promise<void>`

alias: `shouldRaspbian(error?: string | object): Promise<void>`

#### `shouldFedora(error?: string | object): Promise<void>`
#### `shouldFedoraLike(error?: string | object): Promise<void>`
#### `shouldOpenSUSE(error?: string | object): Promise<void>`
#### `shouldSlackware(error?: string | object): Promise<void>`
#### `shouldGentoo(error?: string | object): Promise<void>`

#### `shouldGnome(error?: string | object): void`
#### `shouldKDE(error?: string | object): void`
#### `shouldXFCE(error?: string | object): void`
#### `shouldMate(error?: string | object): void`
#### `shouldCinnamon(error?: string | object): void`

#### `shouldWayland(error?: string | object): void`
  
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
#### `asArrayOfObjLike(value: any, schema: object): any`
#### `asSizeArrayOfObjLike(value: any, length: number, schema: object): any`
#### `asArrayOfBuffer(value: any): any`
#### `asSizeArrayOfBuffer(value: any, length: number): any`
  
</details>

<details><summary>type: number</summary>
  
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
  
</details>
  
<details><summary>type: object</summary>
  
#### `asObj(value: any): any`
#### `asObjNotEmpty(value: any): any`
#### `asObjWithProperties(value: any, prop: string[]): any`
#### `asObjLike(value: any, schema: object): any`
  
</details>

<details><summary>type: string</summary>
  
#### `asString(value: any): any`
#### `asStringNotEmpty(value: string): string | null`
#### `asHexString(value: string): string | null`
  
</details>
  
<details><summary>type: other</summary>

#### `asBoolean(value: any): any`
#### `asBuffer(value: any): any`
#### `asError(value: any): any`
  
</details>
