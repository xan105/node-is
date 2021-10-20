import t from 'tap';
import * as os from "../lib/is/os/windows.js";

if (os.isWindows())
{
  if (os.isWin10()) 
  {
    t.test('winver', t => { 

    t.notOk(os.isWin11orGreater(), "winver");
    t.ok(os.isWin10orGreater(), "winver");
    t.ok(os.isWin8orGreater(), "winver");
    t.ok(os.isWin7orGreater(), "winver");
    t.ok(os.isWin11orLesser(), "winver");
    t.ok(os.isWin10orLesser(), "winver");
    t.notOk(os.isWin8orLesser(), "winver");
    t.notOk(os.isWin7orLesser(), "winver");
    t.notOk(os.isWin11(), "winver");
    t.ok(os.isWin10(), "winver");
    t.notOk(os.isWin8(), "winver");
    t.notOk(os.isWin7(), "winver");
    
    t.end();
    });
  }
}