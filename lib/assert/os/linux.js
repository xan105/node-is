/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/constructor.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/os/linux.js";

function shouldLinux(error = null){
  if (check.isLinux() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Linux", "ERR_UNSUPPORTED");
}

//Distro
async function shouldArch(error = null){
  if (await check.isArch() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Arch Linux", "ERR_UNSUPPORTED");
}

async function shouldArchLike(error = null){
  if (await check.isArchLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Arch Linux or similar", "ERR_UNSUPPORTED");
}
async function shouldManjaro(error = null){
  if (await check.isManjaro() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Manjaro", "ERR_UNSUPPORTED");
}

async function shouldDebian(error = null){
  if (await check.isDebian() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Debian", "ERR_UNSUPPORTED");
}

async function shouldDebianLike(error = null){
  if (await check.isDebianLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Debian or similar", "ERR_UNSUPPORTED");
}

async function shouldUbuntu(error = null){
  if (await check.isUbuntu() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Ubuntu", "ERR_UNSUPPORTED");
}

async function shouldUbuntuLike(error = null){
  if (await check.isUbuntuLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Ubuntu or similar", "ERR_UNSUPPORTED");
}

async function shouldMint(error = null){
  if (await check.isMint() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Mint", "ERR_UNSUPPORTED");
}

async function shouldPopOS(error = null){
  if (await check.isPopOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Pop!_OS", "ERR_UNSUPPORTED");
}

async function shouldElementaryOS(error = null){
  if (await check.isElementaryOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Elementary OS", "ERR_UNSUPPORTED");
}

async function shouldDeepin(error = null){
  if (await check.isDeepin() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Deepin", "ERR_UNSUPPORTED");
}

async function shouldRaspberryPiOS(error = null){
  if (await check.isRaspberryPiOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Raspberry Pi OS", "ERR_UNSUPPORTED");
}

async function shouldFedora(error = null){
  if (await check.isFedora() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Fedora", "ERR_UNSUPPORTED");
}

async function shouldFedoraLike(error = null){
  if (await check.isFedoraLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Fedora or similar", "ERR_UNSUPPORTED");
}

async function shouldOpenSUSE(error = null){
  if (await check.isOpenSUSE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires OpenSUSE", "ERR_UNSUPPORTED");
}

async function shouldSlackware(error = null){
  if (await check.isSlackware() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Slackware", "ERR_UNSUPPORTED");
}

async function shouldGentoo(error = null){
  if (await check.isGentoo() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Gentoo", "ERR_UNSUPPORTED");
}

//DE
function shouldGnome(error = null){
  if (check.isGnome() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Gnome", "ERR_UNSUPPORTED");
}
function shouldKDE(error = null){
  if (check.isKDE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires KDE", "ERR_UNSUPPORTED");
}
function shouldXFCE(error = null){
  if (check.isXFCE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires XFCE", "ERR_UNSUPPORTED");
}
function shouldMate(error = null){
  if (check.isMate() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Mate", "ERR_UNSUPPORTED");
}
function shouldCinnamon(error = null){
  if (check.isCinnamon() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Cinnamon", "ERR_UNSUPPORTED");
}

//Display Server/Protocol
function shouldWayland(error = null){
  if (check.isWayland() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Requires Wayland", "ERR_UNSUPPORTED");
}

export {
  shouldLinux,
  //Distro
  shouldArch,
  shouldArchLike,
  shouldManjaro,
  shouldDebian,
  shouldDebianLike,
  shouldUbuntu,
  shouldUbuntuLike,
  shouldMint,
  shouldPopOS,
  shouldElementaryOS,
  shouldDeepin,
  shouldRaspberryPiOS,
  shouldRaspberryPiOS as shouldRaspbian, //alias
  shouldFedora,
  shouldFedoraLike,
  shouldOpenSUSE,
  shouldSlackware,
  shouldGentoo,
  //DE
  shouldGnome,
  shouldKDE,
  shouldXFCE,
  shouldMate,
  shouldCinnamon,
  //Display Server/Protocol
  shouldWayland
};