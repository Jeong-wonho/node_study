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

const main = async()=>{  
    const t = await Photo.findOne({
        "title" : {
          $eq : '큰돌'
        }, 
        "url" : {
          $eq : 'jhc9639@naver.com'
        }
      }).lean()
    console.log(t)
  }  
  main()