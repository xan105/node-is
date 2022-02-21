import t from 'tap';
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

import * as check from "../lib/index.js";
import * as assert from "../lib/assert.js";

t.test('binary', async t => { 

t.ok(await check.is64bit(join(__dirname,"./sample/wget64")), "is a linux x64 binary");
t.notOk(await check.is64bit(join(__dirname,"./sample/wget86")), "is not a linux x64 binary");
t.notOk(await check.is32bit(join(__dirname,"./sample/wget64")), "is not a linux x86 binary");
t.ok(await check.is32bit(join(__dirname,"./sample/wget86")), "is a linux x86 binary");

t.ok(await check.is64bit(join(__dirname,"./sample/hello64.exe")), "is a windows x64 binary");
t.notOk(await check.is64bit(join(__dirname,"./sample/hello86.exe")), "is not a windows x64 binary");
t.notOk(await check.is32bit(join(__dirname,"./sample/hello64.exe")), "is not a windows x86 binary");
t.ok(await check.is32bit(join(__dirname,"./sample/hello86.exe")), "is a windows x86 binary");

t.notOk(await check.is64bit(join(__dirname,"./sample/blank.txt")), "not a binary");
t.notOk(await check.is32bit(join(__dirname,"./sample/blank.txt")), "not a binary");
t.rejects(check.is64bit(join(__dirname,"./sample/truelove")),"file doesn't exist");
t.rejects(check.is32bit(join(__dirname,"./sample/truelove")),"file doesn't exist");

//assert
t.resolves(assert.should64bit(join(__dirname,"./sample/wget64")), "should linux x64 binary");
t.rejects(assert.should64bit(join(__dirname,"./sample/wget86")), "should not linux x64 binary");
t.rejects(assert.should32bit(join(__dirname,"./sample/wget64")), "should not linux x86 binary");
t.resolves(assert.should32bit(join(__dirname,"./sample/wget86")), "should linux x86 binary");

t.resolves(assert.should64bit(join(__dirname,"./sample/hello64.exe")), "should windows x64 binary");
t.rejects(assert.should64bit(join(__dirname,"./sample/hello86.exe")), "should not windows x64 binary");
t.rejects(assert.should32bit(join(__dirname,"./sample/hello64.exe")), "should not windows x86 binary");
t.resolves(assert.should32bit(join(__dirname,"./sample/hello86.exe")), "should windows x86 binary");

t.rejects(assert.should64bit(join(__dirname,"./sample/blank.txt")), "not a binary");
t.rejects(assert.should32bit(join(__dirname,"./sample/blank.txt")), "not a binary");
t.rejects(assert.should64bit(join(__dirname,"./sample/truelove")),"file doesn't exist");
t.rejects(assert.should32bit(join(__dirname,"./sample/truelove")),"file doesn't exist");

t.end();
});

t.test('image', async t => {

t.ok(await check.isPNG(join(__dirname,"./sample/winner.png")), "is png image file");
t.ok(await check.isJPG(join(__dirname,"./sample/winner.jpg")), "is jpg image file");
t.ok(await check.isICO(join(__dirname,"./sample/winner.ico")), "is ico image file");
t.ok(await check.isGIF(join(__dirname,"./sample/winner.gif")), "is gif image file");
t.ok(await check.isWEBP(join(__dirname,"./sample/image.webp")), "is webp image file");
t.ok(await check.isQOI(join(__dirname,"./sample/qoi_logo.qoi")), "is qoi image file");

t.notOk(await check.isPNG(join(__dirname,"./sample/winner.jpg")), "is not png image file");
t.notOk(await check.isJPG(join(__dirname,"./sample/winner.png")), "is not  jpg image file");
t.notOk(await check.isICO(join(__dirname,"./sample/winner.png")), "is not  ico image file");
t.notOk(await check.isGIF(join(__dirname,"./sample/winner.png")), "is not  gif image file");
t.notOk(await check.isWEBP(join(__dirname,"./sample/winner.png")), "is not  webp image file");
t.notOk(await check.isQOI(join(__dirname,"./sample/winner.png")), "is not  qoi image file");

//assert
t.resolves(assert.shouldPNG(join(__dirname,"./sample/winner.png")), "should png image file");
t.resolves(assert.shouldJPG(join(__dirname,"./sample/winner.jpg")), "should jpg image file");
t.resolves(assert.shouldICO(join(__dirname,"./sample/winner.ico")), "should ico image file");
t.resolves(assert.shouldGIF(join(__dirname,"./sample/winner.gif")), "should gif image file");
t.resolves(assert.shouldWEBP(join(__dirname,"./sample/image.webp")), "should webp image file");
t.resolves(assert.shouldQOI(join(__dirname,"./sample/qoi_logo.qoi")), "should qoi image file");

t.rejects(assert.shouldPNG(join(__dirname,"./sample/winner.jpg")), "should not png image file");
t.rejects(assert.shouldJPG(join(__dirname,"./sample/winner.png")), "should not  jpg image file");
t.rejects(assert.shouldICO(join(__dirname,"./sample/winner.png")), "should not  ico image file");
t.rejects(assert.shouldGIF(join(__dirname,"./sample/winner.png")), "should not  gif image file");
t.rejects(assert.shouldWEBP(join(__dirname,"./sample/winner.png")), "should not  webp image file");
t.rejects(assert.shouldQOI(join(__dirname,"./sample/winner.png")), "should not  qoi image file");

t.end();
});