const {
    Worker, isMainThread, parentPort
} = require('worker_threads');


console.log('isMainThread:', isMainThread)

if (isMainThread) {
    console.log('main1')
    // 워커를 생성한다.
    const worker = new Worker(__filename);
    console.log('main2')
    //워커의 메세지를 받는다. 하지만 워커의 메세지가 없다 message 자체가 없는 것이지.!그래서 코드가 실행이 안되..!
    worker.on('message', message=> console.log('from worker', message));
    console.log('main3')
    worker.on('exit', () => console.log('worker exit'));
    console.log('main4')
    worker.postMessage('ping');
}else {
    console.log('child1')
    parentPort.on('message', (value) => {
        console.log('child2')
        console.log('from parent', value);
        console.log('child3')
        parentPort.postMessage('pong');
        console.log('child4')
        parentPort.close();
    })
}