// класс Паяльник
// class Payalnik {
//     made = 'China';
//     power = false;
//     temp = 0;
//     constructor(brand) {
//         this.brand = brand;
//     }
//     turnOn() {
//         this.temp = 230;
//         this.power = true;
//         console.log(`Паяльник ${this.brand} включен`);
//     }
//     turnOff() {
//         this.power = false;
//         console.log(`Паяльник ${this.brand} отключен`);
//     }
//     set mode(value) {
//         if (this.power) {
//             switch (value) {
//                 case 1: this.temp = 260;
//                     break;
//                 case 2: this.temp = 300;
//                     break;
//             }
//         } else {
//             console.log('Паяльник выключен!');
//         }
//     }
// }

// const SuperPayalnik = class extends Payalnik {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }
//     turnOn() {
//         super.turnOn();
//         console.log(`${this.model} с подстветкой`);
//     }
// }

// const myPayalnik = new SuperPayalnik('Panasonic', 'version 2');
// myPayalnik.turnOn();

// класс Круг
// class Circle {
//     pi = 3.14;
//     constructor(r) {
//         this.r = r;
//     }
//     get square() {
//         return this.pi * this.r ** 2;
//     }
//     static createDefault() {
//         return new this(10);
//     }
// }

// class NiceCircle extends Circle {
//     pi = Math.PI
// }

// const circle1 = new Circle(5);
// console.log(circle1);

// console.log(Circle.createDefault());

// console.log(new NiceCircle(20));

// console.log(NiceCircle.createDefault())
// const square = PI*r**2
// return square;

// Наследуемся от встроенного класса
// const obj = {
//     key: 'value',
//     key1: 'value1',
// }

// new Map([
//     ['key', 'value'],
//     ['key1', 'value1'],
// ])

//new Map(obj);

// class SamartMap extends Map {
//     constructor(obj) {
//         let entries = obj;
//         if (typeof obj === 'object') {
//             entries = Object.entries(obj);
//         }
//         super(entries);
//     }
// }

// console.log(new SamartMap([
//     ['key', 'value'],
//     ['key1', 'value1'],
// ]));
// console.log(new SamartMap(obj));

// расширение прототипа встроенного класса
// Array.isNulableArray = function (arr) {
//     let isNulable = true;
//     for (let item of arr) {
//         if (Number(item) !== 0) {
//             isNulable = false;
//         }
//     }
//     return isNulable;
// }

// console.log(Array.isNulableArray([0, 0, 0, 0]));
// Array.prototype.isEmpty = function () {
//     return this.length === 0;
// }

// const arr = new Array(1, 2, 3);
// console.log(arr, arr.isEmpty());

// Переключатель
// class Toggler {
//     _status = false;
//     constructor(name, cb) {
//         this.element = document.createElement('button');
//         this.element.innerText = name;
//         this.element.onclick = () => {
//             this._status = !this._status;
//             cb(this._status);
//         }
//     }
// }

// const arrOptions = [
//     {
//         name: 'toggler1',
//         cb: (status) => {
//             document.body.style.background = status ? 'blue' : 'white';
//         }
//     },
//     {
//         name: 'toggler2',
//         cb: (status) => {
//             document.body.style.background = status ? 'silver' : 'red';
//         }
//     },
//     {
//         name: 'toggler2',
//         cb: (status) => {
//             document.body.style.background = status ? 'skyblue' : 'green';
//         }
//     }
// ]

// arrOptions.forEach(option => {
//     document.body.append(
//         new Toggler(option.name, option.cb).element
//     )
// })