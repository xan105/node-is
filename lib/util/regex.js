/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

export const patterns = {
  hex: /^[0-9A-Fa-f]+$/,
  SRI: /^(sha(?:256|384|512)-[A-Za-z0-9+/=]{43,}={0,2})$/i,
};