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

import { Buffer } from "node:buffer";
import { find } from "../../util/magic.js";

async function isPNG(filePath){
  const header = Buffer.from('89504E470D0A1A0A','hex');
  const is = await find(filePath, header, { limit: header.length });
  return is;
}

async function isJPG(filePath){
  const header = Buffer.from('FFD8FF','hex');
  const is = await find(filePath, header, { limit: header.length });
  return is;
}

async function isICO(filePath){
  const header = Buffer.from('00000100','hex');
  const is = await find(filePath, header, { limit: header.length });
  return is;
} 

async function isGIF(filePath){
  const header = Buffer.from('474946','hex');
  const is = await find(filePath, header, { limit: header.length });
  return is;
}

async function isWEBP(filePath){
  const header = Buffer.from('57454250','hex');
  const is = await find(filePath, header, { offset: 8, limit: header.length});
  return is;
}

async function isQOI(filePath){ //https://github.com/phoboslab/qoi
  const header = Buffer.from('716F6966','hex');
  const is = await find(filePath, header, { limit: header.length});
  return is;
}

export { 
  isPNG, 
  isJPG, 
  isICO, 
  isGIF,
  isWEBP,
  isQOI
}