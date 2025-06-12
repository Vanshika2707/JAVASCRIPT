// string

var str = "    javascript is a great language    ";
var str1 = "react";

// concatenation
var newString = str +" "+str1;
// backtricks is also a methord to add 
newString = `${str} and ${str1}`
console.log(newString);

// string method
let x;
// return the no of characters in string
x = str.length;
// charAt-returns the character at index
x = str.charAt(5);
// indexof-returns the index no of first occurence of characters
x = str.indexOf("t");
// touppercase-changes to capital letter
x = str.toUpperCase();
// changes to lower case
x = str.toLowerCase();
// replace the text or sb replace krne ke lie use replace all
x = str.replace("Javascript","Typescript");
// check if the text is present in the string
x = str.includes("is");
// remove the white space from the starting and ending
x = str.trim();
// slice- in this we gave staring index and ending index or ending index include nhi hota
x = str.slice(0,20);
x = str.slice(-10,-1);
// substing
x = str.substring(5, 35);
console.log(x);

const myString = "developer";
x = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(x);


