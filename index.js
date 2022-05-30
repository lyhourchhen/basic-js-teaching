import { sum } from "./sum";
import sumDefault from "./sum-default";
// default import

console.log("hello world");

//  variable
//  array
//  array method
//  function
//  loop
//  object
//  condition
// module export & import

var name = "John"; // not use this
// mutable & immutable

let myAge = 30; // use this
const myName = "John"; // use this

console.log("My name is " + myName + " and I am " + myAge);

myAge = 50;
console.log(`Now My name is ${myAge}`);

// array
const staffs = ["John", "Jane", "Bob"]; // array of string
// array method
// push, pop, map, filter, sort, reverse

console.log("old staff", staffs);
staffs.push("Tom");

staffs.forEach((staff) => {
  console.log("loop in forEach", staff);
});

for (let i = 0; i < staffs.length; i++) {
  console.log(`loop in for ${staffs[i]}`);
}

console.log("new staff", staffs);

staffs.pop(-1);
console.log("after fire staff", staffs);

const staffsNewName = staffs.map((staff) => {
  return staff + " AsurRaa";
});

console.log(" staff new name ", staffsNewName);

// array object
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const carForSale = [
  car,
  {
    brand: "Honda",
    model: "Civic",
    year: 2008,
  },
];

console.log("my car", car);
console.log("my car for sale", carForSale);

const expiredCar = carForSale.filter((car) => {
  return car.year > 2010;
});

console.log("expred car", expiredCar);

const calculateCarForSale = (car) => {
  if (car.year > 2010) {
    return true;
  } else {
    return false;
  }
};

function canMyCarSale() {
  if (car.year > 2010) {
    return "can";
  } else {
    return "can't";
  }
}

console.log("can my car sale", calculateCarForSale(car));
console.log("check my car sale", canMyCarSale());

console.log("sum money", sum(1, 2), sumDefault(1, 2));
