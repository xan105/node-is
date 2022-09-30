declare interface Option {
  offset?: number,
  limit?: number
}

export function find(filePath: string, headers: Buffer | Buffer[], option?: Option): Promise<boolean>;
