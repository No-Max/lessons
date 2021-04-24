// функции тоже объекты
// const someFunc = function other(arg, arg2) {
//     console.log(other.name);
// };

// console.log(someFunc.length);
// console.log(someFunc.name);
// const newFunc = someFunc;
// newFunc();

// странный счетчик бех переменных
// const createCounter = function () {
//     function count () {
//         return ++count.sum;
//     };
//     count.sum = 0;
//     return count
// };

// const count = createCounter();

// console.log(count());
// console.log(count());

// декораторы
// const multiple = (...args) => {
//     const stamp = new Date().getTime();
//     while (new Date().getTime() <  stamp + 2000) {}
//     return args.reduce((acc, num) => {
//         return acc * num;
//     }, 1);
// }

// const cacheDecorator = function (func, keyMaker) {
//     const cache = new Map();
//     return function (...args) {
//         const cacheKey = keyMaker(...args);
//         if (!cache.has(cacheKey)) {
//             cache.set(cacheKey, func(...args));
//         }
//         return cache.get(cacheKey);
//     }
// }

// const multipleFunctionsKeyMaker = (...args) => {
//     return args.sort().join('-');
// }
// const fastMultiple = cacheDecorator(
//     multiple,
//     multipleFunctionsKeyMaker
// );

// console.log(fastMultiple(2, 3, 10));
// console.log(fastMultiple(3, 2, 10));
// console.log(fastMultiple(10, 2, 3));
// console.log(fastMultiple(2, 10, 3));
// console.log(fastMultiple(2, 3, 10));

// console.log(fastMultiple(4, 3));
// console.log(fastMultiple(4, 3));
// console.log(fastMultiple(4, 3));
// console.log(fastMultiple(3, 4));

// работа с контекстом
// 'use strict'

// const person1 = {
//     name: 'Sam',
// };

// const person2 = {
//     name: 'Bobby',
// }

// const sayHello = function (personName) {
//     console.log(`${this.name} says hello to ${personName}`);
// };

// function Crowley() {}

// sayHello.call(Crowley, 'Dean');
// sayHello.call(person1, 'Dean');
// sayHello.call(person2, 'Dean');

// sayHello.apply(Crowley, ['Dean']);
// sayHello.apply(person1, ['Dean']);
// sayHello.apply(person2, ['Dean']);

// потеря контекста
// 'use strict'

// const obj = {
//     pi: 3.14,
//     multiple: (...args) => {
//         const stamp = new Date().getTime();
//         while (new Date().getTime() <  stamp + 2000) {}
//         return args.reduce((acc, num) => {
//             return acc * num;
//         }, 1);
//     },
//     circleSquare: function (radius) {
//         return this.pi * radius ** 2;
//     }
// }

// const cacheDecorator = function (func, keyMaker, context) {
//     const cache = new Map();
//     return function (...args) {
//         const cacheKey = keyMaker(...args);
//         if (!cache.has(cacheKey)) {
//             cache.set(cacheKey, func.apply(context, args));
//         }
//         return cache.get(cacheKey);
//     }
// }

// const multipleFunctionsKeyMaker = (...args) => {
//     return args.sort().join('-');
// }
// const decoratedCircleSquare = cacheDecorator(
//     obj.circleSquare,
//     multipleFunctionsKeyMaker,
//     obj
// );

// console.log(decoratedCircleSquare(3));

// фиксация контекста
// const obj = {
//     name: 'Dean',
// };

// function upName(prefix, suffix) {
//     return prefix + this.name.toUpperCase() + suffix;
// }

// const upObjName = upName.bind(obj, 'nanan', '!');

// console.log(upObjName());
// console.log(upObjName());

// const user = {
//     firstName: "Вася",
//     sayHi() {
//         console.log(`Привет, ${this.firstName}!`);
//     }
// };

// setTimeout(() => user.sayHi(), 1000);

// setTimeout("user.sayHi()"", 1000);

// setTimeout(user.sayHi.bind(user), 1000);

// for (let index = 0; index < 10; index++) {
//     setTimeout(function () {
//         console.log(index);
//     }, 1000);
// }

// всплытие
// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');
// const div3 = document.getElementById('div3');

// div1.onclick = (event) => {
//     if (event.target === div3) {
//         console.log('div 3 has been clicked');
//     }
//     if (event.target === div2) {
//         console.log('div 2 has been clicked');
//     }
//     if (event.target === div1) {
//         console.log('div 1 has been clicked');
//     }
// }

// div2.onclick = (event) => {
//     console.log(2);
// }

// div3.onclick = function (event) {
//     console.log(event.target);
// }

// классы элементов
// document.querySelector('button').onclick = function () {
//     console.log(this.className);
//     this.classList.toggle('active')
// }