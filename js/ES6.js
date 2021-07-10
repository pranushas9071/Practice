console.log(Number.parseInt("111110111", 2));
console.log(0b111110111);
console.log(Number.parseInt("767", 8));
console.log(0o767);
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a + " " + b + " " + c);
let [x, , y] = arr;
console.log(x + " " + y);
[a, b] = [b, a]; //swaping
console.log(`${a},${b}`); //template literal

//destructuring...................................
function run() {
  return [1, 2, 3,4,5];
}
let f = run(); //usual
let m1 = f[0];
let m2 = f[1];

let [n1, n2, n3] = run();  //ES6
console.log(`${n1} ${n2} ${n3}`);

let [a1,a2,...args]=run();
console.log(args);

let [b1,b2,b3=45]=run();
console.log(b3);

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); 
console.log(bar);
