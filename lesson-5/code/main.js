// программа с зарплатой
// let sum = 0;
// let average = 0;
// let history = '';
// let numberOfsalaries = 0;

// while (true) {
//     let salary = prompt(getInfo(sum, average, history) + '\nВведите ЗП');
//     if (salary === null) {
//         if (confirm('Вы хотите выйти?')) {
//             break;
//         }
//     }
//     if (isNaN(Number(salary))) {
//         if (confirm('Вы доаустили ошибку!!! Хотите выйти?')) {
//             break;
//         }
//         continue;
//     }
//     numberOfsalaries++;
//     salary = Number(salary);
//     sum += salary;
//     average = sum / numberOfsalaries;
//     history += salary + 'руб. ';
// }

// alert(getInfo(sum, average, history));

// function getInfo(sum, average, history) {
//     return `Сумма: ${sum}; \nСредняя: ${average}; \nИстория: ${history}`;
// }

// связи у объектов
// const personSarah = {
//     name: 'Sarah',
//     hobbies: ['Ежжу на мотороллере', 'Кусаюсь'], 
// };

// const personEnrique = {
//     wife: personSarah,
//     name: 'Enrique',
// };

// const family = {
//     personSarah,
//     personEnrique,
// };

// personSarah.husband = personEnrique;

// контекст у функций
// function saySomthing() {
//     console.log('Hi, my name is ' +
//         this.name + ', I\'m '
//         + this.age + '.'
//     );
// }

// let person = {
//     name: "Juba",
//     age: 23,
//     saySomthing: saySomthing, 
// }

// person.saySomthing();

//'use strict'
// this = undefined
// console.log(window.location)
// function saySomthing() {
//     console.log('Hi ' + this.location);
// }

// let person = {
//     name: "Juba",
//     age: 23,
//     saySomthing: function () {
//         console.log('Hi ' + this.name);
//     }
// };

//  person.saySomthing();

// Конструктор объекта
// function Poyalnic (name) {
//     this.name = name;
//     let temp = 0;
//     this.changeTemp = function (angle) {
//         temp = angle * 3;
//     }
//     return {
//         name: this.name,
//     };
// }
// console.log(new Poyalnic('sss'));