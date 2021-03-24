// const question = confirm('input some name')

// main-new.js // названия файлов и папов в проекте - слова разделяем с помощью тире

// let firstNameNew // camelCase - способ именования переменных где каждое новое слово с большой буквы

// let correctAnswers

// if (question) {
//     // pos
// } else {
//     // neg
// }

// значение1 === значение2

// переключатель switch
// const room = "прихожая"

// switch(room) {
//     case "ванная":
//         console.log('свет в ванной включен');
//         break; // выход из switch
//     case "прихожая":
//         console.log('свет в прихожей включен');
//         break;
//     case "кухня": // объединение 2х случаев - просто пропускаем тело case
//     case "гостинная":
//         console.log('свет в кухне-гостинной включен');
//         break;
//     default: // выполняется если не один из случаев не сработал
//         console.log('нету такой комнаты');    
// }

// условный (тернарный) оператор
// const str = "st";

// const message = str.length === 3 ? "строка длинною 3" : str.length === 4 ? "строка длинною 4" : "Что-то другое";

// console.log(message)

// Циклы
// let index = 0

//while (index < 10) console.log(index++)

// do {
//     console.log(index++);
// } while (index === 0)

// console.log(index);

// while (index < 15) {
//     console.log(index)
//     index += 2
// }

// let index = 0

// for (; ;) { // любой из элементов for можно пропустить
//     if (index > 14) {
//         break; // для немедленного выхожа из цикла
//     }
//     console.log(index)
//     index++
// }

// for (let index = 10; index > 0; index--) { // использование декремента, обратный цикл
//     console.log(index)
// }

// вложенные циклы

// firtsLvl: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1 && i === 1) {
//             break firtsLvl; // firtsLvl - метка если указать ее после break вы немедленно выйдете из всех вложенных циклов до метки
//         }
//         console.log(i, j)   
//     }
// }
// метки могут быть использованы вместе с continue

// Функции
// function getDate1(date) { // Function declaration
//     return new Date(date);
// }

// const getDate2 = function (date) { // Function Expression
//     return new Date(date);
// };

// const getDate3 = (date) => new Date(date); // Arrow Function - стрелочные без тела функции

// const getDate4 = (date) => { Arrow Function - стрелочные с телом функции
//     return new Date(date);
// };

// console.log(getDate1("2020-12-16")); // вызов функции
// console.log(getDate2("2020-12-16"));
// console.log(getDate3("2020-12-16"));


// const calculateSCircle = (a) => {
//     if (a === 1) {
//         return; // используйте return для немедленного выхода из функции
//     }
//     console.log(a)
// }

// calculateSCircle(2)
