// 5, 6.8
// 43, 41, 43, 45
// cat, dog, chicken
// Student,Teacher

// Student: name, id, address, phone, level, term, department etc....
// Teacher: name, id, address, phone, department, designation etc....

// var, let, const
// single variable
let x = 5;
let y = 6;

const nayek = "sakib khan";
const player = "sakib al hasan";

/// array
let arr = [43, 41, 43, 45];
let playersOfBD = ["sakib", "tamim", "mushfiq", "etc"];
let studentsOFClass4 = [
  // 2D array
  ["sakib", 4],
  ["tamim", 5],
  ["mushfiq", 6],
];

// Student: name, id, address, phone, level, term, department etc....
// Teacher: name, id, address, phone, department, designation etc....
// object
let student = {
  // key:value
  name: "sakib",
  roll: 10,
};

let allStudents = [
  {
    name: "sakib",
    roll: 10,
    addres: "comilla",
    phone: "015525",
  },
  {
    name: "tamim",
    roll: 11,
  },
  {
    name: "karim",
    roll: 14,
  },
];

let jogaKhichuri = [
  [1, 2, 3, 4],
  "sakib",
  {
    name: "tamim",
    roll: 11,
  },
  10.5,
  "comilla",
];

class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}

// object
let sakib = new Student("sakib", 34);
let mushfiq = new Student("mushfiq", 36);

console.log(sakib);
