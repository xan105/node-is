export function shouldLinux(error?: Error | string): void;
export function shouldArch(error?: Error | string): Promise<void>;
export function shouldArchLike(error?: Error | string): Promise<void>;
export function shouldManjaro(error?: Error | string): Promise<void>;
export function shouldDebian(error?: Error | string): Promise<void>;
export function shouldDebianLike(error?: Error | string): Promise<void>;
export function shouldUbuntu(error?: Error | string): Promise<void>;
export function shouldUbuntuLike(error?: Error | string): Promise<void>;
export function shouldMint(error?: Error | string): Promise<void>;
export function shouldPopOS(error?: Error | string): Promise<void>;
export function shouldElementaryOS(error?: Error | string): Promise<void>;
export function shouldDeepin(error?: Error | string): Promise<void>;
export function shouldRaspberryPiOS(error?: Error | string): Promise<void>;
export function shouldRaspbian(error?: Error | string): Promise<void>; //alias
export function shouldFedora(error?: Error | string): Promise<void>;
export function shouldFedoraLike(error?: Error | string): Promise<void>;
export function shouldOpenSUSE(error?: Error | string): Promise<void>;
export function shouldSlackware(error?: Error | string): Promise<void>;
export function shouldGentoo(error?: Error | string): Promise<void>;

export function shouldGnome(error?: Error | string): void;
export function shouldKDE(error?: Error | string): void;
export function shouldXFCE(error?: Error | string): void;
export function shouldMate(error?: Error | string): void;
export function shouldCinnamon(error?: Error | string): void;

export function shouldWayland(error?: Error | string): void;