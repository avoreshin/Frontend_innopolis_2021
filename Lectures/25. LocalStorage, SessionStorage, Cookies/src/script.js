'use strict';

// let inputValue = sessionStorage.getItem('inputValue') || '';
let inputValue = localStorage.getItem('inputValue') || '';
console.log('Изначальное inputValue', inputValue);
const input = document.getElementById('input');
input.value = inputValue;
// document.cookie = 'name' + '=' + 'Andrew Gulin';

Cookies.set('name', 'Andrew Gulin');
console.log(Cookies.get('name'));

input.addEventListener('input', (event) => {
    inputValue = event.target.value;
    // sessionStorage.setItem('inputValue', event.target.value);
    localStorage.setItem('inputValue', event.target.value);
    // document.cookie = 'inputValue' + '=' + event.target.value;
    console.log(inputValue);
});
