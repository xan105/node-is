/*
MIT License

Copyright (c) 2019-2022 Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import { shouldBuffer }  from "../../assert/type/buffer.js";

function isPNG(buffer){
  
  shouldBuffer(buffer);

  const marker = {
    header: Buffer.from('89504E470D0A1A0A','hex'),
    trailer: Buffer.from('49454E44','hex'),
    trailerOffset: 4 //four byte CRC
  };

  if( 
      buffer.compare(marker.header, 0, marker.header.length, 0, marker.header.length) === 0 &&
      buffer.compare(marker.trailer, 0, marker.trailer.length, buffer.length - ( marker.trailer.length + marker.trailerOffset ), buffer.length - marker.trailerOffset) === 0 
    ) 
    return true;
  else 
    return false;
}

function isJPG(buffer){
 
  shouldBuffer(buffer);
  
  const marker = {
    header : Buffer.from('FFD8','hex'),
    jfif : Buffer.from('FFE0','hex'),
    trailer: Buffer.from('FFD9','hex')
  };
  
  const header = Buffer.concat([marker.header,marker.jfif]);
  
  if( 
      buffer.compare(header, 0, header.length, 0, header.length) === 0 &&
      buffer.compare(marker.trailer, 0, marker.trailer.length, buffer.length - marker.trailer.length, buffer.length ) === 0 
    ) 
    return true;
  else 
    return false;
}

function isICO(buffer){
		
  shouldBuffer(buffer);
  
  const marker = {
    header: Buffer.from('00000100','hex')
  };

	if ( buffer.compare(marker.header, 0, marker.header.length, 0, marker.header.length) === 0){

		const direntryLength = 16
    const headerLength = marker.header.length + 2;
			
		const nbrDirEntry = parseInt( buffer.slice(marker.header.length,headerLength).reverse().toString('hex') ,16);
			
		let result = true;
		let contentLength = 0;
			
		for (let i = 0; i < nbrDirEntry; i++)
		{
			const pos = i * direntryLength;
			const start = headerLength + pos;
			const end = start + direntryLength;
			const direntry = buffer.slice(start, end);

			if (direntry.compare(Buffer.from('00','hex'), 0, 1, 3,4) !== 0) { //offset:3,size:1 => Reserved. Should be 0
				result = false;
				break;
			}  
				
			if ( !(direntry.compare(Buffer.from('00','hex'), 0, 1, 4,5) === 0 || direntry.compare(Buffer.from('01','hex'), 0, 1, 4,5) === 0)) { //Specifies color planes. Should be 0 or 1
				result = false;
				break;
			}
				
			contentLength += parseInt( direntry.slice(8,12).reverse().toString('hex') ,16);
		}

		const totalLength = contentLength + headerLength + ( direntryLength * nbrDirEntry );
		if ( totalLength !== buffer.length) result = false; 
			
		return result;

	} else { return false }
} 

export { isPNG, isJPG, isICO }