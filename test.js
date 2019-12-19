'use strict';

const is64 = require('./is64.js');

is64("./sample/wget64", "linux").then((res) => { console.log(`linux64: ${res}`) }).catch((err) => { console.error(`linux64: ${err}`) }); //x64

is64("./sample/wget86", "linux").then((res) => { console.log(`linux: ${res}`) }).catch((err) => { console.error(`linux: ${err}`) }); //x86

is64("./sample/blank.txt").then((res) => { console.log(`blank: ${res}`) }).catch((err) => { console.error(`blank: ${err}`) }); //not a binary

is64("./sample/truelove").then((res) => { console.log(`Exists: ${res}`) }).catch((err) => { console.error(`Exists: ${err}`) }); //file doesn't exist

is64("./sample/hello64.exe").then((res) => { console.log(`windows64: ${res}`) }).catch((err) => { console.error(`windows64: ${err}`) }); //x64

is64("./sample/hello86.exe").then((res) => { console.log(`windows: ${res}`) }).catch((err) => { console.error(`windows: ${err}`) }); //x86

