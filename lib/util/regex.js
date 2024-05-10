/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

export const patterns = {
  hex: /^[0-9A-Fa-f]+$/,
  // https://w3c.github.io/webappsec-subresource-integrity/#grammardef-hash-with-options
  // https://www.w3.org/TR/CSP2/#source-list-syntax
  // https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1
  SRI: /(sha256|sha384|sha512)-(([A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i,
};