// using new constructor
const arr = new Array();
arr[0] = "apple";
arr[1] = 100;
arr[2] = "cherry";
console.log(arr);

// // from method
// const arr1 = Array.from("12345");
// console.log(arr1);

// // methods of an array
const numbers = [10,20,30,40,50];
// // push method add an elemnet to the end of an array
// numbers.push(60);
// // remove an elemnet to the end of an array
// numbers.pop();
// // remove an elemnet to the start of an array
// numbers.shift();
// // add an elemnet to the start of an array
// numbers.unshift();
// // reverse method
// numbers.reverse();
// // returns the length of an array
// let x;
// x = numbers.length;
// // check if element is includes or not
// x = numbers.includes(445);
// // indexof-returns the index no of an element
// x = numbers.indexOf(30);
// // convert to string or join string
// x = numbers.toString();
// x = numbers.join();
// // split converts a string to an array
//  x = x.split(",");  

// slice takes the starting and the ending index and it donent chane the original array
x = numbers.slice(0, 3);
x = numbers.slice(1);

// splice- works like splice except it takes a starting index and the no of elements to remove and also change the original array
x = numbers.splice(0,1)
// splice to add no
x = numbers.splice(0,1,100,200,300,400);
// chaning array menthod
console.log(numbers);
x = numbers.slice(1,4).reverse().toString().charAt(0);
console.log(x);
const fruits = ["apple", "cherry", "kiwi"];
const veggies = ["apple", "cherry", "kiwi"];
const mixed = fruits.concat(veggies);

// spread operators(...)---copies a part of an array or complete array to another array
const newArray = [...fruits, ...veggies];
console.log(numbers);
console.log(mixed);
console.log(newArray);

// destructing - putting the element of an array into variable
const array = [1,2,3,4,5,6,7,8];
// let a = array[0];
// / let a = array[1];
const [a,b,c,d, ...y] = array;
console.log(a);
console.log(b);
console.log(y);



