/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/type/obj.js";

function shouldObj(value){
  if (check.isObj(value) === false)
    throw new Failure("Expecting a \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { type: typeof value, value: value } });
}

function shouldObjNotEmpty(value){
  if (check.isObjNotEmpty(value) === false)
    throw new Failure("Expecting a non-empty \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { type: typeof value, value: value } });
}

function shouldObjWithProperties(value, prop){
  if (check.isObjWithProperties(value, prop) === false)
    throw new Failure(`Expecting "plain obj" ({}, new Object(), Object.create(null)) containing properties: ${prop.join(",")}`, { code: 1, info: { type: typeof value, value: value } });
}

export { 
  shouldObj, 
  shouldObjNotEmpty,
  shouldObjWithProperties
}