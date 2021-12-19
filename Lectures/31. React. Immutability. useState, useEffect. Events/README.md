# React. Неизменяемость. Хуки useState, useEffect. События

## Материалы
* [Код с урока](src)

## Summary
### Неизменяемость
Неизменяемость - свойство, при котором созданная переменная больше не может менять своё значение.<br/>
Immutability - по-английски.<br/>
Immutable Variable - неизменяемая переменная <br/>
[Кратко о неизменяемости в React](https://tech-wiki.online/ru/react-immutability.html)

### `useState`
Данный хук используется для того, чтобы использовать состояние в функциональных компонентах.

```jsx
import {useState} from "react";

function Component() {
    // Здесь counter - само состояние. В данном случае счётчик типа number
    // setCounter - функция, с помощью которой можно задать новое значение для counter
    // 0 в useState - начальное значение для counter
    const [counter, setCounter] = useState(0);
    function onSomeEvent() {
        // Здесь мы увеличиваем счётчик на 1, 
        // когда происходит какое-то абстрактное событие (про события - дальше)
        setCounter(counter + 1);
    }
    return (
        // Можно использовать counter, где удобно
        // Но изменять только с помощью функции
        <div>{counter}</div>
    )
}
```

### `useEffect`
Эффект можно применять аналогично хуку жизненного цикла `componentDidMount` в классовых компонентах.<br/>
Можно применять какие-то глобальные события, можно получать данные, можно что-то менять (например, заголовок окна).

`useEffect` вызывается каждый раз, когда компонент ре-рендерится, изменяется.

```jsx
import {useEffect, useState} from "react";

function Component() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        // Каждый раз, когда состояние (counter) меняется
        // заголовок будет обновляться.
        document.title = `Вы нажали ${counter} раз`;
    });
    return (
        <div></div>
    )
}
```

Если из `useEffect` вернуть функцию, то она сработает, когда компонент будет размонтироваться (при удалении).<br/>
Это полезно, когда нужно снять какие-то глобальные события (как мы делали на `componentWillUnmount` в классовых компонентах)

```jsx
import {useEffect} from "react";

function Component() {
    useEffect(() => {
        function clickHandler() {
            console.log('Вы кликнули!');
        }
        // Глобальное событие, которое не удалится само, 
        // даже если компонент был удалён со страницы (при
        // переходе на другую страницу, например)
        document.addEventListener('click', clickHandler);
        
        return function () {
            // Функция выполнится при размонтировании компонента (удалении)
            // Мы снимаем глобальный обработчик клика.
            document.removeEventListener('click', clickHandler);
        }
    });
    return (
        <div></div>
    )
}
```

### События
#### Функциональные компоненты
```jsx
function Component() {
    // Обработчик-функция
    // Может быть задана как с помощью 
    // Function Expression, так и с помощью Function Declaration
    onButtonClick = () => {
        console.log('Вы кликнули');
    }
    
    function onSecondButtonClick() {
        console.log('Вы кликнули на вторую кнопку');
    }
    return (
        <div>
            {/* События пишутся в camelCase прямо в теге */}
            <button onClick={onButtonClick}>Click me!</button>
            <button onClick={onSecondButtonClick}>Click me 2!</button>
        </div>
    )
}
```
#### Классовые компонентыы

```jsx
import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        // Привязываем this к обычной функции 
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
    //    Чтобы использовать здесь this,
    //    необходимо привязать контекст (см. конструктор)
    }
    
    onSecondButtonClick = () => {
    //    Здесь this будет доступен без привязки, 
    //    поскольку стрелочная функция сохраняет контекст
    }
    render() {
        return (
            <div>
                <button onClick={onButtonClick}>Click me!</button>
                <button onClick={onSecondButtonClick}>Click me 2!</button>
            </div>
        )
    }
}
```
