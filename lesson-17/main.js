// function asyncFunction(number, cb) {
//   setTimeout(() => {
//     if (typeof number === 'string') {
//       cb(null, new Error("Нельзя указывать строку, ожидается число"));
//     } else {
//       cb(number / 2);
//     }
//   }, 2000);
// }

// asyncFunction("das", (result, err) => {
//   if (!result) {
//     throw err;
//   } else {
//     asyncFunction(result, result => {
//       asyncFunction(result, result => {
//         console.log(result);
//       })
//     })
//   }
// });


// function asyncFunction(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(typeof number === 'string') {
//             reject(new Error('First argument cannot be string'))
//         } else {
//             resolve(number / 2);
//         }
//         }, 1000);
//     })
// }

// asyncFunction(8)
//     .then((response) => {
//         console.log(response);
//         asyncFunction(response)
//             .then((response) => {
//                 console.log(response);
//                 asyncFunction(response)
//                     .then((response) => {
//                         console.log(response);
//                     })
//             })
//     })

// asyncFunction(8)
//     .then((resp) => {
//         return asyncFunction(resp);
//     })
//     .then((resp) => {
//         return asyncFunction(resp);
//     })
//     .then((resp) => {
//         console.log(resp);
//     })