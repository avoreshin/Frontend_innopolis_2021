# 22. Методы объектов, массивы, Set, Map

## Материалы
* [Код с урока](src)

## Summary
### Массивы
#### Объявление массива
```js
const arr = []; // пустой массив
const arr2 = ['яблоко, банан, персик']; // массив строк

// Массив объектов
const objectsList = [
    {
        name: 'Andrew',
        lastName: 'Gulin'
    },
    {
        name: 'Boris',
        lastName: 'Ivanov'
    },
    {
        name: 'Alexey',
        lastName: 'Petrov'
    }
]
```
#### Доступ по индексу
```js
// Получить третий элемент (индексы с 0)
const element = arr2[2];

// Последний элемент (индекс - длина массива - 1)
const lastElement = arr2[arr2.length - 1];
```

#### `forEach` - цикл по массиву
```js
// Функция, объявленная внутри forEach 
// вызывается для каждого элемента списка.
// forEach нельзя прервать.
// Параметры:
//  item - очередной элемент списка
//  index - индекс элемента списка
//  array - это ссылка на сам массив, по которому бежим
arr2.forEach((item, index, array) => {
    console.log(item);
})
```

#### `push` - добавить в конец цикла
```js
arr2.push('Ананас');
```

#### `pop` - удалить с конца списка
```js
const lastElem = arr2.pop();
```

#### `unshift` - добавить в начало списка
```js
arr2.unshift('Папайя');
```

#### `shift` - удалить элемент с начала списка
```js
const firstElement = arr2.shift();
```
#### `indexOf` - найти индекс элемента массива
```js
const index = arr2.indexOf('Ананас');
```
#### `findIndex` - найти индекс (параметр - callback-функциия)
```js
const index = arr2.findIndex((item) => {
    // Если длина элемента равна 4.
    // Ищем первый такой и возвращаем его index
    return item.length === 4;
})
```

#### `find` - найти элемент в массиве
```js
const findElement = arr2.find((item, index, array) => {
    // Начинается с буквы Б
    return item[0] === 'Б'; 
});
```

#### `splice` - удалить часть из массива (меняет массив)
```js
// Параметры
//   2 - индекс, с которого начинать
//   3 - количество удаляемых элементов
arr2.splice(2, 3);
```

#### `slice` - вернуть часть массива (не меняет массиив, возвращает копию)
```js
const arr2copy = arr2.slice(); // полная копия
// Частичная копия. Параметры:
//    0 - индекс начального элемента (включительно)
//    3 - индекс конечного элемента (не включительно)
const arr2part = arr2.slice(0, 3);
```

#### `filter` - фильтрация массива
Возвращает новый массив, удовлетворяющий условиям.

```js
const filteredArray = arr2.filter((item, index, arrray) => {
    // Функция выполняется для каждого элемента
    // В filteredArray попадут те элементы, где функция вернула true.
    return item[2] === 'а'; // третья буква а
});

// Короткая запись
const filteredArrayShort = arr2.filter(item => item[2] === 'a');
```

#### `map` - возвращает переформированный массив
```js
const objectsList = [
    {
        name: 'Andrew',
        lastName: 'Gulin'
    },
    {
        name: 'Boris',
        lastName: 'Ivanov'
    },
    {
        name: 'Alexey',
        lastName: 'Petrov'
    }
];

const objectsRemapped = objectsList.map((item, index, array) => {
    // Функция выполняется для каждого элемента.
    // Возвращаемое значение будет использоваться вместо текущего значения элемента
    return {
        ...item, // копируем изначальный объект с name и lastName
        id: index // добавляем новое свойство
    } 
});
```

#### `reduce` - обработка каждого элемента с сохранением результата
```js
const arrNumbers = [
    {
        x: 5,
        y: 10
    },
    {
        x: 15,
        y: 20
    },
    {
        x: 39,
        y: 27
    }
];
// Считаем (x+y)*(x+y)*(x+y)
const result = arr2.reduce((accumulator, item, index, array) => {
    accumulator *= (item.x + item.y);
    
    // Необходимо вернуть новое значение аккумулятора
    return accumulator;
}, 1);
// Начальное значение аккумулятора после функции
```


### Методы объектов
#### `Object.assign`
Копирует один или несколько объектов в заданный объект. Возвращает изменённый объект.
```js
// Полное копировние объекта.
const newObj = Object.assign({}, oldObj);

const newObj2 = Object.assign(targetObject, sourceObject1, sourceObject2);
```


#### `Object.entries`
Возвращает массив с парами [key, value]
```js
const entries = Object.entries(obj);


// Пробежаться по свойствам объекта
Object.entries(obj).forEach(([key, value]) => {
    console.log('Ключ: ', key, 'Значение: ', value); 
});
```


#### `Object.values`
Возвращает массив значений объекта (без ключей);
```js
const values = Object.values(obj);


// Пробежаться по свойствам объекта
Object.values(obj).forEach((value) => {
    console.log('Значение: ', value); 
});
```

### Set
Set - множество значений. По сути, очень сильно перекликается с массивом.

Главное отличие - не может содержать повторяющихся значений.
```js
const set = new Set();

set.add('яблоко');
set.add('яблоко');
set.add('банан');

//  в результате в set будет только два значения  - яблоко и банан


set.clear(); // очистить множество
set.delete('банан'); // удалить элемент по значению

set.size; // количество элементов в множестве

// Пробежаться по значениям множества
for (let entry of set) {
    
}
```


### Map
Раньше для создания объекта с парами ключ-значение использовали объект, но у Map есть 
несколько преимуществ (именно для пар ключ-значение).<br/>
[Сравнение объектов и мап на MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)

```js
const map = new Map();
map.set('Ключ', 'Значение');
map.set('Ключ2', 'Значение');

map.size; // Количество пар ключ-значение
map.get('Ключ'); // Возвращает знаачение с ключом "Ключ"
map.has('Ключ');  // true, если map содержит значение с ключом "Ключ"
map.delete('Ключ'); // Удаляет пару ключ-значение с ключом "Ключ"

// Пробежаться по элементам map
for (let [key, value] of map) {
    
}
// Другой вариант
for (let entry of map) {
    const key = entry[0];
    const value = entry[1];
}
```
