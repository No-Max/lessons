// forEach для объекта
// const person = {
//     name: 'Scalapendra',
//     age: 321,
//     color: 'blue',
//     forEach: function (collback) {
//         let key = 'name';
//         let value = this.name;
//         let index = 0;
//         for (let key in this) {          
//             if (key === 'forEach') {
//                 break;
//             }
//             callback(key, this[key], index++)
//         }
//     }
// };

// person.forEach(function (key, value, index) {
//     alert(`${key}, ${value}`)
// })

// функции и аргументы
// function someFunc (arg1, arg2) {
//     console.log(arg1);
// }

// someFunc(1, function (arg) {
//     console.log('something' + arg);
// });

// Массив - это особый вид объекта
// const MyArray = function (first, second) {
//     this[0] = first;
//     this[1] = second;
//     this.length = 0;
// }

// let arr = ['first', 'second'];
// let arr1 = new Array('first', 'second');
// let arr2 = new MyArray('first', 'second');

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// объекты хранятся по ссылке 
// let obj1 = {
//     name: 'Sam',
//     age: 22,
// };
// let obj2 = obj1;
// obj1.name = 'Din';
// console.log(obj2);

// массивы тоже хранятся по ссылке
// let mass = [
//     'Sam',
//     'Din',
// ];

// let mass2 = mass;
// mass.push('Bobby')
// console.log(mass2);

// let arr = []; // Array

// arr.push('string'); 
// console.log(arr.length);
// let obj = { prop: 'some' };
// for (let propName in obj) {
//     console.log(propName, obj[propName]);
// }

// глобальный контекст
// var ddd = '2';

// window.ddd = '22'
// console.log(ddd) // 22

// связи у объектов
// const Enrique = {
//     name: 'Энрики',
// };

// const Sarah = {
//     name: 'Сара',
// };

// const Ann = {
//     name: 'Аня',
//     parents: [
//         Sarah,
//         Enrique,
//     ]
// }

// Enrique.wife = Sarah;
// Sarah.husband = Enrique;

// console.log(Ann.parents[1].wife.name);

// задание с закодированной строчкой
// function State (name, capital, population, area) {
//     this.name = name;
//     this.capital = capital;
//     this.population = population;
//     this.area = area;
// }

// const str =
//     'Германия, Берлин, 83млн, 357.4тыс.кв.км;' +
//     ' Беларусь, Минск, 9.4млн, 207.6тыс.кв.км;' +
//     ' Польша, Варшава, 37.9млн, 312.6тыс.кв.км;' +
//     ' Франция, Париж, 67.8млн, 643.8тыс.кв.км;' +
//     ' Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км;' +
//     ' Испания, Мадрид, 44.3млн, 505.9тыс.кв.км;' +
//     ' Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км';

// let arr = str.split(';');
// arr = arr.map((countryStr) => {
//     const contryArr = countryStr.split(',')
//     return new State(
//         contryArr[0].trim(),
//         contryArr[1].trim(),
//         parseFloat(contryArr[2]),
//         parseFloat(contryArr[3]),
//     )
// });

// деструктуризация
// const arr1 = [ 'Sam', 22 ]
// let [ name, age ] = arr1
// console.log(age, name);


// тип данных Symbol
// const obj = {
//     name: 'obj',
//     symbol: 'ww'
// }

// let symbol = Symbol.for('my-symbol');

// obj[symbol] = 'ssss';

// const sym = Symbol.for('my-symbol');

// console.log(obj);
// console.log(obj[sym]);
// console.log(sym === Symbol.for('my-symbol'));
// console.log(Symbol.keyFor(sym));

//console.log(symbol);

//console.log(obj[symbol]);

//console.log(symbol === Symbol.for('my-symbol'));

// перебираемые объекты
// let arr = ['bmw', 'audi', 'renault'];

// for (let value of arr) {
//     console.log(value);
// }

// let str = 'striiiing';

// for (let value of str) {
//     console.log(value);
// }

// простой объект не является перебираемым
// let obj = {
//     name: 'Sam',
//     age: 22,
// }

// [Symbol.iterator]

// делаем объект перебираемым
// const objIterator = function () {
//     const object = this;
//     const keys = Object.keys(object); // ['name', 'age']
//     const length = keys.length;
//     let index = 0;
//     return {
//         next () {
//             if (index < length) {
//                 return {
//                     done: false, // false
//                     value: {
//                         index: index,
//                         value: object[keys[index++]],
//                         key: keys[index++],
//                     },
//                 }
//             } else {
//                 return {
//                     done: true,
//                 }
//             }
//         },
//     }
// }

// obj[Symbol.iterator] = objIterator;

// for (let v of obj) {
//     console.log(v);
// }

// можем пользоваться созданной функцией для любого объекта
// let someObj = {
//     name: 'Dima',
//     age: 33,
//     color: 'blue',
//     gender: 'male',
//     [Symbol.iterator]: objIterator, 
// }

// for (let value of someObj) {
//     console.log(value);
// }

// псевдомассив
// console.log(['Sam', 22]);

// let arr = {
//     0: 'Sam',
//     1: 22,
//     length: 2,
// }
// for (let value of arr) {
//     console.log(value);
// }
// arr = Array.from(arr)

// for (let value of arr) {
//     console.log(value);
// }
// console.log(arr);

// коллекции
// let obj = {
//     name: 'ssss',
//     [{}]: 's2213', // ключом у объекта может бытть строка либо Symbol
// };

// console.log(obj);

// Map - коллекция
// let obj = { obj: 'obj' };

// let map = new Map([
//     ['key', 'value'],
//     [obj, 'object2222'],
// ]);

// map.set('key1', 'value2');

//console.log(map.get(obj));

//console.log(map.has('key3'));

// map.delete('key1');

//console.log(map.size);

// map.clear();

//console.log(map);

// for (let value of map) {
//     console.log(value);
// }

// console.log(map.entries());

// map.forEach((value, key) => {
//     console.log(value, key);
// })

// преобразование объектов в Map
// let objEnt = Object.entries({
//     name: 'Sam',
//     age: 22,
// });

// const map = new Map(objEnt);

// map.set('color', 'blue');

// console.log(Object.fromEntries(map));

// Set - коллекция
// let set = new Set([
//     'Orange',
// ]);

// set.add('Apple');
// set.add('Limon');
// set.add('Limon');
// set.add('Apple');

// set.forEach((value, key) => {
//     console.log(value, key);
// })

// let set = new Set([
//     'Orange',
// ]);

// let obj = {
//     name: 'Sam',
//     age: 22,
//     [Symbol()]: 'asdasdasda',
//     [Symbol('2222')]: 'asdasdasda',
// }

// преобразования
// console.log(new Map(Object.entries(obj)));
// console.log(new Map(set.entries()));

// console.log(
//     Object.getOwnPropertySymbols(obj),
// )

// console.log(
//     Reflect.ownKeys(obj)
// )

// const garage = {
//   bmw: {
//     model: 'x6',
//     made: 'Germany',
//     color: 'black',
//     year: '2018',
//   },
//   audi:{
//     model: 'Q7',
//     made: 'Germany',
//     color: 'Gray',
//     year: '2011',
//   },
//   volvo:{
//     model: 'XC90',
//     made: 'Sweden',
//     color: 'Blue',
//     year: '2014',
//   },
// };

// const garageEntries = Object.entries(garage);

// const map = new Map(garageEntries);
// const set = new Set(garageEntries)

// console.log(garageEntries);