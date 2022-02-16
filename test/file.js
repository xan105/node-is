import t from 'tap';
import { readFileSync as readFile } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { is64bit, is32bit, isPNG, isJPG, isICO } from "../lib/index.js";
import { should64bit, should32bit, shouldPNG, shouldJPG, shouldICO } from "../lib/assert.js";

t.test('binary', async t => { 

t.ok(await is64bit(join(__dirname,"./sample/wget64"), "linux"), "is a linux x64 binary");
t.notOk(await is64bit(join(__dirname,"./sample/wget86"), "linux"), "is not a linux x64 binary");
t.notOk(await is32bit(join(__dirname,"./sample/wget64"), "linux"), "is not a linux x86 binary");
t.ok(await is32bit(join(__dirname,"./sample/wget86"), "linux"), "is a linux x86 binary");

t.ok(await is64bit(join(__dirname,"./sample/hello64.exe"), "win32"), "is a windows x64 binary");
t.notOk(await is64bit(join(__dirname,"./sample/hello86.exe"), "win32"), "is not a windows x64 binary");
t.notOk(await is32bit(join(__dirname,"./sample/hello64.exe"), "win32"), "is not a windows x86 binary");
t.ok(await is32bit(join(__dirname,"./sample/hello86.exe"), "win32"), "is a windows x86 binary");

t.rejects(is64bit(join(__dirname,"./sample/blank.txt")), "not a binary");
t.rejects(is64bit(join(__dirname,"./sample/truelove")),"file doesn't exist");

//assert
t.resolves(should64bit(join(__dirname,"./sample/wget64"), "linux"), "should linux x64 binary");
t.rejects(should64bit(join(__dirname,"./sample/wget86"), "linux"), "should not linux x64 binary");
t.rejects(should32bit(join(__dirname,"./sample/wget64"), "linux"), "should not linux x86 binary");
t.resolves(should32bit(join(__dirname,"./sample/wget86"), "linux"), "should linux x86 binary");

t.resolves(should64bit(join(__dirname,"./sample/hello64.exe"), "win32"), "should windows x64 binary");
t.rejects(should64bit(join(__dirname,"./sample/hello86.exe"), "win32"), "should not windows x64 binary");
t.rejects(should32bit(join(__dirname,"./sample/hello64.exe"), "win32"), "should not windows x86 binary");
t.resolves(should32bit(join(__dirname,"./sample/hello86.exe"), "win32"), "should windows x86 binary");

t.end();
});

t.test('image', t => {

t.ok(isPNG(readFile(join(__dirname,"./sample/winner.png"))), "is a valid png image file");
t.ok(isJPG(readFile(join(__dirname,"./sample/winner.jpg"))), "is a valid jpg image file");
t.ok(isICO(readFile(join(__dirname,"./sample/winner.ico"))), "is a valid ico image file");

t.notOk(isPNG(readFile(join(__dirname,"./sample/winner.jpg"))), "is not a valid png image file");
t.notOk(isJPG(readFile(join(__dirname,"./sample/winner.png"))), "is not a valid jpg image file");
t.notOk(isICO(readFile(join(__dirname,"./sample/winner.png"))), "is not a valid ico image file");

t.throws(function(){ isPNG(readFile(join(__dirname,"./sample/blank.txt"),"utf8")) }, {code: "ERR_INVALID_ARGS"}, "not a buffer");
t.throws(function(){ isJPG(readFile(join(__dirname,"./sample/blank.txt"),"utf8")) }, {code: "ERR_INVALID_ARGS"}, "not a buffer");
t.throws(function(){ isICO(readFile(join(__dirname,"./sample/blank.txt"),"utf8")) }, {code: "ERR_INVALID_ARGS"}, "not a buffer");

//assert
t.doesNotThrow(function(){ shouldPNG(readFile(join(__dirname,"./sample/winner.png"))) }, "should valid png image file");
t.doesNotThrow(function(){ shouldJPG(readFile(join(__dirname,"./sample/winner.jpg"))) }, "should valid jpg image file");
t.doesNotThrow(function(){ shouldICO(readFile(join(__dirname,"./sample/winner.ico"))) }, "should valid ico image file");

t.throws(function(){ shouldPNG(readFile(join(__dirname,"./sample/winner.jpg"))) }, "should not valid png image file");
t.throws(function(){ shouldJPG(readFile(join(__dirname,"./sample/winner.png"))) }, "should not valid jpg image file");
t.throws(function(){ shouldICO(readFile(join(__dirname,"./sample/winner.png"))) }, "should not valid ico image file");

t.end();
});