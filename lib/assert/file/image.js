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