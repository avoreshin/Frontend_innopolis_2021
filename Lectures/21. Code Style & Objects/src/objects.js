'use strict';

const person = {
    name: 'Andrew',
    lastName: 'Gulin',
    body: {
        height: 175,
        age: 25
    }
};

const person2 = {};
person2.name = 'Борис';

console.log(person);
console.log('Возраст:', person.body.age);

console.log(person2);


const person3 = person;
// person3.body.age = 35;

console.log(person3);
console.log(person);
console.log(person === person3);


if (person2.body) {
    console.log(person2.body.age);
}

console.log(person2.body?.age);
