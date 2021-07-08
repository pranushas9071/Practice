const person = {
  name: "Pranusha",
  mobile: "9988776655",
  get: function () {
    console.log("Name : " + this.name + " Mobile : " + this.mobile);
  },
  greettings: function () {
    console.log("Hello " + this.name);
  },
};
console.log(person.name);
console.log(person.mobile);
person.get();
person.greettings();

// Creating constructors..................................................................

function Id(first, last) {
  this.name = {
    first: first,
    last: last,
  };
}
Id.prototype.greeting = function () {
  console.log("Hi " + this.name.first);
};
Id.prototype.age = 15;
let id1 = new Id("Pranu", "S");
let id2 = new Id("Pavi", "S");
Id.prototype = { age: 20 };
let id4 = new Id("Dharani", "S");
let id5 = Object.create(id4);

console.log(id1.name);
console.log(id2.name);
id1.greeting();
id2.greeting();

let id3 = new Object();
id3.name = "Bhava";

id3.greeting = function () {
  console.log("Hello " + this.name);
};
id3.greeting();

//prototypes....................................................................

console.log("Prototype of Id : " + typeof Id.prototype);
console.log("Prototypr of id1 : " + typeof id1.prototype);
console.log("Prototypr of id1 : " + typeof id1.__proto__);
console.log("Prototype of Object : " + typeof Object.prototype);

console.log(id1.hasOwnProperty(toString()));
console.log(Id.hasOwnProperty(toString()));
console.log(Object.hasOwnProperty(toString()));

console.log(id1.age);
console.log(id2.age);
console.log(id4.age);
console.log(Id.toString());

console.log(id5.name);
console.log(id5.__proto__);
console.log(id5.prototype);

//inheritance.........................................................................
function Bio(first, last, address) {
  Id.call(this, first, last);
  this.address = address;
}

Bio.prototype = Object.create(Id.prototype);

Object.defineProperty(Bio.prototype, "constructor", {
  value: Bio,
  enumerable: false,
  writable: true,
});

Bio.prototype.greeting = function () {
  console.log("Good evening " + this.name.first + " " + this.name.last);
};
Bio.prototype.DOB="17.10.1999";
let bio1 = new Bio("Revanth", "M", "abcd...");

bio1.greeting();

console.log(bio1.DOB);
