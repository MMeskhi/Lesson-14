// 1.
let myArr = [5, 10, 27, 40, 52];

let firstEl = myArr[0];
let secondEl = myArr[1];
let thirdEl = myArr[2];
let fourthEl = myArr[3];
let fifthEl = myArr[4];

// let average = myArr.reduce((a, b) => a + b, 0) / myArr.length;

let average =
  (firstEl + secondEl + thirdEl + fourthEl + fifthEl) / myArr.length;

console.log(average);

//2.
let myArr2 = [
  { name: "mari", age: "20" },
  { name: "ani", age: "18" },
  { name: "gio", age: "23" },
  { name: "dato", age: "26" },
  { name: "shalva", age: "32" },
];

console.log(myArr2);

//3.
let person = {
  firstName: "Mikheil",
  lastName: "Meskhi",
  address: ["Georgia", "Tbilisi"],
  age: 24,
  phoneNumbers: {
    home: 5334321,
    work: 5111234,
  },
};

console.log(
  `My name is ${person.firstName}, My age is ${person.age}, My address is ${person.address}.`
);
