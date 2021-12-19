'use strict';

const person = {
    name: 'Андрей',
    lastName: 'Гулин',
    age: 25,
    height: 183,
    weight: 70
};

const personBase = {
    user: true,
    name: 'Борис'
}
// Копировать объект
const personCopy = Object.assign({}, person);

console.log(personCopy);


Object.values(person).forEach((value) => {
    console.log(value);
});

Object.entries(person).forEach((value) => {
    console.log('Ключ: ', value[0], 'Значение: ', value[1]);
})


