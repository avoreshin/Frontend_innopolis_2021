'use strict';

let name = 'Андрей';
let someVariable = 'Строчка';

function writeHelloWorld() {
    console.log('Hello world!');
}

function sayHi(name, lastName = 'No Last Name') {
    const string = `Hello, ${name} ${lastName}`;
    console.log(string);

    return `Return: ${string}`;
}

// writeHelloWorld();
sayHi('Andrew', 'Gulin');
let result = sayHi(name);
console.log(result);
