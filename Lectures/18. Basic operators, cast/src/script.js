/*
    + сложение (работает как с числами, так и со строками)
    - вычитание
    * умножение
    / деление
    % остаток от деления
    ** возведение в степень
    = присваивание
    *= сокращённая арифметика с присваиванием (домножение)
    += сокращённая арифметика с присваиванием (прибавление)
    ++ инкремент
    -- декремент
 */

const multiply = 5 ** 4;
console.log(multiply);

const restDivision = 27 % 5;
console.log(restDivision);


const str1 = 'Привет, ';
const str2 = 'мир!';
const num = 5;
const str3 = str1 + str2 + num;
console.log(str3);

const stringNumber = '5';
console.log(+stringNumber + 25);

let n = 2;
n = n + 5;
n += 5;
n = n * 5;
n *= 5;
n *= 5 + 5;
console.log(n);

// boxing - оборачивание под капотом в объект
console.log('привет'.toUpperCase());

// unboxing - разворачивание из объекта в примитивный тип
console.log(Number(5));


let i = 0;
console.log('Инкремент возвращаемое', ++i);
console.log('Инкремент', i);





