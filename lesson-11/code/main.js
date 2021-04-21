// setTimeout и setInterval
// function func() {
//     console.log('error');
// }

// let timerId = setTimeout(func, 2000);
// setTimeout(() => clearTimeout(timerId), 1000);

// function func() {
//     console.log('Прошла минута');
// }

// let timerId = setInterval(func, 1000);
// setTimeout(() => clearInterval(timerId), 5000);

// время на странице
//function getCurrentTime() {
//     const dateNow = new Date();
//     return {
//         h: dateNow.getHours(),
//         m: dateNow.getMinutes(),
//         s: dateNow.getSeconds()
//     };
// }

// const timeId = document.getElementById('time');

// const updateTime = () => {
//     const { h, m, s } = getCurrentTime();
//     timeId.innerText = h + ':' + m + ':' + s;
// }

// setInterval(updateTime, 1000);


// рекурсия
// const person = {
//  name: 'Петя',
//  money: 3000,
//  people: [{
//    name: 'Вася',
//    money: 2000,
//    people: [{
//      name: 'Вова',
//      money: 1000,
//      people: [{
//        name: 'Таня',
//        money: 3000
//      },{
//        name: 'Ксюша',
//        money: 1000
//      }]
//    },{
//      name: 'Коля',
//      money: 6000
//    }]
//  },{
//    name: 'Женя',
//    money: 2000,
//    people: [{
//         name: 'Саша1',
//         money: 1000,
//         people: [
//             {
//                 name: 'Саша2',
//                 money: 10000,
//                 people: [
//                     {
//                         name: 'Саша3',
//                         money: 500,
//                     }
//                 ]
//             }
//         ]
//    }]
//  }]
// };

// function countStolenMoney({ people, money }) {
//     if (people) {
//         let sum = 0;
//         for (let p of people) {
//             sum += countStolenMoney(p);
//         }
//         return money + sum;
//     } else {
//         return money;
//     }
// }

// console.log(countStolenMoney(person));

// селекторы
//const container = document.querySelector('.container')
//const section2 = document.querySelector('.section-2')

//console.log(container.lastChild.innerHTML);

//const body = document.body;

// const container1 = document.querySelector('.container')

// console.log(container1.matches('.active'));

// события
// document.addEventListener('keydown', (event) => {
//     console.log(event.key);
// })

// window.input.addEventListener('focus', function () {
//     this.style.borderWidth = '5px';
// })

// window.input.addEventListener('blur', function () {
//     this.style.borderWidth = '1px';
// })

// const onInput = function (event) {
//     if (this.value.length >= 10) {
//         this.style.borderColor = 'red';
//     } else {
//         this.style.borderColor = 'black';
//     }
// };
// window.input.addEventListener('input', onInput);

// setTimeout(() => {
//     window.input.removeEventListener('input', onInput);
// }, 6000)