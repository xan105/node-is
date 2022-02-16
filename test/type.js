import t from 'tap';
import * as check from "../lib/index.js";
import { assert } from "../lib/index.js";

t.test('array', t => { 

t.ok(check.isArray([]), "is an array");
t.ok(check.isArray(new Array(1)), "is an array");
t.notOk(check.isArray({}), "not an array");

t.ok(check.isArrayNotEmpty(["a"]), "is an array not empty");
t.notOk(check.isArrayNotEmpty([]), "is an empty array");

t.ok(check.isArrayOfString(["a","b"]), "is an array of string");
t.notOk(check.isArrayOfString([1,2]), "is not an array of string");

t.ok(check.isArrayOfStringNotEmpty(["abc","def"]), "is an array without empty string");
t.notOk(check.isArrayOfStringNotEmpty(["abc","","def"]), "is an array with empty string");

t.ok(check.isArrayOfNumber([1,2.3,Number("3"),+"4",parseInt("5"),0x1F]), "is an array of number");
t.notOk(check.isArrayOfNumber(["1"]), "is not an array of number");
t.notOk(check.isArrayOfNumber([1n]), "is not an array of number");

t.ok(check.isArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["hello"]), "isArrayOfObjWithProperties()");
t.ok(check.isArrayOfObjWithProperties([{foo: "bar", hello: "world"},{foo: "bar", hello: "world"}], ["hello","foo"]), "isArrayOfObjWithProperties()");
t.notOk(check.isArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["foo"]), "isArrayOfObjWithProperties()");
t.notOk(check.isArrayOfObjWithProperties({foo: "bar"}, ["foo"]), "isArrayOfObjWithProperties()");
t.notOk(check.isArrayOfObjWithProperties(["foo","bar"], ["foo"]), "isArrayOfObjWithProperties()");
t.throws(function(){ check.isArrayOfObjWithProperties([{foo: "bar"}], "foo") }, "isArrayOfObjWithProperties()");

//assert
t.doesNotThrow(function(){ assert.shouldArray([]) }, "shouldArray()");
t.doesNotThrow(function(){ assert.shouldArray(new Array(1)) }, "shouldArray()");
t.throws(function(){ assert.shouldArray({}) }, "shouldArray()");

t.doesNotThrow(function(){ assert.shouldArrayNotEmpty(["a"]) }, "shouldArrayNotEmpty()");
t.throws(function(){ assert.shouldArrayNotEmpty([]) }, "shouldArrayNotEmpty()");

t.doesNotThrow(function(){ assert.shouldArrayOfString(["a","b"]) }, "shouldArrayOfString()");
t.throws(function(){ assert.shouldArrayOfString([1,2]) }, "shouldArrayOfString()");

t.doesNotThrow(function(){ assert.shouldArrayOfStringNotEmpty(["abc","def"]) }, "shouldArrayOfStringNotEmpty()");
t.throws(function(){ assert.shouldArrayOfStringNotEmpty(["abc","","def"]) }, "shouldArrayOfStringNotEmpty()");

t.doesNotThrow(function(){ assert.shouldArrayOfNumber([1,2.3,Number("3"),+"4",parseInt("5"),0x1F]) }, "shouldArrayOfNumber()");
t.throws(function(){ assert.shouldArrayOfNumber(["1"]) }, "shouldArrayOfNumber()");
t.throws(function(){ assert.shouldArrayOfNumber([1n]) }, "shouldArrayOfNumber()");

t.doesNotThrow(function(){ assert.shouldArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["hello"]) }, "shoulArrayOfObjWithProperties()");
t.doesNotThrow(function(){ assert.shouldArrayOfObjWithProperties([{foo: "bar", hello: "world"},{foo: "bar", hello: "world"}], ["hello","foo"]) }, "shoulArrayOfObjWithProperties()");
t.throws(function(){ assert.shouldArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["foo"]) }, "shoulArrayOfObjWithProperties()");
t.throws(function(){ assert.shouldArrayOfObjWithProperties({foo: "bar"}, ["foo"]) }, "shoulArrayOfObjWithProperties()");
t.throws(function(){ assert.shouldArrayOfObjWithProperties(["foo","bar"], ["foo"]) }, "shoulArrayOfObjWithProperties()");

t.end();
});

t.test('bigint', t => { 

t.ok(check.isBigInt(9007199254740991n), "is bigint");
t.ok(check.isBigInt(BigInt('9007199254740991')), "is bigint");
t.ok(check.isBigInt(BigInt('0x1fffffffffffff')), "is bigint");
t.ok(check.isBigInt(BigInt('0b11111111111111111111111111111111111111111111111111111')), "is bigint");
t.notOk(check.isBigInt(Number.MAX_SAFE_INTEGER), "is not bigint");
t.notOk(check.isBigInt(Number.MAX_SAFE_INTEGER + 1), "is not bigint");
t.notOk(check.isBigInt("9007199254740991"), "is not bigint");

t.ok(check.isBigIntPositive(1n), "isBigIntPositive()");
t.notOk(check.isBigIntPositive(0n), "isBigIntPositive()");
t.notOk(check.isBigIntPositive(-1n), "isBigIntPositive()");

t.ok(check.isBigIntPositiveOrZero(1n), "isBigIntPositiveOrZero()");
t.ok(check.isBigIntPositiveOrZero(0n), "isBigIntPositiveOrZero()");
t.notOk(check.isBigIntPositiveOrZero(-1n), "isBigIntPositiveOrZero()");

t.ok(check.isBigIntWithinRange(1n,0n,2n), "isBigIntWithinRange()");
t.ok(check.isBigIntWithinRange(0n,0n,2n), "isBigIntWithinRange()");
t.ok(check.isBigIntWithinRange(2n,0n,2n), "isBigIntWithinRange()");
t.notOk(check.isBigIntWithinRange(-1n,0n,2n), "isBigIntWithinRange()");

//assert
t.doesNotThrow(function(){ assert.shouldBigInt(9007199254740991n) }, "shouldBigInt()");
t.doesNotThrow(function(){ assert.shouldBigInt(BigInt('9007199254740991')) }, "shouldBigInt()");
t.doesNotThrow(function(){ assert.shouldBigInt(BigInt('0x1fffffffffffff')) }, "shouldBigInt()");
t.doesNotThrow(function(){ assert.shouldBigInt(BigInt('0b11111111111111111111111111111111111111111111111111111')) }, "shouldBigInt()");
t.throws(function(){ assert.shouldBigInt(Number.MAX_SAFE_INTEGER) }, "shouldBigInt()");
t.throws(function(){ assert.shouldBigInt(Number.MAX_SAFE_INTEGER + 1) }, "shouldBigInt()");
t.throws(function(){ assert.shouldBigInt("9007199254740991") }, "shouldBigInt()");

t.doesNotThrow(function(){ assert.shouldBigIntPositive(1n) }, "shouldBigIntPositive()");
t.throws(function(){ assert.shouldBigIntPositive(0n) }, "shouldBigIntPositive()");
t.throws(function(){ assert.shouldBigIntPositive(-1n) }, "shouldBigIntPositive()");

t.doesNotThrow(function(){ assert.shouldBigIntPositiveOrZero(1n) }, "shouldBigIntPositiveOrZero()");
t.doesNotThrow(function(){ assert.shouldBigIntPositiveOrZero(0n) }, "shouldBigIntPositiveOrZero()");
t.throws(function(){ assert.shouldBigIntPositiveOrZero(-1n) }, "shouldBigIntPositiveOrZero()");

t.doesNotThrow(function(){ assert.shouldBigIntWithinRange(1n,0n,2n) }, "shouldBigIntWithinRange()");
t.doesNotThrow(function(){ assert.shouldBigIntWithinRange(0n,0n,2n) }, "shouldBigIntWithinRange()");
t.doesNotThrow(function(){ assert.shouldBigIntWithinRange(2n,0n,2n) }, "shouldBigIntWithinRange()");
t.throws(function(){ assert.shouldBigIntWithinRange(-1n,0n,2n) }, "shouldBigIntWithinRange()");

t.end();
});

t.test('number', t => { 

t.ok(check.isInteger(Number.MAX_SAFE_INTEGER + 1, false), "isInteger()");
t.ok(check.isInteger(Number.MAX_SAFE_INTEGER, false), "isInteger()");
t.notOk(check.isInteger(Number.MAX_SAFE_INTEGER + 1, true), "isInteger()");
t.ok(check.isInteger(Number.MAX_SAFE_INTEGER, true), "isInteger()");
t.throws(function(){ check.isInteger(Number.MAX_SAFE_INTEGER, "true") }, "isInteger()");
t.notOk(check.isInteger(0.2), "isInteger()");
t.ok(check.isInteger(0), "isInteger()");
t.ok(check.isInteger(-1), "isInteger()");
t.ok(check.isInteger(Number("1")), "isInteger()");
t.ok(check.isInteger(+1), "isInteger()");
t.ok(check.isInteger(Number(1n)), "isInteger()");
t.notOk(check.isInteger(1n), "isInteger()");
t.notOk(check.isInteger(new Number(1)), "isInteger()");

t.ok(check.isIntegerPositive(1), "isIntegerPositive()");
t.notOk(check.isIntegerPositive(0), "isIntegerPositive()");
t.notOk(check.isIntegerPositive(-1), "isIntegerPositive()");

t.ok(check.isIntegerPositiveOrZero(1), "isIntegerPositiveOrZero()");
t.ok(check.isIntegerPositiveOrZero(0), "isIntegerPositiveOrZero()");
t.notOk(check.isIntegerPositiveOrZero(-1), "isIntegerPositiveOrZero()");

t.ok(check.isIntegerWithinRange(1,0,2), "isIntegerWithinRange()");
t.ok(check.isIntegerWithinRange(0,0,2), "isIntegerWithinRange()");
t.ok(check.isIntegerWithinRange(2,0,2), "isIntegerWithinRange()");
t.notOk(check.isIntegerWithinRange(-1,0,2), "isIntegerWithinRange()");

//assert
t.doesNotThrow(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER + 1, false) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER, false) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER + 1, true) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER, true) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(0.2) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(0) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(-1) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number("1")) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(+1) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number(1n)) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(1n) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldInteger()");

t.doesNotThrow(function(){ assert.shouldIntegerPositive(1) }, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(0) }, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(-1) }, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerPositive()");

t.doesNotThrow(function(){ assert.shouldIntegerPositiveOrZero(1) }, "shouldIntegerPositiveOrZero()");
t.doesNotThrow(function(){ assert.shouldIntegerPositiveOrZero(0) }, "shouldIntegerPositiveOrZero()");
t.throws(function(){ assert.shouldIntegerPositiveOrZero(-1) }, "shouldIntegerPositiveOrZero()");
t.throws(function(){ assert.shouldIntegerPositiveOrZero(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerPositiveOrZero()");

t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(1,0,2) }, "shouldIntegerWithinRange()");
t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(0,0,2) }, "shouldIntegerWithinRange()");
t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(2,0,2) }, "shouldIntegerWithinRange()");
t.throws(function(){ assert.shouldIntegerWithinRange(-1,0,2) }, "shouldIntegerWithinRange()");
t.throws(function(){ assert.shouldIntegerWithinRange(new Number(1),0,1) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerWithinRange()");

t.end();
});

t.test('obj', t => { 

t.ok(check.isObj({}), "is plain obj");
t.ok(check.isObj(new Object()), "is plain obj");
t.ok(check.isObj(Object.create(null)), "is plain obj");
t.notOk(check.isObj(function(){}), "is plain obj");
t.notOk(check.isObj(null), "is plain obj");
t.notOk(check.isObj(undefined), "is plain obj");
t.notOk(check.isObj([]), "is plain obj");
t.notOk(check.isObj(new Boolean()), "is plain obj");
t.notOk(check.isObj(new Number()), "is plain obj");
t.notOk(check.isObj(new String()), "is plain obj");
t.notOk(check.isObj(new Date()), "is plain obj");
t.notOk(check.isObj(/.+/g), "is plain obj");
t.notOk(check.isObj([]), "is plain obj");

t.notOk(check.isObjNotEmpty({}), "plain empty obj");
t.notOk(check.isObjNotEmpty(new Object()), "plain empty obj");
t.notOk(check.isObjNotEmpty(Object.create(null)), "plain empty obj");
t.ok(check.isObjNotEmpty({foo: "bar"}), "plain empty obj");

//assert
t.doesNotThrow(function(){ assert.shouldObj({}) }, "shouldObj()");
t.doesNotThrow(function(){ assert.shouldObj(new Object()) }, "shouldObj()");
t.doesNotThrow(function(){ assert.shouldObj(Object.create(null)) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(function(){}) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(null) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(undefined) }, "shouldObj()");
t.throws(function(){ assert.shouldObj([]) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(new Boolean()) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(new Number()) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(new String()) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(new Date()) }, "shouldObj()");
t.throws(function(){ assert.shouldObj(/.+/g) }, "shouldObj()");
t.throws(function(){ assert.shouldObj([]) }, "shouldObj()");

t.throws(function(){ assert.shouldObjNotEmpty({}) }, "shouldObjNotEmpty()");
t.throws(function(){ assert.shouldObjNotEmpty(new Object()) }, "shouldObjNotEmpty()");
t.throws(function(){ assert.shouldObjNotEmpty(Object.create(null)) }, "shouldObjNotEmpty()");
t.doesNotThrow(function(){ assert.shouldObjNotEmpty({foo: "bar"}) }, "shouldObjNotEmpty()");

t.end();
});

t.test('string', t => { 

t.ok(check.isString("hello world"), "is string");
t.ok(check.isString(""), "is string");
t.ok(check.isString("1"), "is string");
t.ok(check.isString(String(1)), "is string");
t.notOk(check.isString(new String("hello")), "is string");
t.notOk(check.isString(null), "is string");
t.notOk(check.isString(undefined), "is string");
t.notOk(check.isString(1), "is string");

t.ok(check.isStringNotEmpty("hello world"), "is string not empty");
t.notOk(check.isStringNotEmpty(""), "is string not empty");

t.ok(check.isHexString("50450000"), "is hex string");
t.ok(check.isHexString(Buffer.from("50450000","hex").toString("hex")), "is hex string");
t.ok(check.isHexString("ab1f"), "is hex string");
t.ok(check.isHexString("AB1f"), "is hex string");
t.ok(check.isHexString("a"), "is hex string");
t.notOk(check.isHexString(""), "is hex string");
t.notOk(check.isHexString("g"), "is hex string");
t.notOk(check.isHexString("aabb110h"), "is hex string");
t.notOk(check.isHexString(" aabb "), "is hex string");
t.notOk(check.isHexString("hhaabb"), "is hex string");

//assert
t.doesNotThrow(function(){ assert.shouldString("hello world") }, "shouldString()");
t.doesNotThrow(function(){ assert.shouldString("") }, "shouldString()");
t.doesNotThrow(function(){ assert.shouldString("1") }, "shouldString()");
t.doesNotThrow(function(){ assert.shouldString(String(1)) }, "shouldString()");
t.throws(function(){ assert.shouldString(new String("hello")) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldString()");
t.throws(function(){ assert.shouldString(null) }, "shouldString()");
t.throws(function(){ assert.shouldString(undefined) }, "shouldString()");
t.throws(function(){ assert.shouldString(1) }, "shouldString()");

t.doesNotThrow(function(){ assert.shouldStringNotEmpty("hello world") }, "shouldStringNotEmpty()");
t.throws(function(){ assert.shouldStringNotEmpty("") }, "shouldStringNotEmpty()");

t.doesNotThrow(function(){ assert.shouldHexString("50450000") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString(Buffer.from("50450000","hex").toString("hex")) }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("ab1f") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("AB1f") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("a") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("g") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("aabb110h") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString(" aabb ") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("hhaabb") }, "shouldHexString()");

t.end();
});

t.test('boolean', t => {

t.ok(check.isBoolean(true), "is boolean");
t.ok(check.isBoolean(false), "is boolean");
t.ok(check.isBoolean(Boolean(1)), "is boolean");
t.ok(check.isBoolean(!!(1)), "is boolean");
t.notOk(check.isBoolean("string"), "is boolean");
t.notOk(check.isBoolean(1), "is boolean");
t.notOk(check.isBoolean(["foo","bar"]), "is boolean");
t.notOk(check.isBoolean({foo: "bar"}), "is boolean");
t.notOk(check.isBoolean(new Boolean(true)), "is boolean");
t.notOk(check.isBoolean(null), "is boolean");
t.notOk(check.isBoolean(undefined), "is boolean");

//assert
t.doesNotThrow(function(){ assert.shouldBoolean(true) }, "shouldBoolean()");
t.doesNotThrow(function(){ assert.shouldBoolean(false) }, "shouldBoolean()");
t.doesNotThrow(function(){ assert.shouldBoolean(Boolean(1)) }, "shouldBoolean()");
t.doesNotThrow(function(){ assert.shouldBoolean(!!(1)) }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean("string") }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(1) }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(["foo","bar"]) }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean({foo: "bar"}) }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(new Boolean(true)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(null) }, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(undefined) }, "shouldBoolean()");

t.end();
});