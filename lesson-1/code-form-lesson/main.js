/* Переменные */

// let name = "Max" // объявление и присваивание значения

// let myName; // объявление
// myName = "Max" // присваивание значения
// let myAge = 27

// let myName = "Max" // объявление и присваивание значения
// console.log(myName)
// myName = "Dima" // переприсваивание
// console.log(myName)

// const pi = 3.14 // константа
// console.log(pi)
// pi = 3.15 // ! константу нельзя переприсвоить

// let break = "dddd" // для названия нельзя испоьзовать зарезервированные символы и ключевые слова

// let myName, myAge = 22, myColor = "green" //оператор запятая
// myName = "Dima"
// console.log(typeof(myColor)) //typeof

/* Типы данных */
// Number - числовой
// let length = 20
// console.log(typeof(length))
// length = 20.5
// console.log(typeof(length))
// let myBigInt = 11n
// console.log(myBigInt)

// String - строка
// let myString = 'string1' // одинарные кавычки
// myString = "string" // двойные кавычки
// myString = `"'string1` // обратные кавычки
// console.log(myString)

// Boolean - Булево
// let myBoll = true
// myBoll = false
// myString = false

// Undefined
// let someVar // если явно не указать тип то по умолчанию undefined
// console.log(typeof(undefined))

// Object - Объект
// let myObj = {} // пустой объект
// console.log(typeof(myObj))
// let person = { // фигурные скобки - объект
//   name: "Max", // name - ключ, "Max" - значение
//   age: 20,
// }
// console.log(person.name) // обращение к полям объекта с помощью оператора точка .
// person.name = "Dima" // переприсваивание значения
// console.log(person.name)
// console.log(typeof(person))

// Object - Массив
// let myArray = [ - квадратные скобки - массив
//   "Max", // подразумеваем index = 0 - ключ, "Max" - значение (в JS индексы начинаются с 0)
//   20, // подразумеваем index = 1 - ключ, 20 - значение
//   "green"
// ]
// console.log(typeof(myArray)) // object
// console.log(myArray)
// console.log(myArray[2]) // обращение к третьему элементу по индексу 
// myArray[0] = "Dima" // переприсваивание значения элементу с индексом 0
// console.log(myArray[0]) // обращение к первому элементу по индексу 

// let person = {
//   name: "Max",
//   age: 20,
// }
// console.log(person.age)
// person["age"] = 22 // обращение к объекту как к элементу массива
// console.log(person["age"])

// Null
// let someObj = null // используется для значения по умолчанию для объектов
// console.log(typeof null)

// Function - функция
// console.log(myFunction) // так нельзя - обращене к переменной до объявления
// let myFunction = function() {}
// console.log(typeof myFunction)

// Взаимодействие с пользователем
// let salaryByMonth = prompt("Какая у тебя ЗП в месяц?") // возвращает строку - ответ пользователя
// alert("Зп за год: " + salaryByMonth*12) // просто выводит инфомацию, ничего не возвращает
// let isCorrectResult = confirm("Программа отработала верно?") //вовращает true/false - ответ пользователя
// console.log(isCorrectResult)

// Математические операции
// alert(10 - 4)
// alert(10 + 4)
// alert("string" + 4)
// alert(10*4)
// alert(10/4)
//alert(10%4)
// alert(10**4)
// let var1 = 1
// let var2 = 20
// //alert(var1 - var2)
// alert(-var2)
// var index = 0
// console.log(index)
// ++index
// ++index
// --index
// index--
// index = 10
// index += index
// index -= index + 1
// console.log(index)

//console.log(Math.sqrt(25))
//console.log(Math.PI)

//console.log("str"*10)
//console.log(1 + -2*4)
//console.log((1 + 2)*4)
