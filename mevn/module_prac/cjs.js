exports.sayLove = (name) => `${name}아 사랑해`;
exports.sayHi = (name) => {
  console.log(this.sayLove("mevn"));
  return `${name}아 안녕`;
};

exports.value = 1;
