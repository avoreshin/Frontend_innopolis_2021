# 08. Часто используемые свойства CSS

## Материалы
### Сайты для поиска информации
* [MDN](https://developer.mozilla.org/ru/docs/Web)
* [W3Schools](https://www.w3schools.com/)

## Summary
### width
* Задаёт ширину элемента
* Можно задавать, используя любые юниты, но чаще всего используются `px`, `%`, `vw`
```css
.square {
    width: 100px;
}
```

### height
* Задаёт высоту элемента
* Можно задавать, используя любые юниты, но чаще всего используются `px`, `%`, `vw`
* Проценты сработают, только если у родителя есть чётко заданная высота.
```css
.square {
    height: 100px;
}
```

### border
* Задаёт границу элемента
* Составное свойство: состоит из трёх значений - ширина, стиль и цвет.
* Задаёт границу для всех сторон элемента
* Можно использовать свойства по отдельности, не в составном варианте
    ```css
    /* Составной вариант */
    .square {
        border: 4px solid #00ff00;
    }
    ```
    ```css
    /* Несоставной вариант */
    .square {
        border-width: 4px;
        border-style: solid;
        border-color: magenta;
    }
    ```
* Можно задать границу для отдельной стороны элемента
    ```css
    /* Составной вариант */
    .square {
        border-top: 4px solid grey;
        border-right: 4px solid grey;
        border-bottom: 4px solid grey;
        border-left: 4px solid grey;
    }
    ```
    ```css
    /* Несоставной вариант вариант */
    .square {
        border-top-width: 4px;
        border-top-style: solid;
        border-top-color: grey;
        ...
    }
    ```

### background
* Задаёт фон элемента
* Составное свойство, но лучше использовать все свойства по отдельности
    ```css
    .square {
        background-color: red; /* цвет фона */
        background-image: url("img/background.jpg"); /* Изображение фона */
        background-size: 100px 100px; /* Размер фона */
        background-repeat: no-repeat; /* Повторение фона, если ширина или высота меньше размера окна */
    }
    ```

### float
* Позволяет выделить элемент из основного "потока"
* Обтекается инлайновыми элементами, текстом, расположенными после элемента сс float
    ```css
    .image {
        float: left;
        float: right;
    }
    ```
