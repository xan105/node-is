import t from 'tap';
import { Buffer } from "node:buffer";
import * as check from "../lib/index.js";
import { assert, opt } from "../lib/index.js";
import { Failure } from "@xan105/error";

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

t.ok(check.isArrayOfBuffer([Buffer.from("foo"),Buffer.from("bar")]), "isArrayOfBuffer()");
t.notOk(check.isArrayOfBuffer([Buffer.from("foo"),"bar"]), "isArrayOfBuffer()");

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

t.doesNotThrow(function(){ assert.shouldArrayOfBuffer([Buffer.from("foo"),Buffer.from("bar")]) }, "shouldArrayOfBuffer()");
t.throws(function(){ assert.shouldArrayOfBuffer([Buffer.from("foo"),"bar"]) }, "shouldArrayOfBuffer()");

//as (fail only)
t.equal(opt.asArray({}), null, "as not an array");
t.equal(opt.asArrayNotEmpty([]), null, "as an empty array");
t.equal(opt.asArrayOfString([1,2]), null, "as not an array of string");
t.equal(opt.asArrayOfStringNotEmpty(["abc","","def"]), null, "as an array with empty string");
t.equal(opt.asArrayOfNumber(["1"]), null, "as not an array of number");
t.equal(opt.asArrayOfNumber([1n]), null, "as not an array of number");
t.equal(opt.asArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["foo"]), null, "asArrayOfObjWithProperties()");
t.equal(opt.asArrayOfObjWithProperties({foo: "bar"}, ["foo"]), null, "asArrayOfObjWithProperties()");
t.equal(opt.asArrayOfObjWithProperties(["foo","bar"], ["foo"]), null, "asArrayOfObjWithProperties()");
t.throws(function(){ opt.asArrayOfObjWithProperties([{foo: "bar"}], "foo") }, "asArrayOfObjWithProperties()");
t.equal(opt.asArrayOfBuffer([Buffer.from("foo"),"bar"]), null, "asArrayOfBuffer()");

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

//as (fail only)
t.equal(opt.asBigInt(Number.MAX_SAFE_INTEGER), null, "as not bigint");
t.equal(opt.asBigInt(Number.MAX_SAFE_INTEGER + 1), null, "as not bigint");
t.equal(opt.asBigInt("9007199254740991"), null, "as not bigint");
t.equal(opt.asBigIntPositive(0n), null, "asBigIntPositive()");
t.equal(opt.asBigIntPositive(-1n), null, "asBigIntPositive()");
t.equal(opt.asBigIntPositiveOrZero(-1n), null, "asBigIntPositiveOrZero()");
t.equal(opt.asBigIntWithinRange(-1n,0n,2n), null, "asBigIntWithinRange()");

t.end();
});

t.test('number', t => { 

t.notOk(check.isInteger(Number.MAX_SAFE_INTEGER + 1), "isInteger()");
t.ok(check.isInteger(Number.MAX_SAFE_INTEGER), "isInteger()");
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

t.ok(check.isNumber(0.2), "isNumber()");
t.ok(check.isNumber(Number("1")), "isNumber()");
t.ok(check.isNumber(+"1"), "isNumber()");
t.notOk(check.isNumber("1"), "isNumber()");
t.notOk(check.isNumber(new Number(1)), "isNumber()");
t.ok(check.isNumberWithinRange(0.1,0,1), "isNumberWithinRange()");
t.ok(check.isNumberWithinRange(0,0,1), "isNumberWithinRange()");
t.ok(check.isNumberWithinRange(1,0,1), "isNumberWithinRange()");
t.notOk(check.isNumberWithinRange(-0.1,0,1), "isIntegerWithinRange()");

//assert
t.throws(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER + 1) }, {code: "ERR_INVALID_ARG"}, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number.MAX_SAFE_INTEGER) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(0.2) }, {code: "ERR_INVALID_ARG"}, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(0) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(-1) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number("1")) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(+1) }, "shouldInteger()");
t.doesNotThrow(function(){ assert.shouldInteger(Number(1n)) }, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(1n) }, {code: "ERR_INVALID_ARG"}, "shouldInteger()");
t.throws(function(){ assert.shouldInteger(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldInteger()");

t.doesNotThrow(function(){ assert.shouldIntegerPositive(1) }, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(0) }, {code: "ERR_INVALID_ARG"}, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(-1) }, {code: "ERR_INVALID_ARG"}, "shouldIntegerPositive()");
t.throws(function(){ assert.shouldIntegerPositive(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerPositive()");

t.doesNotThrow(function(){ assert.shouldIntegerPositiveOrZero(1) }, "shouldIntegerPositiveOrZero()");
t.doesNotThrow(function(){ assert.shouldIntegerPositiveOrZero(0) }, "shouldIntegerPositiveOrZero()");
t.throws(function(){ assert.shouldIntegerPositiveOrZero(-1) }, {code: "ERR_INVALID_ARG"}, "shouldIntegerPositiveOrZero()");
t.throws(function(){ assert.shouldIntegerPositiveOrZero(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerPositiveOrZero()");

t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(1,0,2) }, "shouldIntegerWithinRange()");
t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(0,0,2) }, "shouldIntegerWithinRange()");
t.doesNotThrow(function(){ assert.shouldIntegerWithinRange(2,0,2) }, "shouldIntegerWithinRange()");
t.throws(function(){ assert.shouldIntegerWithinRange(-1,0,2) }, {code: "ERR_INVALID_ARG"}, "shouldIntegerWithinRange()");
t.throws(function(){ assert.shouldIntegerWithinRange(new Number(1),0,1) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldIntegerWithinRange()");

t.doesNotThrow(function(){ assert.shouldNumber(0.2) }, "shouldNumber()");
t.doesNotThrow(function(){ assert.shouldNumber(Number("1")) }, "shouldNumber()");
t.doesNotThrow(function(){ assert.shouldNumber(+"1") }, "shouldNumber()");
t.throws(function(){ assert.shouldNumber("1") }, {code: "ERR_INVALID_ARG"}, "shouldNumber()");
t.throws(function(){ assert.shouldNumber(new Number(1)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldNumber()");
t.doesNotThrow(function(){ assert.shouldNumberWithinRange(0.1,0,1) }, "shouldNumberWithinRange()");
t.doesNotThrow(function(){ assert.shouldNumberWithinRange(0,0,1) }, "shouldNumberWithinRange()");
t.doesNotThrow(function(){ assert.shouldNumberWithinRange(1,0,1) }, "shouldNumberWithinRange()");
t.throws(function(){ assert.shouldNumberWithinRange(-0.1,0,1) }, {code: "ERR_INVALID_ARG"}, "shouldIntegerWithinRange()");

//as (fail only)

t.equal(opt.asInteger(Number.MAX_SAFE_INTEGER + 1), null, "asInteger()");
t.equal(opt.asInteger(0.2), null, "asInteger()");
t.equal(opt.asInteger(1n), null, "asInteger()");
t.equal(opt.asInteger(new Number(1)), null, "asInteger()");
t.equal(opt.asIntegerPositive(0), null, "asIntegerPositive()");
t.equal(opt.asIntegerPositive(-1), null, "asIntegerPositive()");
t.equal(opt.asIntegerPositiveOrZero(-1), null, "asIntegerPositiveOrZero()");
t.equal(opt.asIntegerWithinRange(-1,0,2), null, "asIntegerWithinRange()");
t.equal(opt.asNumber("1"), null, "asNumber()");
t.equal(opt.asNumber(new Number(1)), null, "asNumber()");
t.equal(opt.asNumberWithinRange(-0.1,0,1), null, "asIntegerWithinRange()");

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
t.notOk(check.isObjNotEmpty({[Symbol("foo")]: "bar"}), "plain empty obj");

t.ok(check.isObjWithProperties({foo: "bar", bar: "foo"}, ["foo", "bar"]), "isObjWithProperties()");
t.ok(check.isObjWithProperties({foo: "bar", bar: "foo"}, ["foo"]), "isObjWithProperties()");
t.throws(function(){ check.isObjWithProperties({foo: "bar"}, "foo") }, "isObjWithProperties()");
t.notOk(check.isObjWithProperties({foo: "bar"}, ["bar"]), "isObjWithProperties()");
t.ok(check.isObjWithinObj({foo: {bar: "foo"}, bar: {foo: "bar"}}), "isObjWithinObj()");

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

t.doesNotThrow(function(){ assert.shouldObjWithProperties({foo: "bar", bar: "foo"}, ["foo", "bar"]) }, "shouldObjWithProperties()");
t.doesNotThrow(function(){ assert.shouldObjWithProperties({foo: "bar", bar: "foo"}, ["foo"]) }, "shouldObjWithProperties()");
t.throws(function(){ assert.shouldObjWithProperties({foo: "bar"}, "foo") }, "shouldObjWithProperties()");
t.throws(function(){ assert.shouldObjWithProperties({foo: "bar"}, ["bar"]) }, "shouldObjWithProperties()");
t.doesNotThrow(function(){ assert.shouldObjWithinObj({foo: {bar: "foo"}, bar: {foo: "bar"}}) }, "shouldObjWithinObj()");

//as (fail only)

t.equal(opt.asObj(function(){}), null, "as plain obj");
t.equal(opt.asObj(null), null, "as plain obj");
t.equal(opt.asObj(undefined), null, "as plain obj");
t.equal(opt.asObj([]), null, "as plain obj");
t.equal(opt.asObj(new Boolean()), null, "as plain obj");
t.equal(opt.asObj(new Number()), null, "as plain obj");
t.equal(opt.asObj(new String()), null, "as plain obj");
t.equal(opt.asObj(new Date()), null, "as plain obj");
t.equal(opt.asObj(/.+/g), null, "as plain obj");
t.equal(opt.asObj([]), null, "as plain obj");
t.equal(opt.asObjNotEmpty({}), null, "as plain empty obj");
t.equal(opt.asObjNotEmpty(new Object()), null, "as plain empty obj");
t.equal(opt.asObjNotEmpty(Object.create(null)), null, "as plain empty obj");
t.throws(function(){ opt.asObjWithProperties({foo: "bar"}, "foo") }, null, "asObjWithProperties()");
t.equal(opt.asObjWithProperties({foo: "bar"}, ["bar"]), null, "asObjWithProperties()");
t.equal(opt.asObjWithinObj({foo: "bar"}), null, "asObjWithinObj()");

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
t.throws(function(){ assert.shouldString(null) }, {code: "ERR_INVALID_ARG"}, "shouldString()");
t.throws(function(){ assert.shouldString(undefined) }, {code: "ERR_INVALID_ARG"}, "shouldString()");
t.throws(function(){ assert.shouldString(1) }, {code: "ERR_INVALID_ARG"}, "shouldString()");

t.doesNotThrow(function(){ assert.shouldStringNotEmpty("hello world") }, "shouldStringNotEmpty()");
t.throws(function(){ assert.shouldStringNotEmpty("") }, {code: "ERR_INVALID_ARG"}, "shouldStringNotEmpty()");

t.doesNotThrow(function(){ assert.shouldHexString("50450000") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString(Buffer.from("50450000","hex").toString("hex")) }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("ab1f") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("AB1f") }, "shouldHexString()");
t.doesNotThrow(function(){ assert.shouldHexString("a") }, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("") }, {code: "ERR_INVALID_ARG"}, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("g") }, {code: "ERR_INVALID_ARG"}, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("aabb110h") }, {code: "ERR_INVALID_ARG"}, "shouldHexString()");
t.throws(function(){ assert.shouldHexString(" aabb ") }, {code: "ERR_INVALID_ARG"}, "shouldHexString()");
t.throws(function(){ assert.shouldHexString("hhaabb") }, {code: "ERR_INVALID_ARG"}, "shouldHexString()");

//as (fail only)

t.equal(opt.asString(new String("hello")), null, "as string");
t.equal(opt.asString(null), null, "as string");
t.equal(opt.asString(undefined), null, "as string");
t.equal(opt.asString(1), null, "as string");
t.equal(opt.asStringNotEmpty(""), null, "as string not empty");
t.equal(opt.asHexString(""), null, "as hex string");
t.equal(opt.asHexString("g"), null, "as hex string");
t.equal(opt.asHexString("aabb110h"), null, "as hex string");
t.equal(opt.asHexString(" aabb "), null, "as hex string");
t.equal(opt.asHexString("hhaabb"), null, "as hex string");

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
t.throws(function(){ assert.shouldBoolean("string") }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(1) }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(["foo","bar"]) }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean({foo: "bar"}) }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(new Boolean(true)) }, {code: "ERR_USAGE_NOT_RECOMMENDED"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(null) }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");
t.throws(function(){ assert.shouldBoolean(undefined) }, {code: "ERR_INVALID_ARG"}, "shouldBoolean()");

//as (fail only)

t.equal(opt.asBoolean("string"), null, "as boolean");
t.equal(opt.asBoolean(1), null, "as boolean");
t.equal(opt.asBoolean(["foo","bar"]), null, "as boolean");
t.equal(opt.asBoolean({foo: "bar"}), null, "as boolean");
t.equal(opt.asBoolean(new Boolean(true)), null, "as boolean");
t.equal(opt.asBoolean(null), null, "as boolean");
t.equal(opt.asBoolean(undefined), null, "as boolean");

t.end();
});

t.test('error', t => {

t.ok(check.isError(new Error()), "Error");
t.ok(check.isError(new Error("")), "Error");
t.ok(check.isError(new Error("some error")), "Error");
t.ok(check.isError(new Failure()), "Error");
t.ok(check.isError(new Failure("")), "Error");
t.ok(check.isError(new Failure("some error")), "Error");
t.notOk(check.isError(() => {}), "Error");
t.notOk(check.isError({}), "Error");
t.notOk(check.isError(""), "Error");

//assert

t.doesNotThrow(function(){ assert.shouldError(new Error()) }, "Error");
t.doesNotThrow(function(){ assert.shouldError(new Error("")) }, "Error");
t.doesNotThrow(function(){ assert.shouldError(new Error("some error")) }, "Error");
t.doesNotThrow(function(){ assert.shouldError(new Failure()) }, "Error");
t.doesNotThrow(function(){ assert.shouldError(new Failure("")) }, "Error");
t.doesNotThrow(function(){ assert.shouldError(new Failure("some error")) }, "Error");
t.throws(function(){ assert.shouldError(() => {}) }, {code: "ERR_INVALID_ARG"}, "Error");
t.throws(function(){ assert.shouldError({}) }, {code: "ERR_INVALID_ARG"}, "Error");
t.throws(function(){ assert.shouldError("") }, {code: "ERR_INVALID_ARG"}, "Error");

//as (fail only)

t.equal(opt.asError(() => {}), null, "Error");
t.equal(opt.asError({}), null, "Error");
t.equal(opt.asError(""), null, "Error");

t.end();
});

t.test('RegExp', t => {

  t.ok(check.isRegExp(/ab+c/i), "RegExp");
  t.ok(check.isRegExp(new RegExp("ab+c", "i")), "RegExp");
  t.ok(check.isRegExp(new RegExp(/ab+c/, "i")), "RegExp");
  t.notOk(check.isRegExp("/^s/g"), "RegExp");
  
t.end();
});