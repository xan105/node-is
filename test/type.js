import t from 'tap';
import * as check from "../lib/index.js";

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

t.end();
});

t.test('number', t => { 

t.ok(check.isInteger(Number.MAX_SAFE_INTEGER + 1, false), "isInteger()");
t.ok(check.isInteger(Number.MAX_SAFE_INTEGER, false), "isInteger()");
t.notOk(check.isInteger(Number.MAX_SAFE_INTEGER + 1, true), "isInteger()");
t.ok(check.isInteger(Number.MAX_SAFE_INTEGER, true), "isInteger()");
t.notOk(check.isInteger(0.2), "isInteger()");
t.ok(check.isInteger(0), "isInteger()");
t.ok(check.isInteger(-1), "isInteger()");
t.ok(check.isInteger(Number("1")), "isInteger()");
t.ok(check.isInteger(+1), "isInteger()");
t.ok(check.isInteger(Number(1n)), "isInteger()");
t.notOk(check.isInteger(1n), "isInteger()");

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

t.end();
});

t.test('string', t => { 

t.ok(check.isString("hello world"), "is string");
t.ok(check.isString(""), "is string");

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

t.end();
});