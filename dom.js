function percentageMessage(percent){
    document.getElementById('percent-off').textContent = `${percent}% \'OFF\'`;
}
percentageMessage(10);

//styling
const header = document.getElementById('message');
header.style.fontWeight = '100'

//button click 
const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    button.style.fontWeight = 500;
});

//hide-show
// const reviewButton = document.getElementById('see-review');
// reviewButton.addEventListener('click', function(){
//     const review = document.getElementById('review');
//     if(review.classList.contains('d-none'))
//     {
//         review.classList.remove('d-none');
//         button.textContent = 'CLOSE REVIEW';
//     }
//     else {
//         review.classList.add('d-none');
//         button.textContent = 'SEE REVIEW';
//     }

// });

//those are all global scopes because they get referenced directly in the index.html file
//to fix, can make big variables that contain rest of code.
const app = {
    productId: 12345,
    userName: 'Joe',
    orderNumber: 789,
    reviewLogic: function(){
        const reviewButton = document.getElementById('see-review');
        reviewButton.addEventListener('click', function(){
            const review = document.getElementById('review');
            if(review.classList.contains('d-none'))
            {
                review.classList.remove('d-none');
                button.textContent = 'CLOSE REVIEW';
            }
            else {
                review.classList.add('d-none');
                button.textContent = 'SEE REVIEW';
            }

        });
    }
};
app.reviewLogic();

//if you do 'use strict'; (top of file ) it will force you to declare variables;

//ARAYS
let arrayTest = [1,2,3];
//or
let arrayTest2 = Array.of(1,2,3);
console.log(arrayTest);
console.log(arrayTest2);
console.log(arrayTest[0]);

arrayTest.push(5);
console.log(arrayTest);
arrayTest.pop();
console.log(arrayTest);
arrayTest.shift();
console.log(arrayTest);
arrayTest.unshift(1);
console.log(arrayTest);
let arrayCopy = arrayTest.slice(1,2);
console.log(arrayTest, arrayCopy);

//filter
let values = ['a','b','c'];
const cFilter = values.filter(function(item){
    return item >= 'b';
});
console.log(cFilter, values);
console.log(values.indexOf('b'));

const cFind = values.find(function(item){
    return item === 'c';
});
console.log(cFind, values);

//foreach
values.forEach(function(item){
    console.log(item);
});

//DOM ARRAY
const containers = document.getElementsByClassName('container');
console.log(containers);
containers[2].classList.add('d-none');
