// const fashionObject = {
//   men: {
//     pants: ["green", "blue"],
//     shirts: [],
//     socks: [],
//   },
//   women: {
//     pants: [],
//     shirts: [],
//     socks: [],
//   },
// };

// // console.log("typeof", typeof { object: "text" });
// // console.log("typeof", Array.isArray([]));
// // console.log("typeof", typeof "text");
// // console.log("typeof", typeof 1);

// function recursive(object, depth) {
//   console.log(object);
//   const objectKeys = Object.keys(object);

//   for (let key of objectKeys) {
//     const item = object[key];
//     if (typeof item == "object") {
//       recursive(item, ++depth);
//     } else {
//       console.log(depth, item);
//     }
//   }
// }

// recursive(fashionObject, 0);

// function rec(number) {
//   const x = number - 1;

//   console.log(x);
//   if (x == 0) {
//     console.log("stop");
//   } else {
//     rec(x);
//   }
// }
// rec(20);

// Create a recursive function that receives an initial value and divide it by 3,
// if the number is larger than 1 it will continue, and if it is smaller it will print the result

// function divider(number, depth) {
//   const result = number / 3;

//   console.log("depth", depth);
//   console.log("result", result);

//   if (result > 1) {
//     divider(result, ++depth);
//   }
// }

// divider(100, 0);

// const notArray1 = 10;
// const notArray2 = "string";
// const notArray3 = { key: "value" };
// const isArray = [1, 2, 3, 4];

// console.log(Array.isArray(notArray1));
// console.log(Array.isArray(notArray2));
// console.log(Array.isArray(notArray3));
// console.log(Array.isArray(isArray));
// console.log(typeof isArray);

// let tree = [
//   "item1",
//   "item2",
//   ["item3", "item4", ["item5", "item6", ["item7", "item8"]]],
// ];

// function treeRun(list) {
//   let isArray = Array.isArray(list);

//   if (isArray) {
//     for (let i = 0; i < tree.length; i++) {
//       treeRun(list[i]);
//     }
//   } else {
//     console.log(list);
//   }
// }

// treeRun(false);

// const newArray = [1, 2, 3, 4, 5, 6];

// newArray.forEach((item, index) => {
//   console.log(index, item);
// });

// const newArray2 = newArray.map((value, index) => {
//   return `${value}`;
// });

// console.log(newArray);
// console.log(newArray2);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//     // reject("Failed");
//   }, 4000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve("Success");
//     reject("Failed");
//   }, 4000);
// });

// Promise.allSettled([p1, p2]).then((results) => {
//   console.log("All promises are done", results);
// });

// Create a function that receives a variable with numeric value
// The function than creates a promise, which insides waits for the value of that variable in
// milliseconds to either reject or resolve the promise depending on if the number is larger than 500

// Call this function multiple times and wait for all of them to finish, print the status of each promise separately

// function myFunction(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 500) {
//         resolve("Success");
//       } else {
//         reject("Fail");
//       }
//     }, number);
//   });
// }

// const p1 = myFunction(2000);
// const p2 = myFunction(1500);
// const p3 = myFunction(1000);
// const p4 = myFunction(300);

// Promise.allSettled([p1, p2, p3, p4]).then((results) => {
//   console.log("results", results);
// });

// fetch("https://630f59da37925634188d7eb8.mockapi.io/form/list").then(
//   (result) => {
//     console.log(result);
//   }
// );

function submitForm(e) {
  e.preventDefault();
  console.log("Form is submited");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log("name", name);
  console.log("email", email);
}

window.onload = () => {
  console.log(document.getElementById("my-form"));
  document.getElementById("my-form").addEventListener("submit", submitForm);
};

// Create a similar form containing a name, email and password fields
// (password should be of type password)
// on submition of the form print the values of all the fields in the form
