// way to print current date
// let d = new Date();
// console.log(d);

// new date(year, month, day, hours, min, secound, millisecond)
// in js jan is 0 and dec is 11
// d = new Date(2020, 14, 22, 12, 24, 45, 300);
// d = new Date(2020, 14, 22, 12, 24, 45);
// d = new Date(2020, 24, 45, 300);
// crete a data from milisecond
// single value is treated as millisecond
// js adds the millisecond to jan 1 1970 5:30 date
// d = new Date(4035);
// this is the fourth way to create date string format
// d = new Date("07-10-2022");
// d = new Date("2022-9-8");
// d = new Date("2-8-2020 12:30:34");
// give current date in millisecond form
// d = new Date(23456789876543);
// d = Date.now();
// console.log(d);

// let mydate = new Date();
// let x;
// x = mydate.getFullYear();
// x = mydate.getMonth();
// x = mydate.getDay();
// x = mydate.getHours();
// console.log(x);

// how to get user birth year
// let y = mydate.getFullYear();
// let birthyear = prompt("enter birthyear");
// let age = y - birthyear;
// console.log(age);


// new topic
// array
const numbers = [1,2,4,5,6,7]
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
// update the value
numbers[0] = 100;
console.log(numbers);

const names = ["vanshika","vanshika"];
console.log(names);
console.log(names[0]);

const mixed = ["vanshika",34, true, null, undefined,{name: "vanshika", age:20},[100,200]];
console.log(mixed);
// way to access upper value
console.log(mixed[5].name);
console.log(mixed[5].age);
console.log(mixed[6][1]);