# 07. Что такое CSS, способы подключения стилей к странице, селекторы тэга, класса, id

## Материалы
1. [Код с урока](src)

## Summary
### CSS
* CSS - Cascading Style Sheets - каскадные таблицы стилей
* CSS используется для оформления HTML документа

### Способы подключения CSS к HTML
* CSS как атрибут тега в HTML
```html
<div style="color: #ff0000">Красный текст</div>
```

* CSS в теге `<style>` в `<head>`
```html
<head>
    <style>
        input {
            outline: none;
        }
    </style>
</head>
```

* CSS в файле (вариант, который мы будем использовать)
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/style.css"
    </head>
</html>
```
где `css/style.css` - путь до файла CSS.

### Селекторы
* Селекторы класса (работают на все элементы с этим классом)
    ```html
    <!-- index.html-->
    <div class="some-class"></div>
    ```
    ```css
    /* style.css */
    .some-class {
        font-size: 20px;
    }
    ```

* Селекторы элемента (применяются ко всем элементам с таким названием)
    ```html
    <!-- index.html-->
    <div></div>
    ```
    ```css
    /* style.css */
    div {
        background: #00ff00;
    }
    ```

* Селектор id (применяется к элементу с таким id)
    ```html
    <!-- index.html-->
    <div id="someId"></div>
    ```
    ```css
    /* style.css */
    #someId {
        border-radius: 0;
    }
    ```
