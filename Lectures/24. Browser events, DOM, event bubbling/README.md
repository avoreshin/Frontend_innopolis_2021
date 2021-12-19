# 24. События браузера. Всплытие и погружение. Работа с DOM


## Материалы
* [Код с урока](src)
* [Всплытие и погружение в "Современном учебнике JS"](https://learn.javascript.ru/bubbling-and-capturing)

## Summary
### Получить объект элемента
#### По `id`
```js
const element = document.getElementById('someId');
```
#### По селектору
```js
// querySelector выбирает первый элемент, совпавший с указанным 
// селектором
const elementByClass = document.querySelector('.some-class');
const elementById = document.querySelector('#someId');
const elementByMultipleClasses = document.querySelector('.some-class.some-other-class');
```

### Обработчики событий
#### Добавить обработчик события
```js
const element = document.querySelector('.some-element');
element.addEventListener('click', (event) => {
    // функция выполнится при клике на элемент
})
```

#### Событие ввода в `input`
```js
const input = document.querySelector('input[name=phone]');
input.addEventListener('input', (event) => {
   // вызывается каждый раз при изменении
   // значения input
    
   // event.target.value - текущее значение input 
   console.log(event.target.value); 
   
   // Удалили все пробелы и записали как
   // новое значение input 
   event.target.value = event.target.value.replaceAll(' ', '');
});
```

#### Событие нажатия клавиши мыши
```js
const element = document.querySelector('.some-element');
element.addEventListener('mousedown', (event) => {
   // вызовется при нажатии кнопки мыши, если курсор на
   // данном элементе.
   // Отрабатывает "на щелчок" мыши 
});
```

#### Событие отпускания клавиши мыши
```js
const element = document.querySelector('.some-element');
element.addEventListener('mouseup', (event) => {
   // вызовется при поднятии кнопки мыши, если курсор на
   // данном элементе.
   // Отрабатывает при отщёлкиваии клавиши мыши (ход вверх)
});
```

### Смена стилей элемента через JS
```js
const element = document.querySelector('.some-element');
// добавили красную границу в 1 px
element.style.border = '1px solid #ff0000';
// Скрыли элемент, добавив display: none
element.style.display = 'none';

// Убрали значение display: теперь оно 
// по умолчанию для этого элемента, или то, 
// которое задано в классах
element.style.display = '';
```

Значения, добавленные в `element.style`, добавляются как стили, указанные в атрибуте `style` в html:
```html
<div style="border: 1px solid #ff0000"></div>
```
Соответственно, эти значения переопределяют стили из классов, потому что стили в атрибуте `style` самые приоритетные.

### Управление классами элемента
```js
const element = document.querySelector('.some-element');
// Добавили класс some-class к элементу element
// Если класс описан в CSS, то его стили применятся к этому
// элементу
element.classList.add('some-class');
// Добавили класс some-other-class к элементу element
element.classList.add('some-other-class');

// Удалили клаcc some-other-class
element.classList.remove('some-other-class');
```

### Смена значений атрибутов через JS
```html
<!-- HTML -->
<input name="email" type="email">
```
```js
// JavaScript
const input = document.querySelector('input[name=email]');

input.name = 'phone';
input.type = 'text';
```

### Управление событиями
Стандартное (default) поведение событие, например, отправку формы на нажатие кнопки button с типом submit,
можно остановить:
```js
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
    event.preventDefault();
});
```

Можно предотвратить дальнейшее всплытие события: на родительских элементах оно уже не выполнится:
```js
const element = document.querySelector('.some-element');

// Событие click выполнится для текущего элемента, 
// но не выполнится для всех родительских элементов
element.addEventListener('click', (event) => {
    event.stopPropagation();
});
```
