// let a = 5, b = 4, c = 0;
// let a = 5;
// let b = 4;

try {
    console.log(variable);
    let variable = 0;
} catch (e) {
    console.log(e);
}

console.log('Код, который выполнится');
// Commented according to TASK-58
// console.log(variable);
// let variable = 0;
//
// console.log('Код, который не выполнится');

/**
 * Описание константы
 * @type {number}
 */
const GLOBAL_TIMEOUT = 25;

/**
 * Описание функции
 *
 * @param name описание параметра name
 * @param age описание параметра age
 * @returns {string} - Возвращаемое значение
 */
function writeMessage(name = 'Andrew', age = 25) {
    console.log('something');

    return 'hello world';
}



writeMessage();
GLOBAL_TIMEOUT
