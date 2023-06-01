const a = (b, ...rest) => {
  console.log(rest);
};

a(1, 2, 3);

const b = [1, 2, 3];
const a2 = (a, b, c) => console.log(a, b, c);
a2(...b);

const a3 = [1, 2, 3, 4, 5];
const [head, ...rest] = a3;
console.log(head, rest);

//배열통합
const a4 = [1, 2, 3];
const b4 = [4, 5, 6];

const c = [...a4, ...b4];
console.log(c);

//max
const m = [1, 2, 3, 4];
console.log(Math.max(...m));

//객체복사
const k = { name: "주홍철", age: 27 };
const i = {...k, "key":1}
console.log("객체복사", i);

//구조분해할당.
