/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "@xan105/error";
import * as check from "../../is/os/linux.js";

function shouldLinux(){
  if (check.isLinux() === false) 
    throw new Failure("Requires Linux", "ERR_UNSUPPORTED");
}

//Distro
async function shouldArch(){
  if (await check.isArch() === false) 
    throw new Failure("Requires Arch Linux", "ERR_UNSUPPORTED");
}

async function shouldArchLike(){
  if (await check.isArchLike() === false) 
    throw new Failure("Requires Arch Linux or similar", "ERR_UNSUPPORTED");
}
async function shouldManjaro(){
  if (await check.isManjaro() === false) 
    throw new Failure("Requires Manjaro", "ERR_UNSUPPORTED");
}

async function shouldDebian(){
  if (await check.isDebian() === false) 
    throw new Failure("Requires Debian", "ERR_UNSUPPORTED");
}

async function shouldDebianLike(){
  if (await check.isDebianLike() === false) 
    throw new Failure("Requires Debian or similar", "ERR_UNSUPPORTED");
}

async function shouldUbuntu(){
  if (await check.isUbuntu() === false) 
    throw new Failure("Requires Ubuntu", "ERR_UNSUPPORTED");
}

async function shouldUbuntuLike(){
  if (await check.isUbuntuLike() === false) 
    throw new Failure("Requires Ubuntu or similar", "ERR_UNSUPPORTED");
}

async function shouldMint(){
  if (await check.isMint() === false) 
    throw new Failure("Requires Mint", "ERR_UNSUPPORTED");
}

async function shouldPopOS(){
  if (await check.isPopOS() === false) 
    throw new Failure("Requires Pop!_OS", "ERR_UNSUPPORTED");
}

async function shouldElementaryOS(){
  if (await check.isElementaryOS() === false) 
    throw new Failure("Requires Elementary OS", "ERR_UNSUPPORTED");
}

async function shouldDeepin(){
  if (await check.isDeepin() === false) 
    throw new Failure("Requires Deepin", "ERR_UNSUPPORTED");
}

async function shouldRaspberryPiOS(){
  if (await check.isRaspberryPiOS() === false) 
    throw new Failure("Requires Raspberry Pi OS", "ERR_UNSUPPORTED");
}

async function shouldFedora(){
  if (await check.isFedora() === false) 
    throw new Failure("Requires Fedora", "ERR_UNSUPPORTED");
}

async function shouldFedoraLike(){
  if (await check.isFedoraLike() === false) 
    throw new Failure("Requires Fedora or similar", "ERR_UNSUPPORTED");
}

async function shouldOpenSUSE(){
  if (await check.isOpenSUSE() === false) 
    throw new Failure("Requires OpenSUSE", "ERR_UNSUPPORTED");
}

async function shouldSlackware(){
  if (await check.isSlackware() === false) 
    throw new Failure("Requires Slackware", "ERR_UNSUPPORTED");
}

async function shouldGentoo(){
  if (await check.isGentoo() === false) 
    throw new Failure("Requires Gentoo", "ERR_UNSUPPORTED");
}

//DE
function shouldGnome(){
  if (check.isGnome() === false) 
    throw new Failure("Requires Gnome", "ERR_UNSUPPORTED");
}
function shouldKDE(){
  if (check.isKDE() === false) 
    throw new Failure("Requires KDE", "ERR_UNSUPPORTED");
}
function shouldXFCE(){
  if (check.isXFCE() === false) 
    throw new Failure("Requires XFCE", "ERR_UNSUPPORTED");
}
function shouldMate(){
  if (check.isMate() === false) 
    throw new Failure("Requires Mate", "ERR_UNSUPPORTED");
}
function shouldCinnamon(){
  if (check.isCinnamon() === false) 
    throw new Failure("Requires Cinnamon", "ERR_UNSUPPORTED");
}

//Display Server/Protocol
function shouldWayland(){
  if (check.isWayland() === false) 
    throw new Failure("Requires Wayland", "ERR_UNSUPPORTED");
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