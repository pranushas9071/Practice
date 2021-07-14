class Student {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  greeting() {
    console.log("Hi...I am " + this.name);
  }
}
let st1 = new Student("Pranusha", "ECE");
console.log(st1.name);

class Teacher extends Student {
  _subject;
  constructor(name, department, subject) {
    super(name, department);
    this.subject = subject;
  }
  get subject() {
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
}
let t1 = new Teacher("Tarunika", "ECE", "Digital-Image-Processing");
console.log(t1.name);
t1.subject = "Digital-Signal-Processing";
console.log(t1.subject);

