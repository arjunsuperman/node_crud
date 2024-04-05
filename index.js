var prompt = require('prompt-sync')();

/*  Problem 1: Conditional Statements (if-else)
You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
-If the age is less than 18, display "You get a 20% discount!"
-If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
- If the age is 65 or older, display "You get a 30% senior discount!" */

// let age = prompt('What is your age?');
// if(age < 18){
//     console.log("you will get 20% discount");
// }else if(age >= 18 && age <= 65 ){
//     console.log("You have to pay full movie ticket");
// }else if(age > 65){
//     console.log("You will gate 30% senior discount");
// }



/*Problem 2: Variables (var and const)
Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: 'area = length *width'". */


// let width = prompt("Width: ");
// let length = prompt("Length: ");

// let area = width * length;

// console.log("The area of rectangle is => "+area)




/* Problem 3: Objects and Properties
You're creating an online store. Define a JavaScript object named "product" with the following
properties:
- name (string)
- price (number)
-inStock (boolean)
Create at least three products using your object template and display their details using
console.log. */


// let store = [
//     {
//         productName : "Be happy book - by arjun",
//         price : 800,
//         inStock : true
//     },
//     {
//         productName : "Be happy book - by arjun",
//         price : 200,
//         inStock : true
//     },
//     {
//         productName : "Be happy book - by arjun",
//         price : 300,
//         inStock : true
//     }
// ]

// let result = store.filter(printProduct).map(product => product.productName);;


// function printProduct(product){
//     if(product.price == 200){
//         return product.productName;
//     }
//     return false;
// }

// console.log(result);



/* Problem 4: Arrays
You're organizing a party and want to keep track of the guest list. Create an array called"guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list.'If the name is found, display "Welcome to the party, [name]!";otherwise, display "Sorry, you're not on the guest list." */

// let guestList = ["Arjun","Mohit","Kuldeep","Ankit","Mukesh"];

// let guestName = prompt("Please Enter Your Name: ");

// if(guestList.includes(guestName)){
//     console.log("You are Welcome "+ guestName);
// }else{
//     console.log("Get Lost! You are not invited!");
// }


/* Problem 5: JSON (JavaScript Object Notation)
You're working on a weather app. Create a JSON object representing the weather forecast for a specific day. Include properties like "date," "temperature," "conditions," and "humidity."Display the information using console.log.
Remember to encourage your students to experiment and think creatively while solving these problems. They can use the concepts you've taught them to come up with their own solutions.This will not only help solidify their understanding but also foster their problem-solving skills in JavaScript. */

// let weatherForecast = {
//     date : '03-04-2024',
//     temperature : 12,
//     conditions : true,
//     humidity : "80%"
// }

// console.log(weatherForecast);


// *************
// let sum = (a,b) => {
//     return a+b;  
// }

// console.log(sum(12,3));

// self calling function
// (function selfCallingWithBracket (){
//     console.log("arjun");
// })();

// Callback function

// function callBackFunc(){
//     console.log('Hello from callback function');
// }

// function sum(a,b,callbackFuncName){
//     console.log('Sum of two number is: '+(a+b));
//     callbackFuncName();
// }


// // sum(10,20,callBackFunc);
// sum(10,20,()=>console.log('callback is here'));


