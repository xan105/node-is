import t from 'tap';
import { assert } from "../lib/index.js";
import { Failure } from "@xan105/error";

t.test('customError', t => {

  t.throws(function(){ assert.shouldString(1, "CUSTOM_ERROR") }, {code: "ERR_INVALID_ARG", message: "CUSTOM_ERROR"}, "custom error");
  t.throws(function(){ assert.shouldString(1, new Error("normal error")) }, {message: "normal error"}, "custom error");
  t.throws(function(){ assert.shouldString(1, new Failure("some error", "SOME_ERR")) }, {code: "SOME_ERR", message: "some error"}, "custom error");
  
t.end();
});