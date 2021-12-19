'use strict';

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);
console.log(map);
// for..of
for (let [key, value] of map) {
    console.log(key, value);
}

for (let entry of map) {
    console.log(entry[0], entry[1]);
}

console.log(map.size);

const obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj);
