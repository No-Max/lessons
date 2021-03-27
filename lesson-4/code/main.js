// домашка 
//const addCorrectEnding = (num,) => {
//     const module10 = num % 10;
//     const module100 = num % 100
//     if (module100 > 10 && module100 < 20) {
//         return 'Максимов';
//     } else {
//         if (module10 === 1) {
//             return 'Максим';
//         } else if (module10 > 1 && module10 < 5) {
//             return 'Максима';
//         } else {
//             return 'Максимов';
//         }
//     }
// };

// for (let i = 0; i < 1000; i++) {
//     console.log(i, addCorrectEnding(i))
// }

// коллбэк
// const func = (cb) => {
//     const text = '5th iteration';
//     for (let i = 0; i < 10; i++) {
//         if (i === 5) {
//             cb(text);
//         }
//     }
// }

// func(function (text) {
//     console.log(text)
// })

// самовызывающаяся функция
// (function () {
//     console.log('sssss')
// })()

// рекурсия
// const count = function (from) {
//     from--
//     if (from === 0) {
//         return
//     }
//     console.log(from)
//     count(from)
// }

// count(100)

// объекты - названием свойства может быть любым
// let person = {
//     name: 'Max',
//     color: 'Blue',
//     num: 10,
//     for: 'dddd',
//     'max 1]': 'max',
//     '+375': 'belarus'
// };

// delete person.name; // удаление свойства
// person.name = 'Dima'; // переприсваивание значение свойству
// delete person['color']; // удаление с обращаением к свойству через квадратные скобки

// person['max 1'] = 'hello';
// console.log(person);

// person = null; // ошибка - нельзя переприсвоить значение у константы

// const color = 'blue'

// let person = {
//     name: 'Max',
//     color: color,
// };

// создание однотипных свойств
// const createPerson = (firstName, age, color) => {
//     return {
//         firstName,
//         age,
//         color,
//     }
// }

// console.log(createPerson('Max', 27, 'gereen'))
// const personDima = createPerson('Dima', 13, 'pink')
// personDima.name = 'Dzimitry 4'
// console.log(personDima)

//отличие объектов от примитивов
// const name1 = 'Max';
// let name1Copy = name1;

// name1Copy = 'Dima';
// console.log(name1)

// let person = {
//     name: 'Max',
//     age: 27,
// };

// let personCopy = person;

// person.name = 'Dima';
// personCopy.age = 17;

// console.log(personCopy);
// console.log(person);

// сравнение объектов
// let obj1 = {
//     name: 'Max',
// };

// let obj2 = {
//     name: 'Max',
// };

// console.log(obj1 == obj2); // === и == работают одинаково при сравнении объектов

// оператор in
// let person = {
//     name: 'Max',
//     age: 27,
//     ddddd: undefined,
// };

// console.log('ddddd' in person);
// console.log(Boolean(person.ddddd));

// переборка свойств объекта
// for (let propertyName in person) {
//     if (propertyName === 'name') {
//         person[propertyName] = null;
//     }
//     if (propertyName === 'age') {
//         person[propertyName] = 0;
//     }
//     // console.log(propertyName, person[propertyName]);
// }
// console.log(person);

// объединение свойств - создание клона
// let person = {
//     name: 'Max',
//     age: 27,
//     color: 'Red',
// };

// let personCopy = {
//     color: 'green',
// };

// Object.assign(personCopy, person, { color: 'Blue' })

// person.name = 'Dima'

// console.log(personCopy);
// console.log(person);

// глубокое клонирование
// const city = {
//     name: "Ленинград",
//     population: 5384342,
//     coordinates: {
//         latitude: 59.93,
//         longitude: 30.36
//     }
// };

// const cityClone = Object.assign({}, city, { name: "Санкт-Петербург" });
// cityClone.coordinates.latitude = 60.93

// const cloneDeep = (obj) => {
//     const newObj = {}; // объявляем новый пустой объект
//     for (let key in obj) { // перебираем первый уровень свойств
//         if (typeof obj[key] === 'object') { // в этом условии была ошибка, было newObj[key] вместо obj[key]
//             newObj[key] = {}; // если значение является объектом, то присваиваем ему пустой объект 
//             for (let objKey in obj[key]) { // и перебираем свойства внутреннего объекта
//                 newObj[key][objKey] = obj[key][objKey]; // создаем свойство у нового, внутреннего объекта и присваиваем значение
//             }
//         } else {
//             newObj[key] = obj[key]; // создаем свойство на первом уровне и присваиваем ему значение
//         }
//     }
//     return newObj;
// }

// let cityClone = cloneDeep(city);
// cityClone.coordinates.latitude = 0;
// console.log(city.coordinates);
// console.log(cityClone.coordinates);