export function isLinux(): boolean;
export function isArch(): Promise<boolean>;
export function isArchLike(): Promise<boolean>;
export function isManjaro(): Promise<boolean>;
export function isDebian(): Promise<boolean>;
export function isDebianLike(): Promise<boolean>;
export function isUbuntu(): Promise<boolean>;
export function isUbuntuLike(): Promise<boolean>;
export function isMint(): Promise<boolean>;
export function isPopOS(): Promise<boolean>;
export function isElementaryOS(): Promise<boolean>;
export function isDeepin(): Promise<boolean>;
export function isRaspberryPiOS(): Promise<boolean>;
export function isRaspbian(): Promise<boolean>; //alias
export function isFedora(): Promise<boolean>;
export function isFedoraLike(): Promise<boolean>;
export function isOpenSUSE(): Promise<boolean>;
export function isSlackware(): Promise<boolean>;
export function isGentoo(): Promise<boolean>;

export function isGnome(): boolean;
export function isKDE(): boolean;
export function isXFCE(): boolean;
export function isMate(): boolean;
export function isCinnamon(): boolean;

export function isWayland(): boolean;