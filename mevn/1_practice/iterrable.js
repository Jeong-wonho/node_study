const a = ['apple', 'straw', 'grape', 'pale'];

console.log(Symbol.iterator in a);

// for (const b of a) console.log(b);s

//iterator
const it = a[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
