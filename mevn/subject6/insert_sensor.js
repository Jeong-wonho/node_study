const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Sensor = require("./models/sensor.js");

const USER = process.env.DBUSER;
const PWD = process.env.DBPASS;
const HOST = process.env.HOST;
const DB = process.env.DB;
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));

const csvFilePath = "./data/sensor.csv";
const csv = require("csvtojson");
const path = require("path");
const _path = path.join(__dirname, csvFilePath);

const main = async () => {
  const sensorList = await csv().fromFile(_path);
  console.log(sensorList);
  Sensor.insertMany(sensorList)
    .then(() => console.log("데이터 삽입완료"))
    .catch((err) => console.log(error));
};

main();
