// const a = {"b": 1}
// let b = {...a}
// let c = Object.assign({} , a);
// c.b = 3
// b.b = 3;
// console.log(a)
// console.log(b)

//깊은 객체의 값이 변경되었다 !
const a = {
    "b" : 1,
    "c" : {
        "d" : 2
    }
}

let b = {...a}
let c = Object.assign({}, a);
c.c.d = 3
console.log(a)
