const num = 5;
const str1 = 'I\'m' + num + 'sdfjdnskj';
const str2 = "I'm";
const str3 = `Строка в ${1 + 2} наклонных 
${(num + num)} 
кавычках`;

// console.log(str3);


const str4 = 'Hello\n'.substring(2, 3);
console.log(str4, str4[0]);
console.log('Строка'.includes('рокаото'))
console.log('Строка'.startsWith('стр'));
console.log('Строка'.endsWith('стр'));
console.log('      А роза упала на лапу Азора          ');
console.log('      А роза упала на лапу Азора          '.replace('А р', ''));
console.log('      А роза упала на лапу Азора          '.replaceAll('А', 'а'));


const name = prompt('Введите Ваше имя', 'Андрей');
console.log(name);
