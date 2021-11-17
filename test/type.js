import t from 'tap';
import * as type from "../lib/type.js";

t.test('array', t => { 

t.ok(type.isArray([]), "is an array");
t.ok(type.isArray(new Array(1)), "is an array");
t.notOk(type.isArray({}), "not an array");

t.ok(type.isArrayNotEmpty(["a"]), "is an array not empty");
t.notOk(type.isArrayNotEmpty([]), "is an empty array");

t.ok(type.isArrayOfString(["a","b"]), "is an array of string");
t.notOk(type.isArrayOfString([1,2]), "is not an array of string");

t.ok(type.isArrayOfStringNotEmpty(["abc","def"]), "is an array without empty string");
t.notOk(type.isArrayOfStringNotEmpty(["abc","","def"]), "is an array with empty string");

t.ok(type.isArrayOfNumber([1,2.3,Number("3"),+"4",parseInt("5"),0x1F]), "is an array of number");
t.notOk(type.isArrayOfNumber(["1"]), "is not an array of number");
t.notOk(type.isArrayOfNumber([1n]), "is not an array of number");

t.ok(type.isArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["hello"]), "isArrayOfObjWithProperties()");
t.ok(type.isArrayOfObjWithProperties([{foo: "bar", hello: "world"},{foo: "bar", hello: "world"}], ["hello","foo"]), "isArrayOfObjWithProperties()");
t.notOk(type.isArrayOfObjWithProperties([{hello: "world"},{foo: "bar", hello: "world"}], ["foo"]), "isArrayOfObjWithProperties()");
t.notOk(type.isArrayOfObjWithProperties({foo: "bar"}, ["foo"]), "isArrayOfObjWithProperties()");
t.notOk(type.isArrayOfObjWithProperties(["foo","bar"], ["foo"]), "isArrayOfObjWithProperties()");
t.throws(function(){ type.isArrayOfObjWithProperties([{foo: "bar"}], "foo") }, "isArrayOfObjWithProperties()");

t.end();
});

t.test('bigint', t => { 

t.ok(type.isBigInt(9007199254740991n), "is bigint");
t.ok(type.isBigInt(BigInt('9007199254740991')), "is bigint");
t.ok(type.isBigInt(BigInt('0x1fffffffffffff')), "is bigint");
t.ok(type.isBigInt(BigInt('0b11111111111111111111111111111111111111111111111111111')), "is bigint");
t.notOk(type.isBigInt(Number.MAX_SAFE_INTEGER), "is not bigint");
t.notOk(type.isBigInt(Number.MAX_SAFE_INTEGER + 1), "is not bigint");
t.notOk(type.isBigInt("9007199254740991"), "is not bigint");

t.ok(type.isBigIntPositive(1n), "isBigIntPositive()");
t.notOk(type.isBigIntPositive(0n), "isBigIntPositive()");
t.notOk(type.isBigIntPositive(-1n), "isBigIntPositive()");

t.ok(type.isBigIntPositiveOrZero(1n), "isBigIntPositiveOrZero()");
t.ok(type.isBigIntPositiveOrZero(0n), "isBigIntPositiveOrZero()");
t.notOk(type.isBigIntPositiveOrZero(-1n), "isBigIntPositiveOrZero()");

t.ok(type.isBigIntWithinRange(1n,0n,2n), "isBigIntWithinRange()");
t.ok(type.isBigIntWithinRange(0n,0n,2n), "isBigIntWithinRange()");
t.ok(type.isBigIntWithinRange(2n,0n,2n), "isBigIntWithinRange()");
t.notOk(type.isBigIntWithinRange(-1n,0n,2n), "isBigIntWithinRange()");

t.end();
});

t.test('number', t => { 

t.ok(type.isInteger(Number.MAX_SAFE_INTEGER + 1, false), "isInteger()");
t.ok(type.isInteger(Number.MAX_SAFE_INTEGER, false), "isInteger()");
t.notOk(type.isInteger(Number.MAX_SAFE_INTEGER + 1, true), "isInteger()");
t.ok(type.isInteger(Number.MAX_SAFE_INTEGER, true), "isInteger()");
t.notOk(type.isInteger(0.2), "isInteger()");
t.ok(type.isInteger(0), "isInteger()");
t.ok(type.isInteger(-1), "isInteger()");
t.ok(type.isInteger(Number("1")), "isInteger()");
t.ok(type.isInteger(+1), "isInteger()");
t.ok(type.isInteger(Number(1n)), "isInteger()");
t.notOk(type.isInteger(1n), "isInteger()");

t.ok(type.isIntegerPositive(1), "isIntegerPositive()");
t.notOk(type.isIntegerPositive(0), "isIntegerPositive()");
t.notOk(type.isIntegerPositive(-1), "isIntegerPositive()");

t.ok(type.isIntegerPositiveOrZero(1), "isIntegerPositiveOrZero()");
t.ok(type.isIntegerPositiveOrZero(0), "isIntegerPositiveOrZero()");
t.notOk(type.isIntegerPositiveOrZero(-1), "isIntegerPositiveOrZero()");

t.ok(type.isIntegerWithinRange(1,0,2), "isIntegerWithinRange()");
t.ok(type.isIntegerWithinRange(0,0,2), "isIntegerWithinRange()");
t.ok(type.isIntegerWithinRange(2,0,2), "isIntegerWithinRange()");
t.notOk(type.isIntegerWithinRange(-1,0,2), "isIntegerWithinRange()");

t.end();
});

t.test('obj', t => { 

t.ok(type.isObj({}), "is plain obj");
t.ok(type.isObj(new Object()), "is plain obj");
t.ok(type.isObj(Object.create(null)), "is plain obj");
t.notOk(type.isObj(function(){}), "is plain obj");
t.notOk(type.isObj(null), "is plain obj");
t.notOk(type.isObj(undefined), "is plain obj");
t.notOk(type.isObj([]), "is plain obj");
t.notOk(type.isObj(new Boolean()), "is plain obj");
t.notOk(type.isObj(new Number()), "is plain obj");
t.notOk(type.isObj(new String()), "is plain obj");
t.notOk(type.isObj(new Date()), "is plain obj");
t.notOk(type.isObj(/.+/g), "is plain obj");
t.notOk(type.isObj([]), "is plain obj");
t.notOk(type.isObjNotEmpty({}), "plain empty obj");
t.notOk(type.isObjNotEmpty(new Object()), "plain empty obj");
t.notOk(type.isObjNotEmpty(Object.create(null)), "plain empty obj");
t.ok(type.isObjNotEmpty({foo: "bar"}), "plain empty obj");

t.end();
});

t.test('string', t => { 

t.ok(type.isString("hello world"), "is string");
t.ok(type.isString(""), "is string");

t.ok(type.isStringNotEmpty("hello world"), "is string not empty");
t.notOk(type.isStringNotEmpty(""), "is string not empty");

t.ok(type.isHexString("50450000"), "is hex string");
t.ok(type.isHexString(Buffer.from("50450000","hex").toString("hex")), "is hex string");
t.ok(type.isHexString("ab1f"), "is hex string");
t.ok(type.isHexString("AB1f"), "is hex string");
t.ok(type.isHexString("a"), "is hex string");
t.notOk(type.isHexString(""), "is hex string");
t.notOk(type.isHexString("g"), "is hex string");
t.notOk(type.isHexString("aabb110h"), "is hex string");
t.notOk(type.isHexString(" aabb "), "is hex string");
t.notOk(type.isHexString("hhaabb"), "is hex string");

t.end();
});