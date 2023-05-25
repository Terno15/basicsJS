// 1.Hello world
console.log('hello world Alseny');

var firstName = 'Thierno';
var lastName = 'Diallo';
lastName = "Billo";
var complet = 'My name is ' + lastName +' '+ firstName;
console.log(complet);

//Data types
let Name = 'Diallo' //String
let age = 15 //number
let isHeMarried = false //boolean
let yearsInMarried = null //null
let numberOfCars = undefined //undefined

//Concatenation and Interpolation
var price = 50;
var itemName = 'Cup';
//var messageToPrint = 'The price of your ' +itemName+ ' is ' + price + ' dollars Us';
var messageToPrint = `The price of your ${itemName} is ${price} dollars`; // Interpolation 
console.log(messageToPrint);

//Objects
let customer = {
    Name : 'John',
    lastName : 'Smith'
}
console.log('The name of my customer is '+customer.Name + ' and it lastname is ' + customer.lastName);

//Arrays
let car = ["Volvo", "Toyota", "lambo"];

//Equality operators
var x = 1;
console.log(x == '1');
console.log(x === '1'); // comparaison stricte car '1' ET 1 sont différents: l'un est un nombre, l'autre une string

//Logicals "AND"
console.log(true && true);

//Logicals "NOT"
console.log(6 !== 7);

//conditional statement
//If hour between 6 and 12 print "Good Morning"
 // If hour between 12 and 18 print "Good afternoon"
 // Otherwise: Good evening

 let hour = 8;
if(hour >= 6 && hour < 12){
    //execute some code here
    console.log('Good Morning');
}else if(hour >= 12 && hour < 18)
 {
    //execute some code here
    console.log("Good afternoon");
 } else {
    console.log("Good evening");
 }
 //Loops
//  for (let i = 0; i < car.length; i++) {
//     console.log(car[i]); 
//  }
 
// For of loop
for (const cars of car) {
    console.log(cars);
}

//Functions
//Déclarative function
function helloOne(){
    console.log('HelloOne');
}
helloOne();

//Anonymous function
    let helloTwo = function(){
        console.log('HelloTwo');
    }
helloTwo();

//Arrow function
let helloThree =()=> {
    console.log('helloThree');
}
helloThree()

//with arguments
function printName(name){
    console.log("Hello " +name);
}
printName("Thierno");