function showMessage(message){
    document.getElementById('message').textContent = message;
}

//or

let showMess = function (message){
    //code
}

//or
let showName = function functionName(message){
    //code
}
//showMess();

//It works using variables declared outside the scope, but you cannot use variables declared inside the function outside
let randomVariable = 'test';
let randomMethod = function(){
    return randomVariable;
}

//but you can overwrite variables with same name inside the function
let methods = function(){
    let randomVariable = 'test1';
    console.log(randomVariable);
}
methods();

//declaring a variable only inside the function scope and using it after throws an error
// let methods1 = function(){
//     let methods1Variable = 'test'
// }
// console.log(methods1Variable);
