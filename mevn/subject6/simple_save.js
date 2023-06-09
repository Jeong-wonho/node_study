const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Photo = require('./models/photo.js')

const USER = process.env.DBUSER;
const PWD = process.env.DBPASS;
const HOST = process.env.HOST;
const DB = process.env.DB;
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

console.log(mongodbURL);

mongoose.connect(mongodbURL, {useNewUrlParser: true})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err))

const main = async() => {
    const _data = {
        "albumId": 12010,
        "id" : 12010,
        "title" : "큰돌",
        "url" : "jhc9639@naver.com",
        "thumbnailUrl": "https://via.placeholder.com/150/13454b"
    }
    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    console.log(t)
}

main();
