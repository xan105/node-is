export function shouldLinux(): void;
export function shouldArch(): Promise<void>;
export function shouldArchLike(): Promise<void>;
export function shouldManjaro(): Promise<void>;
export function shouldDebian(): Promise<void>;
export function shouldDebianLike(): Promise<void>;
export function shouldUbuntu(): Promise<void>;
export function shouldUbuntuLike(): Promise<void>;
export function shouldMint(): Promise<void>;
export function shouldPopOS(): Promise<void>;
export function shouldElementaryOS(): Promise<void>;
export function shouldDeepin(): Promise<void>;
export function shouldRaspberryPiOS(): Promise<void>;
export function shouldRaspbian(): Promise<void>; //alias
export function shouldFedora(): Promise<void>;
export function shouldFedoraLike(): Promise<void>;
export function shouldOpenSUSE(): Promise<void>;
export function shouldSlackware(): Promise<void>;
export function shouldGentoo(): Promise<void>;

export function shouldGnome(): void;
export function shouldKDE(): void;
export function shouldXFCE(): void;
export function shouldMate(): void;
export function shouldCinnamon(): void;

export function shouldWayland(): void;