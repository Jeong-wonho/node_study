const job_1 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(1)
    }, b)
}

const job_2 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(2)
    }, b);
}

const job_3 =() => {
    const b = Math.random() * 100
    setTimeout(()=> {
        console.log(3)
    }, b)
}


console.log("H1")

setTimeout(function timeout() {
    console.log("async function1 complete")
}, 5000)

setTimeout(function timeout() {
    console.log("async function2 complete")
})