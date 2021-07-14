function * run(){
    console.log("step1");
    yield 10;
    console.log("step2");
    yield 20;
    console.log("step3");
    yield 30;
    console.log("Over");
}

let itr=run();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
