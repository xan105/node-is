import t from 'tap';
import * as check from "../lib/index.js";
import { assert } from "../lib/index.js";

if (check.isWindows())
{
  if (check.isWin10()) 
  {
    t.test('winver', t => { 

    t.notOk(check.isWin11orGreater(), "winver");
    t.ok(check.isWin10orGreater(), "winver");
    t.ok(check.isWin8orGreater(), "winver");
    t.ok(check.isWin7orGreater(), "winver");
    t.ok(check.isWin11orLesser(), "winver");
    t.ok(check.isWin10orLesser(), "winver");
    t.notOk(check.isWin8orLesser(), "winver");
    t.notOk(check.isWin7orLesser(), "winver");
    t.notOk(check.isWin11(), "winver");
    t.ok(check.isWin10(), "winver");
    t.notOk(check.isWin8(), "winver");
    t.notOk(check.isWin7(), "winver");
    
    //assert
    t.throws(function(){ assert.shouldWin11orGreater() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin10orGreater() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin8orGreater() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin7orGreater() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin11orLesser() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin10orLesser() }, "winver");
    t.throws(function(){ assert.shouldWin8orLesser() }, "winver");
    t.throws(function(){ assert.shouldWin7orLesser() }, "winver");
    t.throws(function(){ assert.shouldWin11() }, "winver");
    t.doesNotThrow(function(){ assert.shouldWin10() }, "winver");
    t.throws(function(){ assert.shouldWin8() }, "winver");
    t.throws(function(){ assert.shouldWin7() }, "winver");
    
    t.end();
    });
  }
}