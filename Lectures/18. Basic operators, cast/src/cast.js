// Строковое преобразование
const bool = true;
const num = 52;
const str = String(num);

console.log(num, str);

const str2 = '' + bool;
console.log(bool, str2);


// Числовое преобразование
const castNum = Number('     345345         ');
const castNum2 = +str;
console.log('string -> number', castNum);
console.log('string -> number (неявное)', castNum2);

// Логическое преобразование
const boolCast = Boolean('0');
console.log('string -> boolean', boolCast);
const boolCast2 = !!str;
console.log('string -> boolean (неявное)', boolCast2);

if (str) {

}

/*
    falsey значения:
    - undefined
    - null
    - '',
    - 0
    - NaN
 */


