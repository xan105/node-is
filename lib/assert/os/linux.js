/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import { asError } from "../../opt/obj.js";
import { asString } from "../../opt/string.js";
import * as check from "../../is/os/linux.js";

function shouldLinux(error = null){
  if (check.isLinux() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Linux", 3);
}

//Distro
async function shouldArch(error = null){
  if (await check.isArch() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Arch Linux", 3);
}

async function shouldArchLike(error = null){
  if (await check.isArchLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Arch Linux or similar", 3);
}
async function shouldManjaro(error = null){
  if (await check.isManjaro() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Manjaro", 3);
}

async function shouldDebian(error = null){
  if (await check.isDebian() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Debian", 3);
}

async function shouldDebianLike(error = null){
  if (await check.isDebianLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Debian or similar", 3);
}

async function shouldUbuntu(error = null){
  if (await check.isUbuntu() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Ubuntu", 3);
}

async function shouldUbuntuLike(error = null){
  if (await check.isUbuntuLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Ubuntu or similar", 3);
}

async function shouldMint(error = null){
  if (await check.isMint() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Mint", 3);
}

async function shouldPopOS(error = null){
  if (await check.isPopOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Pop!_OS", 3);
}

async function shouldElementaryOS(error = null){
  if (await check.isElementaryOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Elementary OS", 3);
}

async function shouldDeepin(error = null){
  if (await check.isDeepin() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Deepin", 3);
}

async function shouldRaspberryPiOS(error = null){
  if (await check.isRaspberryPiOS() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Raspberry Pi OS", 3);
}

async function shouldFedora(error = null){
  if (await check.isFedora() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Fedora", 3);
}

async function shouldFedoraLike(error = null){
  if (await check.isFedoraLike() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Fedora or similar", 3);
}

async function shouldOpenSUSE(error = null){
  if (await check.isOpenSUSE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected OpenSUSE", 3);
}

async function shouldSlackware(error = null){
  if (await check.isSlackware() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Slackware", 3);
}

async function shouldGentoo(error = null){
  if (await check.isGentoo() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Gentoo", 3);
}

//DE
function shouldGnome(error = null){
  if (check.isGnome() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Gnome", 3);
}
function shouldKDE(error = null){
  if (check.isKDE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected KDE", 3);
}
function shouldXFCE(error = null){
  if (check.isXFCE() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected XFCE", 3);
}
function shouldMate(error = null){
  if (check.isMate() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Mate", 3);
}
function shouldCinnamon(error = null){
  if (check.isCinnamon() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Cinnamon", 3);
}

//Display Server/Protocol
function shouldWayland(error = null){
  if (check.isWayland() === false) 
    throw asError(error) ?? new Failure(asString(error) ?? "Expected Wayland", 3);
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