About
=====

Collection of various 'is ... ?' checks.

Install
=======

`npm install @xan105/is`

API
===

⚠️ This module is only available as an ECMAScript module (ESM)<br />

binary is 32 (x86) or

## Named export

### bin

#### `is64bit (filePath: string, platform?: string): bool`

Check if a 64-bit (x86_64) binary.<br />

📖 cf:
- https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
- https://docs.microsoft.com/en-us/windows/win32/debug/pe-format#machine-types
- https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#File_header

##### Example

```js 
import { is64bit } from "@xan105/is/bin');
const is64 = await is64bit("hello_world.exe"); //True or false
```

Check binary from another platform

```js 
import { is64bit } from "@xan105/is/bin');
//Linux binary with Node running on Windows
const is64 = await is64bit("hello_world","linux") //same values as os.platform()
```

#### `is32bit (filePath: string, platform?: string): bool`

Same as above but for a 32-bit (x86) binary.
