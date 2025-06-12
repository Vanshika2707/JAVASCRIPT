const library = [
    {title: "book0",
        author: "xyz",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {title: "book2",
        author: "xyz1",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {title: "book3",
        author: "xyz2",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:firstBook} = library[0];
const jsonobject = JSON.stringify(library);
console.log(jsonobject);





// new topic
// function - function is a way to group code together, you can run it anytime anywhere
// function decration
function display(){
    console.log('hello world')
}

// invoking or calling a function
display();

// parameter
// add
function add(x, y) {
    console.log(x+y);
}
add(10,20);
add(66,99);

// sub
function substract(x,y){
    return x-y;
}
const result = substract(100,200);
console.log(result);

// multi
function multiply(x, y) {
    console.log(x*y);
}
add(10,20);
add(66,99);

// divide
function divide(x,y){
    return x/y;
}
const result1 = divide(100,200);
console.log(result1)

// this is how we print anything in alert
// function cube(x){
//     return x*x*x;
// }
// const result2 = cube(3);
// alert(result2);

function show(){
    console.log('vanshika')
}
show();




