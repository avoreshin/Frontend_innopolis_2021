'use strict';
// hoisting

sayHi();

// function declaration
function sayHi() {
    console.log('Hello!');
}

// function expression
const sayHi2 = function () {
    console.log('Hello 2!');
}

const sayHi3 = () => {
    console.log('Hello 3!')
}

// IIFE - Immediately Invoked Function Expression
(function(name) {
    console.log('IIFE', name);
})('Andrew')

sayHi2();
sayHi3();

let name = 'Андрей';
function closure() {
    // let name = 'Andrew';
    console.log(name);
}

closure();


function createCounter() {
    let counter = 0;

    function add() {
        return ++counter;
    }

    return add;
}

const counter = createCounter();
console.log(counter());
console.log(counter());


let func;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        func = function () {
            console.log(i);
        }
    }
}

// console.log('Счётчик', i);
func();


let variable = 'asd';

if (true) {
    let variable2 = 'asd';
}

console.log(variable);
console.log(variable2);



