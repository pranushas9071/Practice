// let arr=[1,1];
// arr.reduce((acc,cv,index,arr)=>{
// acc+=cv;
// console.log(acc);
// console.log(index);
// console.log(arr);
// arr.push(acc);
// console.log(arr);
// ++index;
// cv=arr[index];
// console.log(cv);
// console.log(index);
// return acc,cv,index,arr;
// });
// //console.log(arr);

// let a = [1,1];
// console.log();
// a.reduce((acc, cv, index, a) => {
//   console.log("before : " + acc);
//   acc += cv;
//   console.log("after : " + acc);
//   console.log("before array : " + a);
//   a.push(acc);
//   console.log("after array : " + a);
//   return acc;
// }, 1);
// console.log(a);

let a = [1, 1];
let b = [1, 1];
while (b.length < 10) {
  a.reduce((acc, cv, index, a) => {
    acc += cv;
    a.push(acc);
    b.push(acc);
    return acc;
  });
  a.shift();
}
console.log(b);

let arr = new Array(10).fill(1)
console.log(
  arr.reduce((acc, cv, index, arr) => {
    if (index <= 1) acc.push(1);
    else acc.push(acc[index - 1] + acc[index - 2]);
    return acc;
  }, [])
);
let x=[1,2];
x.unshift(x.pop())
console.log(x);