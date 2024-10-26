/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { env, platform } from "node:process";
import { parse } from "../../util/freedesktop.os-release.js";

function isLinux(){
  return platform === "linux";
}

//Distro
async function isDistro(name, strict = false){
  if (!isLinux()) return false; 
  const { id, id_like } = await parse();
  if (strict === true){
    return id === name;
  } else {
    const alt = id_like?.split(" ") ?? []; //space-separated list of operating system
    return id === name || alt.includes(name)
  }
}
//Arch BTW
const isArch = () => isDistro("arch", true);
const isArchLike = () => isDistro("arch", false);
const isManjaro = () => isDistro("manjaro", true);
//Trusty Debian
const isDebian = () => isDistro("debian", true);
const isDebianLike = () => isDistro("debian", false);
const isUbuntu = () => isDistro("ubuntu", true);
const isUbuntuLike = () => isDistro("ubuntu", false);
const isMint = () => isDistro("linuxmint", true);
const isPopOS = () => isDistro("pop", true);
const isElementaryOS = () => isDistro("elementary", true);
const isDeepin = ()=> isDistro("Deepin", true);
const isRaspberryPiOS = ()=> isDistro("raspbian", true);
//Blue is the new Orange
const isFedora = () => isDistro("fedora", true);
const isFedoraLike = () => isDistro("fedora", false);
//Embedded
const isOpenWrt = () => isDistro("openwrt", true);
//Others
const isOpenSUSE = () => isDistro("opensuse", true);
const isSlackware = () => isDistro("slackware", true);
const isGentoo = () => isDistro("gentoo", true);

//DE
function isDesktopEnvironment(name){
  if (!isLinux()) return false;
  const current = env["XDG_CURRENT_DESKTOP"]?.split(":") ?? []; //Usually a single value but it's a colon-separated list by spec
  const session = env["XDG_SESSION_DESKTOP"]?.toLowerCase();
  return session === name || current.map(s => s.toLowerCase()).includes(name);
}
//const isCosmic = () => isDesktopEnvironment("cosmic?"); //TO DO: check value when released
const isGnome = () => isDesktopEnvironment("gnome");
const isKDE = () => isDesktopEnvironment("kde");
const isXFCE = () => isDesktopEnvironment("xfce");
const isCinnamon = () => isDesktopEnvironment("cinnamon");
const isMate = () => isDesktopEnvironment("mate");

//Display Server/Protocol
function isWayland(){
  if (!isLinux()) return false; 
  return Boolean(env["WAYLAND_DISPLAY"]) || env["XDG_SESSION_TYPE"] === "wayland";
}

export {
  isLinux,
  //Distro
  isArch,
  isArchLike,
  isManjaro,
  isDebian,
  isDebianLike,
  isUbuntu,
  isUbuntuLike,
  isMint,
  isPopOS,
  isElementaryOS,
  isDeepin,
  isRaspberryPiOS,
  isRaspberryPiOS as isRaspbian, //alias
  isFedora,
  isFedoraLike,
  isOpenWrt,
  isOpenSUSE,
  isSlackware,
  isGentoo,
  //DE
  isGnome,
  isKDE,
  isXFCE,
  isMate,
  isCinnamon,
  //Display Server/Protocol
  isWayland
};
