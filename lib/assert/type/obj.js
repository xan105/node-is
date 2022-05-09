/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/type/obj.js";

function shouldObj(value, error = null){
  if (check.isObj(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { type: typeof value, value: value } });
}

function shouldObjNotEmpty(value, error = null){
  if (check.isObjNotEmpty(value) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a non-empty \"plain obj\" ({}, new Object(), Object.create(null))", { code: 1, info: { type: typeof value, value: value } });
}

function shouldObjWithProperties(value, prop, error = null){
  if (check.isObjWithProperties(value, prop) === false)
    throw asError(error) ?? new Failure(asString(error) ?? `Expecting "plain obj" ({}, new Object(), Object.create(null)) containing properties: ${prop.join(",")}`, { code: 1, info: { type: typeof value, value: value } });
}

function shouldObjLike(value, schema, error = null){
  if (check.isObjLike(value, schema) === false)
    throw asError(error) ?? new Failure(asString(error) ?? "Expecting a \"plain obj\" ({}, new Object(), Object.create(null)) like the specified schema", { code: 1, info: { type: typeof value, value: value, schema: schema } });
}

export { 
  shouldObj, 
  shouldObjNotEmpty,
  shouldObjWithProperties,
  shouldObjLike
}