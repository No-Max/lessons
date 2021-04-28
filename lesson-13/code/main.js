'use strict'
// Дескрипторы
// const obj = Object.defineProperties({}, {
//     name: {
//         value: 'Sam',
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     },
//     age: {
//         value: 18,
//         enumerable: true,
//     }
// })

// obj.name = 'Dean';

// for (let prop in obj) {
//     console.log(prop);
// }

// delete obj.name

// console.log(obj);

// console.log(
//     Object.getOwnPropertyDescriptor(obj, 'name')
// );

// Object.freeze(obj);

// Геттеры и Сеттеры
// const person = Object.defineProperties({}, {
//     n: {
//         value: 'Sam',
//         writable: true,
//     },
//     name: {
//         enumerable: true,
//         get () {
//             return this.n;
//         },
//         set (value) {
//             this.n = value;
//         },
//     },
//     age: {
//         value: 19,
//         enumerable: true,
//     }
// })

// person.name = 'Dean';

// console.log(
//     person.name
// );

// for (let prop in person) {
//     console.log(`My ${prop} is ${person[prop]}`);
// }

// простой пример применения
// const sphere = {
//     _pi: Math.round(Math.PI),
//     _r: 0,
//     _units: 'м',
//     get radius() {
//         return `Радиус равен: ${this._r}${this._units}`;
//     },
//     set radius(value) {
//         if (typeof value === 'string') {
//             this._r = parseFloat(value);
//             this._units = value.replace(this._r, '');
//         } else {
//             alert(
//                 'Радиус должен быть строкой, например "100см"'
//             )
//         }
//     },
//     get volume() {
//         return `Объем равен: ${ 4 / 3 * this._pi * this._r ** 3 } ${ this._units } куб.`;
//     }
// }

// sphere.radius = "2см"
// console.log(sphere.volume);

// for (let prop in sphere) {
//     console.log(sphere[prop]);
// }

// const box = {
//     get size() {
//         return [this.height, this.width, this.length];
//     },
//     set size(size) {
//         [this.height, this.width, this.length] = size;
//     }
// };

// function Box(size) {
//     Object.defineProperties(this, {
//         height: {
//             value: size[0],
//         },
//         width: {
//             value: size[1],
//         },
//         length: {
//             value: size[2],
//             writable: true,
//         },
//     })
// }

// const myBox = new Box([100, 90, 80]);

// myBox.length = 60;
// console.log(myBox);

// примеры наследования разными способами
// const car = {
//     drive() {
//         return `${this.name ? this.name : 'Машина'} едет...`;
//     }
// };

// const bmw = {
//     name: 'x7'
// };
// bmw.__proto__ = car;

// function Bmw(name) {
//     this.name = name;
// }
// Bmw.prototype = car;
// const bmw = new Bmw('x5');

// const bmw = Object.create(car, {
//     name: {
//         value: 'e46',
//     }
// });

// console.log(
//     bmw.drive()
// );
