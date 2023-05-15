const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let index = 0; index < 10000000; index++) {
    file.write('안녕하세요, 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!\n');
}