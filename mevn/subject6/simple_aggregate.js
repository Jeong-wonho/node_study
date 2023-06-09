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

const main = async () => {
  const test1 = await Sensor.aggregate([
    { $match: { temp: { $gte: 26 } } }, //조건 설정
    { $group: { _id: "$id", total: { $sum: "$temp" } } },
    //그룹화할 유니트한 _id를 고른 후 그룹 후 모든 temp의 합계를 구한다.
  ]);
  console.log(test1);

  const test2 = await Sensor.aggregate([
    {
      $match: {
        $or: [{ temp: { $gte: 26, $lte: 27 } }, { humi: { $gte: 80 } }],
      },
    },
    { $group: { _id: "$id", count: { $sum: 1 } } },
    { $project: { _id: 0, count: 1 } }, // return 되는 결과값의 영역을 설정합니다.
    //그룹화할 유니크한 _id를 고른 후 그룹 후 모든 것들을 셉니다.
  ]);
  console.log(test2);

  const test3 = await Sensor.aggregate([
    { $match: { $and: [{ temp: { $eq: 26.2 } }, { humi: { $eq: 85.7 } }] } },
    { $sort: { temp: 1 } },
    { $limit: 5 },
    { $project: { _id: 0, temp: 1, time: 1, min: { $minute: "$time" } } },
    { $match: { min: { $eq: 1 } } },
  ]);
  console.log(test3);
};
main();
