/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/file/image.js";

async function shouldPNG(filePath, error = null){
  if (await check.isPNG(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected PNG file !", 2);
}

async function shouldJPG(filePath, error = null){
  if (await check.isJPG(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected JPEG file !", 2);
}

async function shouldICO(filePath, error = null){
  if (await check.isICO(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected ICO file !", 2);
} 

async function shouldGIF(filePath, error = null){
  if (await check.isGIF(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected GIF file !", 2);
}

async function shouldWEBP(filePath, error = null){
  if (await check.isWEBP(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected WEBP file !", 2);
}

async function shouldQOI(filePath, error = null){ //https://github.com/phoboslab/qoi
  if (await check.isQOI(filePath) === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected QOI file !", 2);
}

export { 
  shouldPNG, 
  shouldJPG, 
  shouldICO,
  shouldGIF,
  shouldWEBP,
  shouldQOI
}