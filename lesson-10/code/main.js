// Замыкания
// const createCounter = function (defaultValue = 50) {
//     let count = defaultValue;
//     return function () {
//         return --count; // обратный счетчик
//     }
// };
// const countPig = createCounter(); // создание счетчика
// console.log(countPig()); // вычетаем единицу
// console.log(countPig()); // вычетаем еще единицу

// счетчик и одновременно список
// function createChildCouner() {
//     const listOfChildren = [];
//     return function (childName) {
//         listOfChildren.push(childName)
//         return listOfChildren;
//     }
// }

// const addChildToList1 = createChildCouner(); // создание списка 1
// addChildToList1('Sam');
// addChildToList1('Din');
// console.log(addChildToList1('Ruby'));

// const addChildToList2 = createChildCouner(); // создание списка 2
// addChildToList2('Pepa');
// addChildToList2('George');
// console.log(addChildToList2('Maxim'));

// бюджет
// const createBudget = function () {
//     let budget = 0;
//     return function (money) {
//         budget += money;
//         return budget;
//     }
// };

// const addMoney = createBudget();

// while (true) {
//     const money = prompt('INPUT MONEY!');
//     if (money === null) {
//         break;
//     }
//     addMoney(+money);
// }

// console.log(addMoney(0));

// подъем
// if(true) {
//     let s = 'string'
// }
// console.log(s);

// var s;

// console.log(s);

// s = 'str';

// console.log(s);

// браузер
// let myButton = document.getElementById('myButton');
// myButton.style.color = 'red';
// myButton.style.color = '#fff';
// myButton.style.backgroundColor = '#111';

// myButton.style.height = 15;

// console.log(navigator);

// let h1 = document.querySelector('h1');
// let div = document.querySelector('#div');

// function func1() {
//     console.log('Клик');
// }
// function func2() {
//     console.log('Кллак');
// }

// let button = document.getElementById('myButton');

// let isBlue = true;
// button.addEventListener('click', function () {
//     if (isBlue) {
//         isBlue = false;
//         this.style.background = 'green';
//     } else {
//         isBlue = true;
//         this.style.background = 'blue';
//     }
// })

// button.onclick = func2();