'use strict';

const set = new Set();

set.add('яблоко');
set.add('яблоко1');
set.add('яблоко2');
set.add('яблоко3');
set.add('яблоко4');
console.log(set);

const arr = [1, 1, 3, 5, 5, 5, 6, 7, 8, 8];
console.log(new Set(arr));

for (let entry of set) {
    console.log(entry);
}

const setObjects = new Set();

setObjects.add({a: 1});
setObjects.add({a: 1});

console.log(setObjects);


