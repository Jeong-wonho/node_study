const d = () => ({"name": "최주원", "job": "마케터"});
const {name} =d();
console.log("name:" , name);

const a2 = [1, 2];
const [b, c] = a2
console.log(b, c);

const a3 = { "name2" : "큰돌", "노래": "자취방좋아"};
const {name2, 노래 } = a3
console.log("name2, 노래", name2, 노래)