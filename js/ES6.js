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

//array destructuring...................................
function run() {
  return [1, 2, 3, 4, 5];
}
let f = run(); //usual
let m1 = f[0];
let m2 = f[1];

let [n1, n2, n3] = run(); //ES6
console.log(`${n1} ${n2} ${n3}`);

let [a1, a2, ...args] = run();
console.log(args);//gives [3,4,5]

let [b1, b2, b3 = 45] = run();
console.log(b3);

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo);
console.log(bar);

//object destructuring.............................................................
const person = {
  name: "pranusha",
  first: "pranusha",
  last: "S",
  department: "ECE",
};


let {name,department,full_name=`${person.first} ${person.last}`}=person;////////????????
console.log(full_name);

// let first="tarunika";
// let last="J"

let v = person.name; //ES5
console.log(v);

// let {name}=person;//ES6
// console.log(name);

let { name: name1 } = person;
console.log(name1);

//nested object........................................................
const employee = {
  name: "user1",
  department: {
    name: "sales",
    address: {
      city: "Coimbatore",
    },
  },
};
let {
  department: {
    address: { city: ci },
  },
} = employee;
console.log(ci);

function details({ name, department: { name: dname } }) {
  console.log(`${name} belongs to ${dname} department....`);
}

details(employee);

//array of objects............................................................
const user = [
  {
    name: "user1",
    native: "Coimbatore",
  },
  {
    name: "user2",
    native: "Salem",
  },
  {
    name: "user3",
    native: "Erode",
  },
];

for(let {name,native} of user){
    console.log(`${name} from ${native}`);
}

//spread operator...............................................................
const student={
    name:"st1",
    class:"ECE-B",
    mark:{
        M1:90,
        M2:96,
    }
}
const studentcpy={...student};

console.log(studentcpy);

const stud1={...student,age:22};

console.log(student);//original object is unchanged..

const stud2={...student,class:"cse"}
console.log(student);//original object remains unchanged..
console.log(stud2);

const stud3={...student,mark:{M1:100}}//replaces the entire marks...
console.log(stud3);

const stud4={...student,mark:{...student.mark,M1:100}}
console.log(stud4);

const {name : name5,...arr1}=student;///?????????????????????
console.log(name5,arr1);

function mul(a,b,...arr){
  console.log(a*b);
  console.log(arr);
}
mul(1,1,2,3,4);

let brr=[1,2,3];
let crr=[4,5,6,...brr];
console.log(crr.length);