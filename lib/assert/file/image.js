/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/file/image.js";

async function shouldPNG(filePath){
  if (await check.isPNG(filePath) === false) 
    throw new Failure("Expecting PNG file !", "ERR_INVALID");
}

async function shouldJPG(filePath){
  if (await check.isJPG(filePath) === false) 
    throw new Failure("Expecting JPEG file !", "ERR_INVALID");
}

async function shouldICO(filePath){
  if (await check.isICO(filePath) === false) 
    throw new Failure("Expecting ICO file !", "ERR_INVALID");
} 

async function shouldGIF(filePath){
  if (await check.isGIF(filePath) === false) 
    throw new Failure("Expecting GIF file !", "ERR_INVALID");
}

async function shouldWEBP(filePath){
  if (await check.isWEBP(filePath) === false) 
    throw new Failure("Expecting WEBP file !", "ERR_INVALID");
}

async function shouldQOI(filePath){ //https://github.com/phoboslab/qoi
  if (await check.isQOI(filePath) === false) 
    throw new Failure("Expecting QOI file !", "ERR_INVALID");
}

export { 
  shouldPNG, 
  shouldJPG, 
  shouldICO,
  shouldGIF,
  shouldWEBP,
  shouldQOI
}