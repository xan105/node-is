/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { createReadStream } from "node:fs";
import { isArray } from "../is/type/array.js";
import { shouldArrayOfBuffer } from "../assert/type/array.js";
import { shouldStringNotEmpty } from "../assert/type/string.js";
import { asIntegerPositiveOrZero } from "../opt/number.js";

function find(filePath, headers, option = {}){
  return new Promise((resolve, reject) => {

    shouldStringNotEmpty(filePath);
    if (!isArray(headers)) headers = [headers];
    shouldArrayOfBuffer(headers);
  
    const options = {
      offset: asIntegerPositiveOrZero(option.offset) ?? 0,
      limit: asIntegerPositiveOrZero(option.limit) ?? 4096
    };

    const stream = createReadStream(filePath, { 
      start: options.offset, 
      end: options.limit + options.offset
    });

    stream.on("readable", function(){
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
    .on("error", function(err){
      reject(err);
      stream.pause();
      stream.destroy();
    })
    .on("end", function() { //EOF
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