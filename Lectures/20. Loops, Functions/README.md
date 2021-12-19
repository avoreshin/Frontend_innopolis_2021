# 20. Циклы, условия

## Материалы
* [Код с урока](src)
* [Разбор Hoisting на Medium](https://medium.com/@stasonmars/разбираемся-с-поднятием-hoisting-в-javascript-7d2d27bc51f1)
* [О замыканиях на MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
* [Области видимости на Habr](https://habr.com/ru/post/517338/)

## Summary
### Циклы
#### `while`
Цикл с условием. Условие проверяется до выполнения: если условие сразу не `true`, цикл не выполнится ни разу
```js
isLoopContinues = true;
let i = 0;
while (isSomething) {
    i = Math.random(); // случайное дробное значение от 0 до 1
    if (i > 0.5) {
        isLoopContinues = false;
    }
}
```

#### `do..while`
Цикл с постусловием. Условие проверяется после первого выполнения: цикл гарантированно выполнится один раз, вне зависимости от условия.
```js
isLoopContinues = true;
let i = 0;
do {
    i = Math.random(); // случайное дробное значение от 0 до 1
    if (i > 0.5) {
        isLoopContinues = false;
    }
} while (isLoopContinues)
```

#### `for`
Цикл с известным числом повторений. 

В конструкции объявления три части, разделённые точкой с запятой: инициализация счётчика, условие продолжения и действие изменения счётчика.<br/>
1. Инициализация счётчика выполняется один раз перед началом цикла
1. Затем проверяется условие
1. Потом выполняется тело цикла
1. Далее выполняется действие по изменению счётчика
1. Переходим к шагу 2.
```js
for (let i = 0; i < 10; i++) {
    // do something
}
```

### Функции
* Функции созданы для того, чтобы какую-то часть кода выполнять несколько раз, не дублируя код.
* Название функции должно отражать действие (`getUserPosts`, `sendResponse`, `writeMessage`)
* Функция должна выполнять одно осмысленное действие, которое можно объединить одним простым названием

#### Объявление функции
```js
// Function Declaration
function sayHello() {
    console.log('Hello World');
}
```
```js
// Function Expression
const sayHello = function () {
    console.log('Hello World');
}
```
```js
// Function Expression (lambda - стрелочная)
const sayHello = () => {
    console.log('Hello World')
}
```
```js
// IIFE - Immediately Invoked Function Expression
// Такая функция выполняется сразу
(function(name) {
    console.log(`Hello, ${name}`)
})('Имя');
```


#### Аргументы функции
В функцию можно передать данные: аргументы (или параметры). Они указываются в скобках через запятую.

```js
function sayHelloToUser(userName) {
    console.log(`Hello, ${userName}`);
}

sayHelloToUser('Андрей'); // вызов функции с параметром
```

```js
function sayHelloToUser(userName, userLastName) {
    console.log(`Hello, ${userName} ${userLastName}`);
}

sayHelloToUser('Андрей', 'Гулин'); // вызов функции с двумя параметрами
```

#### Параметры по умолчанию
Если функция содержит аргументы, но при вызове они не были указаны, то по умолчанию они равны `undefined`. Однако, можно задать значение параметра по умолчанию
```js
function sayHello(userName = 'Guest') {
    console.log(`Привет, ${userName}`);
}

sayHello(); // параметр не указан, в консоль выведется 'Привет, Guest'
sayHello('Андрей'); // параметр указан, в консоль выведется 'Привет, Андрей'
```

#### Локальные и глобальные переменные
* Функция имеет доступ и может изменять переменные, объявленные в основном коде программы
* Переменные, созданные внутри функции, недоступны вне этой функции


#### Возвращаемое значение
Функция может вернуть значение в место кода, откуда она была вызвана
```js
function getSumOfTwoNumbers(a, b) {
    return a + b;
}

console.log(getSumOfTwoNumbers(1, 2)); // в консоль выведется возвращённое функцией значение

const result = getSumOfTwoNumbers(3, 4); // result присвоится возвращённое функцией значение
```


### Hoisting
* Всплытие объявления переменных и функций наверх контекста.
* Выполняется движком "под капотом".
* Позволяет использовать функции до их объявления.

```js
// ... some code
sayHi();
// ... some code

function sayHi() {
    console.log('Hello');
}
```
JS под капотом преобразует код выше в следующиий код:
```js
function sayHi() {
    console.log('Hello');
}

// ... some code
sayHi();
// ... some code
```

### Замыкания
* Способность функции запоминать переменные из контекста, где она была создана
```js
let func;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        func = function () {
            console.log(i);
        }
    }
}

// несмотря на то, что i здесь уже недоступна, 
// при создании функции i было равно 5, 
// поэтому при вызове функции выведется цифра 5.
func(); 
```
