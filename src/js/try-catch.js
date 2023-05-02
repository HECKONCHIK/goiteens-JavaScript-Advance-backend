// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
 
// defaultModules.set(PNotifyMobile, {});
 
// alert({
//   text: 'Моя перша нотіфікашка.'
// });


// try {
//     console.log("Код в середині try...... catch" );
// } catch (error) {
//     console.log("Помилка");;
// }

// console.log("Код на зовні try........ catch");

const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ щось не зрозуміле від бекенду }';

console.log('До');

console.log(JSON.parse(validJSON));

console.log('Після');