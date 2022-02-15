import t from 'tap';
import * as check from "../lib/index.js";

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
    
    t.end();
    });
  }
}