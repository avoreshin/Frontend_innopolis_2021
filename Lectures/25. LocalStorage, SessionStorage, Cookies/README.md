# 25. LocalStorage, SessionStorage, Cookies

## Материалы
* [Код с урока](src)
* [Библиотека js-cookie (описание)](https://www.npmjs.com/package/js-cookie)
* [Библиотека js-cookie (ссылка для скачивания)](https://github.com/js-cookie/js-cookie/releases/download/v3.0.1/js.cookie.min.js)


## Summary
### Общее
Все хранилища используются для сохранения пользовательских данных в браузере, чтобы
при повторном запуске скрипта они были доступны.

### SessionStorage
* Работает только в пределах одной вкладки
* Нужен для сохранения данных при обновлении страницы
* Если вкладку закрыть, все данные, которые сохранили в SessionStorage пропадут

```js
// Установить значение value с ключом key в SessionStorage 
sessionStorage.setItem('key', 'value');

// Получить значение из SessionStorage с ключом key
const storageValue = sessionStorage.getItem('key');
```


### LocalStorage
* В отличие от SessionStorage, сохраняет данные до тех пор, пока пользователь сам их не удалит
* Может использоваться для хранения аналитических данных, а также для предзаполнения форм или списка недавно просмотренных товаров
* Ассоциируется с доменом: данные, сохранённые другим доменом, получить не удастся

```js
// Установить значение value с ключом key в LocalStorage 
localStorage.setItem('key', 'value');

// Получить значение из LocalStorage с ключом key
const storageValue = localStorage.getItem('key');
```

### Cookies
* В отличие от LocalStorage, куки отправляются с запросом на сервер (бэкенд)
* В отличие от LocalStorage, куки могут быть установлены непосредственно сервером (бэкендом) в ответе на запрос.
* Cookies нельзя поставить, если у вас просто открыт файл index.html в браузере, обязательно нужен локальный сервер (адрес должен быть localhost:8000, где 8000 - порт)

```js
// Данное выражение ДОБАВЛЯЕТ новую пару ключ-значение в cookies.
// При этом старые значения остаются
document.cookie = 'key' + '=' + 'value';

// Получить cookies
const cookies = document.cookie;
// Возвращаются вв формате строки:
// 'key=value; key2=value2; key3=value3'
```

### `js-cookie`
* С Cookies не очень удобно работать в чистом JS, поэтому резонно использовать для этого библиотеку
* Чтобы подключить библиотеку в чистом JS, нужно:
    * Cкачать [js-файл с ней](https://github.com/js-cookie/js-cookie/releases/download/v3.0.1/js.cookie.min.js)
    * Положить файл в папку с проектом
    * Подключить скрипт в html ДО скрипта, где собираетесь её использовать:
        ```html
        <!doctype html>
        <html lang="ru">
        <head>
        <meta charset="UTF-8">
                     <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                     <title>Document</title>
        </head>
        <body>
            <script src="js.cookie.min.js"></script>
            <script src="script.js"></script>
        </body>
        </html>
        ```
* Чтобы установить новую пару ключ-значение с помощью библиотеки, нужно использовать объект Cookies и метод set:
    ```js
    Cookies.set('key', 'value');
    ```
* Чтобы получить значние по ключу с помощью библиотеки, нужно использовать объект Cookies и метод get:
    ```js
    const cookieValue = Cookies.get('key');
    ```
