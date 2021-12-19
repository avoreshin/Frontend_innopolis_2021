// || - или
// && - и
// ! - не
const a = '';
const b = null;
// const result = a || b;
// console.log(result);

const result2 = a && b;
console.log(result2);

// ==   '1' == 1
// ===  '1' '1'
// !=
// !==

const name = prompt('Ваше имя');
if (!name) {
    console.log('Вы ничего не ввели');
} else if (name === 'Андрей' || name === 'Andrew') {
            console.log('Вы Андрей');
} else {
    console.log('Вы не Андрей');
}


const lastName = prompt('Ваша фамилия');
if (!lastName) {
    console.log('У вас нет фамилии');
} else if ((name === 'Андрей' || name === 'Andrew') && (lastName === 'Гулин' || lastName === 'Gulin')) {
    console.log('Вы преподаватель этого курса');
}


const horoscope = prompt('Введите знак зодиака');

switch (horoscope) {
    case 'Овен': console.log('Вы овен. Ваша характеристика.'); break;
    case 'Телец': console.log('Вы телец. Ваша характеристика'); break;
    case 'Лев': console.log('Вы Лев. Ваша характеристика'); break;
    case 'Скорпион': console.log('Вы Скорпион. Ваша характеристика'); break;
    case 'Стрелец': console.log('Вы Стрелец. Ваша характеристика'); break;
    case 'Козерог': {
        console.log('вы козерог');
        console.log('вы полный козерог');
    } break;
    default: console.log('Вы ни один из перечисленных');
}
