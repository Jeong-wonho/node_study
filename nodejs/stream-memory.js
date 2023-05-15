const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt')
const writestream = fs.createWriteStream('./big3.txt');

readStream.pipe(writestream);
readStream.on('end', () => {
    console.log('stream:', process.memoryUsage().rss);
})