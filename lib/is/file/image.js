/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
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