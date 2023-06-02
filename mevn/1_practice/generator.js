const log = console.log
function* gen() {
    yield 10 
    if (false) yield 20
    yield 30
    return 90
    yield 30
}

let iter = gen();

console.log(iter)

log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

//Array.prototype.map을 구현하는 함수
const add = a => a + 10
const a = [1,2,3];
const ret = a.map(add);
log(ret)

//위의코드 generator
function *map(f, list){
    for (const a of list){
        yield f(a)
    }
}

log(map(add, a));
log([...map(add, a)]);

