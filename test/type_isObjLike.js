import t from 'tap';
import * as check from "../lib/index.js";
import { Failure } from "@xan105/error";

t.test('isObjLike:success', t => { 

t.ok(check.isObjLike({
  name: "Xan",
  age: 26,
  unk1: null,
  child: {
    name: "Xanette",
    age: 15
  }
},{
  name: check.isString,
  age: check.isNumber,
  child: {
    name: [ check.isStringNotEmpty, [] ],
    age: [ check.isIntegerWithinRange, [0,100] ]
  }
}),"isObjLike");

t.ok(check.isObjLike({
  name: "Xan",
  age: 26,
  child: [
    {
      name: "Xanette",
      age: 15
    },
    {
      name: "Xanana",
      age: 12
    }
  ]
},{
  name: check.isString,
  age: check.isNumber,
  child: [check.isArrayOfObjLike, [{
    name: [ check.isStringNotEmpty, [] ],
    age: [ check.isIntegerWithinRange, [0,100] ]
  }]]
}),"isObjLike");

t.ok(check.isObjLike({},{}),"emptyness");

t.end();
});

t.test('isObjLike:fail', t => { 

t.notOk(check.isObjLike({
  name: "Xan",
  age: 26
},{
  name: check.isString,
  age: check.isNumber,
  height: check.isNumber
}),"missing required prop");

t.notOk(check.isObjLike({
  name: "Xan",
  age: 26
},{
  name: ()=> "string",
  age: check.isNumber
}),"check function not returning boolean");

t.notOk(check.isObjLike({
  name: "Xan",
  age: 26
},{
  name: ()=> { throw "error" },
  age: check.isNumber
}),"check function throws");

t.notOk(check.isObjLike("string",{
  name: check.isString,
  age: check.isNumber,
}),"not an object");

t.end();
});


t.test('isObjLike:error', t => { 

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: ()=> { throw new Failure("bypass and throw") },
    age: check.isNumber,
  });
}, "Failure bypass");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: "string",
    age: check.isNumber,
  });
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: [check.isString],
    age: check.isNumber,
  });
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: [check.isString, [], "3rd" ],
    age: check.isNumber,
  });
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: ["string", []],
    age: check.isNumber,
  });
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  },{
    name: [check.isString, {}],
    age: check.isNumber,
  });
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.throws(function(){
  check.isObjLike({
    name: "Xan",
    age: 26
  }, "string");
}, {code: "ERR_INVALID_ARG"} ,"bad usage");

t.end();
});