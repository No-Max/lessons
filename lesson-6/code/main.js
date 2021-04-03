'use strict';
// // this === window;

// const arrowfunc = () => {
//     console.log(this);
// };

// const somefunc = function () {
//     // let this = {};
//     console.log(this);
// };

// let someObj = {
//     name: 'name',
// };

// someObj.arrowfunc = arrowfunc;
// someObj.somefunc = somefunc;

// someObj.arrowfunc();
// someObj.somefunc();

// const str = 'ssss';
// console.log(str.length);


// console.log(Infinity);

// console.log(1/'555asdas');

// let base10 = 21;    // 21 - десятичная
// let base16 = 0xa;   // 11 - шестнадцатиричная - цвета, кодировки
// let base2 = 0b11;   // 3 - двоичная - побитовые операции
// let base8 = 0o17;   // 8 - восьмиричная


// console.log('hello my name name is FOOL'.replace(/name/g, ''));

//arrays

// let array = [
//     {
//         name: 'St. Pieterburg',
//     },
//     {
//         name: 'Moscow',
//     },
//     {
//         name: 'Berlin',
//     },
// ];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index] === 0);
// }
// console.log(array);

// array.forEach((city, index) => {
//     console.log(index, city);
// });

// let array = [
//     'name',
//     'firstName',
// ]

// let array = [
//     {
//         name: 'St. Pieterburg',
//         population: 20,
//     },
//     {
//         name: 'Moscow',
//         population: 30,
//     },
//     {
//         name: 'Berlin',
//         population: 10,
//         obj: {
//             some: '',
//         }
//     },
// ];

// let result = array.filter((city) => {
//     return city.population === 20;
// })

// let result = array.map((city) => {
//     return city.name;
// })

// let result = array.reduce((acc, city) => {
//     return acc + city.name + ', ';
// }, '')

// console.log(result.split(', ').join());