import { Failure } from "../../util/error.js";

function isPNG(buf){
  
  if ( !Buffer.isBuffer(buf) ) throw new Failure("Please provide image as a buffer","ERR_NOT_A_BUFFER");
  
  const marker = {
    header: Buffer.from('89504E470D0A1A0A','hex'),
    trailer: Buffer.from('49454E44','hex'),
    trailerOffset: 4 //four byte CRC
  };

  if( 
      buf.compare(marker.header, 0, marker.header.length, 0, marker.header.length) === 0 &&
      buf.compare(marker.trailer, 0, marker.trailer.length, buf.length - ( marker.trailer.length + marker.trailerOffset ), buf.length - marker.trailerOffset) === 0 
    ) 
    return true;
  else 
    return false;
}

function isJPG(buf){
 
  if ( !Buffer.isBuffer(buf) ) throw new Failure("Please provide image as a buffer","ERR_NOT_A_BUFFER");
  
  const marker = {
    header : Buffer.from('FFD8','hex'),
    jfif : Buffer.from('FFE0','hex'),
    trailer: Buffer.from('FFD9','hex')
  };
  
  const header = Buffer.concat([marker.header,marker.jfif]);
  
  if( 
      buf.compare(header, 0, header.length, 0, header.length) === 0 &&
      buf.compare(marker.trailer, 0, marker.trailer.length, buf.length - marker.trailer.length, buf.length ) === 0 
    ) 
    return true;
  else 
    return false;
}

function isICO(buf){
		
  if ( !Buffer.isBuffer(buf) ) throw new Failure("Please provide image as a buffer","ERR_NOT_A_BUFFER");
  
  const marker = {
    header: Buffer.from('00000100','hex')
  };

	if ( buf.compare(marker.header, 0, marker.header.length, 0, marker.header.length) === 0){

		const direntryLength = 16
    const headerLength = marker.header.length + 2;
			
		const nbrDirEntry = parseInt( buf.slice(marker.header.length,headerLength).reverse().toString('hex') ,16);
			
		let result = true;
		let contentLength = 0;
			
		for (let i = 0; i < nbrDirEntry; i++)
		{
			const pos = i * direntryLength;
			const start = headerLength + pos;
			const end = start + direntryLength;
			const direntry = buf.slice(start, end);

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
		if ( totalLength !== buf.length) result = false; 
			
		return result;

	} else { return false }
} 

export { isPNG, isJPG, isICO }