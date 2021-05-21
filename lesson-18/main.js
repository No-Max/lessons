// async function getCarById(id) {
//   return fetch(`https://cars-server.herokuapp.com/cars/${id}`).then(
//     (response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         return response.text().then((err) => {
//           throw new Error(err);
//         });
//       }
//     }
//   );
// }

// getCarById(1)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     alert(error.message);
//   });

// const arrIds = [1, 3, 0];

// async function someFunc() {
//   let cars = await Promise.all(
//     arrIds.map((id) => {
//       return getCarById(id);
//     })
//   );
//   cars = cars.map((car) => {
//     return car.brand;
//   });
//   return cars;
// }

// someFunc()
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
