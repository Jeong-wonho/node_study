const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const users = [
  { id: 1, name: "홍철", age: 22 },
  { id: 2, name: "서영", age: 25 },
  { id: 3, name: "종선", age: 31 },
  { id: 4, name: "제호", age: 27 },
];

const f = (info, user) => {
  const group = user.age - (user.age % 10);
  info.count[group] = (info.count[group] || 0) + 1;
  info.total[group] = (info.total[group] || 0) + user.age;
  return info;
};

const ret = _.reduce(f, {count:{}, total:{}}, users);
console.log(ret);
