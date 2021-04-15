// const fruits = ['Apple', 'Orange', 'Banana'];

// let [apple, ...others] = fruits;

// apple = 'apple';

// console.log(apple, others);

// const car = {
//     brand: 'Audi',
//     made: '2021',
//     fuel: {
//         electro: true,
//         disel: {
//             d: 1,
//             c: 2,
//         },
//     }
// };

// const { fuel: { disel: { d, c }, electro } } = car;

// //console.log(car);
// console.log(d, c, electro);

// function countFruits() {
//     // for (let v of arguments) {
//     //     console.log(v);
//     // }
//     console.log(object);
// }

//countFruits('Orange', 'Apple', 'Pinapple');

// let arrOfObjs = [
//     { name: 'Dean' },
//     { age: 31 },
//     { color: 'blue' }
// ]

// let obj = Object.assign(
//     {},
//     ...arrOfObjs
// );

//console.log(obj);

// let arr = [1, 2, 4, 10, 5]

// let num = Math.max(...arr);

// console.log(num);

// console.log(count('Dean'));
// function count(arg) {
//     return arg;
// }
// console.log(count('Sam'));

// let globalVar = 'some value';

// let countOther = function (arg) {
//     let globalVar = 'sdasdas';
//     return globalVar;
// };

// globalVar = 'some othe value';

// countOther('some other ontre other');

// console.log(globalVar);
// console.log(countOther('some other ontre other'));


// 'use strict';
// let gobalVar = '11';

// function func () {
//     let gobalVar = '222';
//     console.log(gobalVar);
// }

// func();
// console.log(gobalVar);


// const func = () => 'hello';
// const func = () => {
//     return 'hello';
// };

function funcOuther() {
    const func = (s) => {
        return this
    };
    return func();
}


console.log(funcOuther('dadadadas'));