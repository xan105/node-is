/*
MIT License

Copyright (c) Anthony Beaumont

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

import { createReadStream } from "node:fs";
import { isBuffer } from "../is/type/buffer.js";
import { isIntegerPositiveOrZero } from "../is/type/number.js";
import { shouldArrayOfBuffer } from "../assert/type/array.js";
import { shouldStringNotEmpty } from "../assert/type/string.js";

function find(filePath, headers, option = {}){
  
  shouldStringNotEmpty(filePath);
  if (isBuffer(headers)) headers = [headers];
  shouldArrayOfBuffer(headers);
  
  const options = {
    offset: isIntegerPositiveOrZero(option.offset) ? option.offset : 0,
    limit: isIntegerPositiveOrZero(option.limit) ? option.limit : 4096
  };

  return new Promise((resolve, reject) => {

    const stream = createReadStream(filePath, { start: options.offset, end: options.limit + options.offset });

    stream.on('readable', function(){
      let chunk;
      while ((chunk = stream.read()) !== null) 
      {
        const pos = indexOfAny(chunk, headers);
        if (pos === -1) continue;
        resolve(true);
        stream.pause();
        stream.destroy();
      }
    })
    .on('error', function(err){
      reject(err);
      stream.pause();
      stream.destroy();
    })
    .on('end', function() {//file parsed
      resolve(false);
    });

  });
}

function indexOfAny(chunk, headers){
  for (const header of headers)
  {
    const pos = chunk.indexOf(header);
    if (pos !== -1) return pos;
  }
  return -1;
}

export { find };