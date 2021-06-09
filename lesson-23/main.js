// const simpleFunc = (a, b) => a + b;

// const decorator = (a, b) => {
//   const simpleFuncResult = simpleFunc(a, b);
//   return (c) => {
//     return simpleFuncResult + c;
//   };
// };

// console.log(decorator(2, 4)(4));

// function func(names) {
//   return `Hello ${names.name1}, from ${names.name2} and ${names.name3}`;
// }

// console.log(func({ name1: "Max", name2: "Nat", name3: "Yar" }));

// function func(start, end, step, cb1) {
//   for (let i = start; i < end; i += step) {
//     if (i % 2 === 0) {
//       cb1(i);
//     }
//   }
// }

// func(3, 15, 1, (num) => {
//   console.log((num + 11 - 20)**2);
// });

// let count = 0;
// const func = (numberOfcalls) => {
//   count++;
//   if (count === numberOfcalls) {
//     return;
//   } else {
//     func(numberOfcalls);
//   }
// };
// func(10);

// console.log(count/10);

// class User {
//   firtstName = "root";
//   _age = 0;
//   constructor(firtstName, lastName) {
//     this.firtstName = firtstName;
//     this.lastName = lastName;
//   }
//   get age() {
//     return this._age * 12;
//   }
//   set age(val) {
//     this._age = val / 12;
//   }
//   sayHello() {
//     console.log(`Hello ${this.firtstName} ${this.lastName}`);
//   }
// }

// const user = new User("m", "m");
// user.age = 200;
// console.log(user.age);

// function User2(firtstName, lastName) {
//   this.firtstName = firtstName;
//   this.lastName = lastName;
//   this.sayHello = function () {
//     console.log(`Hello ${this.firtstName} ${this.lastName}`);
//   };
// }
// const user2 = new User2("Nat", "nat");

// user2.sayHello();

class Comp {
  constructor(select, cb) {
    select.addEventListener("change", (e) => {
      this._value = e.target.value;
      cb(this._value);
    });
  }
  get selectedValue() {
    return this._value;
  }
}

new Comp(document.select, (value) => {
  console.log(value);
});
