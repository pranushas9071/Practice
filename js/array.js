const arr = [45, 78, 11, 67, 12];

console.log("Given array : " + arr);
arr.unshift(99);
console.log("unshifted array : " + arr);
arr.shift();
console.log("shifted array : " + arr);
arr.push(88);
console.log("After push : " + arr);
arr.pop();
console.log("After pop : " + arr);
let brr = [1, 5, 3, 7];
let crr = arr.concat(brr);
console.log("Concating two arrays result: " + crr);
arr.copyWithin(2,0,77);
console.log("copied value of one index to another : "+arr);
const a = arr.entries();
console.log("Entries...");
for (let x of a) {
  console.log(x);
}
console.log("Checking with every ...");
console.log(arr.every(check));
function check(num) {
  return num < 100;
}
console.log("Filter....");
console.log(arr.filter((num) => num < 50));
console.log("Find...");
console.log(arr.find((num) => num > 45));
console.log("Find index...");
console.log(arr.findIndex((num) => num > 45));
console.log("For each...");
arr.forEach((value, index) => {
  console.log(value + " : " + index);
});
console.log("Includes...it checks whther the element is present in array..");
console.log(arr.includes(45));
console.log("Finding index of element : " + arr.indexOf(78));
console.log(
  "Join..converts array to string using a seperator : " + arr.join(" , ")
);
let drr = [
  [1, 2],
  [3, [6], 4],
];
console.log("Flatting an array : Removing nested arrays .. : " + drr.flat(2));
console.log("Flat map and map ..........");
console.log(arr);
let err = arr.map((num) => [num * 3]);
console.log(err);
let frr = arr.flatMap((num) => [num * 3]);
console.log(frr);
console.log("keys....it gives array iterator object ");
const x = arr.keys();
for (let i of x) {
  console.log(i);
}
console.log("Last index of an element : " + arr.lastIndexOf(11));
let grr = [100, 50, 20];
console.log("Reduce ......."); // ??????????????????????
console.log(grr.reduce((acc, cv) => acc + cv));
console.log("Reverse : " + arr.reverse());
console.log("Slice : " + arr.slice(1, 3));
console.log(arr);
console.log(
  "Some-checks a condition for all elements and return true if any one pass : " +
    arr.some((num) => num > 60)
);
console.log("Splice....."); //?????????
arr.splice(2, 0, 33, 44);
console.log(arr);
console.log("to string..." + arr.toString());
console.log("ValueOf.........");
console.log(arr.valueOf());
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);
// arr.fill(5);
// console.log("After filling : "+arr);
// arr.sort();//try to sort descending
// console.log(arr);
// console.log(arr.findIndex((val) => val > 45));

let x1=[1,2,3];
let y1=x1.map((num)=>{
  return num*2;
})
console.log(x1);
console.log(y1);

let x2=[1,2,3];
let y2=x2.reduce((acc,cv)=>{
  acc+=cv;
  return acc;
},1)
console.log(y2);

let x3=[1,2,3];
let y3=x3.filter((num)=>{
  return num>2;
})
console.log(y3);