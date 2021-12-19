# 21. Code Style. Объекты

## Материалыы
* [Код с урока](src)
* [AirBnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [JSDoc Guide](https://jsdoc.app/)

## Summary
### Создание объекта
```js
// Объект со значением
const person = {
    name: 'Andrew',
    lastName: 'Gulin',
    body: {
        height: 175,
        age: 25
    }
};

// Пустой объект
const person2 = {};

// Создание свойства name у person2
person2.name = 'Борис';

// Изменение свойства age у person
person.age = 72;
```

### Сравнение объектов
При использовании операторов `==`/`===` результат `true` будет только в том случае, если обе ссылки указывают на один и тот же объект

### Ссылки
* При создании объека он создаётся в памяти, а переменной присваивается ссылка на этот объект.
* Если присвоить другой переменной значение текущей (ссылку на объект), то обе ссылки будут ссылаться на один и тот же объект в памяти
    ```js
    const obj = {
        property: 1,
        count: 25
    };
    // obj2 присваивается значение переменной obj (ссылка на объект)
    const obj2 = obj;
    
    // Изменяя obj2, мы также изменяем и obj1
    obj2.property = 2; // obj.property тоже приняла значение 2
    ```

### Доступ к свойствам
Доступ к свойствам объекта осуществляется через точку (за пример берём объект person)
    ```js
    console.log(person.body.age);
    ```


### Опциональная цепочка
Осуществляет проверку, есть ли текущее свойство, чтобы вызвать следующее.

За пример берём объект person2
```js
// body не существует, значит body - undefined
// При попытке вызова age от undefined JS 
// выдаст ошибку Cannot read property age of undefined
console.log(person2.body.age);
```

Для инлайн-проверки на существование используется опциональная цепочка
```js
// Если body существует у person2 (не undefined), 
// В консоль выведется значение age
// Если в body ничего нет - выведется undefined - значение свойств body
console.log(person2.body?.age);
```
