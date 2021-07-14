let arr=[1,2,3];
for(let x of arr){
    console.log(x);
}
let itr=arr[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

function * task(){
    let n=0;
    while(true){
    yield n+=2;
    }
}

for(let num of task()){
    if(num<=10)
    console.log(num);
    else
    break;
}


