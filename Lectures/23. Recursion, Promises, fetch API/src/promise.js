'use strict';


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ура!');
        // reject();
    }, 5000);
});


promise.then((result) => {
    console.log('Промис завершился успешно!', result);
}).catch((e) => {
    console.log('Промис завершился неудачно :(');
}).finally(() => {
    console.log('Промис завершился');
});
