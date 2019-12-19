Check if a binary is 32 (x86) or 64-bit (x86_64).<br />

Example
=======
```js 
const is64bit = require('is64bit');

is64bit("hello_world.exe").then((is64) => { 
  console.log(`64-bit: ${is64}`) //True or false
}).catch((err) => { console.error(err) });

//async/await
(async ()=>{
  try{
    let is64 = await is64bit("hello_world.exe");
  }catch(err){
    console.error(err);
  }
})();

```

Check binary from another platform
=====================================
```js 
//Linux binary with Node running on Windows
const is64bit = require('is64bit');

is64bit("hello_world","linux") //same values as os.platform()
.then((is64) => { 
  console.log(`64-bit: ${is64}`) //True or false
}).catch((err) => { console.error(err) });
```
