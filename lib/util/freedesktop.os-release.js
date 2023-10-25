/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { readFile } from "node:fs/promises";

//Official doc: https://www.freedesktop.org/software/systemd/man/os-release.html

async function read(){
/*
  The file /etc/os-release takes precedence over /usr/lib/os-release.
  Applications should check for the former, and exclusively use its data if it exists, and only fall back to /usr/lib/os-release 
  if it is missing. Applications should not read data from both files at the same time.
*/
  const filePath = [
    "/etc/os-release",
    "/usr/lib/os-release"
  ];

  let data = "";

  for (const file of filePath) {
    try{
      data = await readFile(file, "utf8"); //All strings should be in UTF-8 encoding
      break;
    }catch{
      continue
    }
  }

  return data;
}

//Modified from @xan105/ini [github.com/xan105/node-ini] (MIT) since it's an .ini like syntax

function unquote(string){
  if (string[0] === '"' && string.slice(-1) === '"') string = string.replace(/^"|"$/g, '');
  else if (string[0] === "'" && string.slice(-1) === "'") string = string.replace(/^'|'$/g, '');
  return string;
}

async function parse(){

  const data = await read();

  let result = Object.create(null);
  const lines = data.split("\n");

  for (const line of lines){
    //Lines beginning with "#" are treated as comments. Blank lines are permitted and ignored.
    if (!line || /^\s*[#]/.test(line)) continue; //ignore empty and comment
    const pos = line.indexOf("=");
    if (pos < 1) continue //ignore missing '=' and empty key; better safe than sorry
    const key = line.slice(0, pos).trim().toLowerCase(); //toLowerCase() for lowercase var in js
    if (key === "__proto__") continue; //not allowed
    const value = unquote(line.slice(pos + 1).trim()); //Variable assignment values may be enclosed in double or single quotes
    result[key] = value; //os-release must not contain repeating keys. Nevertheless, readers should pick the entries later in the file in case of repeats
  }

  return result;
}

export { parse };