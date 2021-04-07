/*
MIT License

Copyright (c) 2019-2020 Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

const os = require('os');
const fs = require('fs');

const format = {
  win32: // cf: https://docs.microsoft.com/en-us/windows/win32/debug/pe-format
  { 
      header: Buffer.from('50450000','hex'), // "P" and "E" followed by two null bytes
      x86 : Buffer.from('4C01','hex'), //32-bit executable
      x86_64 : Buffer.from('6486','hex') //64-bit executable
      /* There are a lot more possible values
      Example:
      Buffer.from('c001','hex') -> ARM little endian
      Buffer.from('64aa','hex') -> ARM64 little endian
      Buffer.from('c401','hex') -> ARM Thumb2 little endian
      cf: https://docs.microsoft.com/en-us/windows/win32/debug/pe-format#machine-types
      */
  },
  linux: // cf: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#File_header
  { 
      header: Buffer.from('7F454C46','hex'), // 0x7F followed by "ELF" in ASCII
      x86 : Buffer.from('01','hex'), //32-bit executable
      x86_64 : Buffer.from('02','hex') //64-bit executable
  }
}

module.exports = (filePath, platform = os.platform()) => { 
  return new Promise((resolve, reject) => {

    const marker = format[platform];
    if (!marker) throw "Unsupported platform";

    let stream = fs.createReadStream(filePath);
    
    stream.on('readable', function () {
          let chunk;
          while ((chunk = stream.read()) !== null) {
      
            let pos = chunk.indexOf(marker.header, 0, "hex");
            
            if (pos != -1) //Found magic header
            {
              pos += marker.header.length;
              
              let arch = chunk.slice(pos, pos + marker.x86.length);
              
              if (arch.equals(marker.x86_64)) {
                resolve(true);
              } else if(arch.equals(marker.x86)) {
                resolve(false);
              } else {
                reject("Neither a 32-bit (x86) nor 64-bit (x86_64) binary");
              }
              stream.pause();
              stream.destroy();
           }

         }

    })
    .on('error', function(err) {
       reject(err);
       stream.pause();
       stream.destroy();
    })
    .on('end', function() {  //File fully parsed
       reject("Neither a 32-bit (x86) nor 64-bit (x86_64) binary");
    });
  
  });
}
