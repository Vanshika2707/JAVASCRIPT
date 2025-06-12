// object lateral this is a first way 
const person = {
    name: "john",
    age: 23,
    iseligible: true,
    address: {
        city: "bhopal",
        state: "mp",
    },
    hobby: ["dance", "singing"],
};

// get the value
console.log(person.name);
console.log(person["age"]);
console.log(person.iseligible);
console.log(person["iseligible"]);
console.log(person.address.city);
console.log(person.hobby[1]);

// update the value
person.iseligible = false;
person.name = "harry potter";

console.log(person);

// constructor this is a second way to create object
const student = new Object();
student.id = 1;
student.name = "john";
console.log(student);

//  array of abject
const movie = [
    {title: "kgf" , released:567},
    {title: "stranger things", released: 2020},
    {title: "harry potter", released: 3665},
];
console.log(movie[1].released);
console.log(movie[2].title)

// spread operater  it is used to copy
const obj1 = {a:1, b:2};
const obj2 = {a:3, b:4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// destructuring 
const todo = {
    id: 1,
    title: "something",
    user: "john",
};
// const{id, title,user} = todo; 1st way
const{id:i, title:t, user:u} = todo;
console.log(t);

const user = {
    id: 1,
    name: "rahul",
    age: 34,
    city: "bhopal",
};

// convert obj ti json string
const jsonUser = JSON.stringify(user);
console.log(user);
console.log(jsonUser);
// convert jsom im to obj
const backtoobject = JSON.parse(jsonUser);
console.log(backtoobject);
