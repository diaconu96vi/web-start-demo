let welcome = 'Hello World';
let discounted = false;


showMessage(discounted);

//var discounted = false; -> no error
//with let discounted throws error Cannot before init

console.log("log");
// one line comment 
/* 
multi line comment 
*/
let price = 50,
    tax = 0.07;
price = price + 1;
price = price * 2;
price = price / 2;
console.log(price);
//remained
price = price % 2;

showMessage(price * tax);
showMessage(price++); //increment works after current line 
showMessage(++price); //increment works from current line

price = 1.3 + 1.4; // -> 2.7000007
let negativeNumber = 20 - (-2); // use negative numbers in paranthesis (works without tho)

let escapedQuote = "Hello \"World\"";

let name = 'Andrea';
let backtickStringWithInterpolation = `Hello ${name}`;

let convertsToSingleSpace = `Hello

${name}`;


let lowerCase = 'Hello'.toLowerCase();
let concatane = 'Hello' + ' World';
console.log(lowerCase + concatane);
showMessage(convertsToSingleSpace + convertsToSingleSpace.length);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring



//convert
let number2 = 123;
number2 = number2.toString();
console.log(typeof number2);

let numberString = '123.23';
numberString = Number.parseFloat(numberString);
console.log(typeof numberString);

//also removes strings
let numberString2 = '123.23A';
numberString2 = Number.parseFloat(numberString2);
console.log(numberString2);

//booleans
let booolean = true;
showMessage(typeof booolean);

//undefined -> js when its uninitialed
//null -> developer choice when doesnt want any value

//object
let person = {
    age: 15,
    name: 'Nice'
};
console.log(typeof person);
showMessage(person.age);

showMessage('GET A GRIP');
/// IFS
if(5 === 10 || 5 !== 10){
    showMessage('is true');
}

//falsy means false + 0 + empty string + null
if(1.1 + 1.3 !== 2.4){
    showMessage("true");
}

//to fix above do (1.1 + 1.3).toFixed(2)
//note toFixed returns a string, so to keep it as number do +(1.1 +1.3).toFixed(2)

if(1 =="1"){
    showMessage(true);
}
//with == JS converts the type
//using === its strict value

let  ifPrice = 20;
let ifMessage = ifPrice > 20 ? "Expensive" : "Cheap";
showMessage(ifMessage);


if(true){
    var testVar = 'yes';
}
showMessage(testVar); // the var is not block scope but global, let and const are block scope


//OBJECTS
//access properties
person.age = 32;
person['age'] = 42;

//function as properties
let functionObject = {
    message: 'test',
    insideMethod: function(){
        showMessage(this.message);
    },
    insideMethodParameter: function(parameterValue){
        showMessage(parameterValue);
    }
}
functionObject.insideMethod();
functionObject.insideMethodParameter('test parameter');