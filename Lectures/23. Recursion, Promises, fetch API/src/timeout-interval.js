'use strict';

setTimeout(() => {
    console.log('handler arrow');
}, 1000);

setTimeout(function () {
    console.log('handler function expression')
}, 2000);


function handler() {
    console.log('handler function declaration');
}

setTimeout(handler, 3000);


setInterval(() => {
    console.log('every 1000ms');
}, 1000);

const intervalId = setInterval(() => {
    console.log('every 2000ms');
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
