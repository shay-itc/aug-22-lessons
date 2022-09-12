// function formSubmit(e) {
//   e.preventDefault();
//   console.log("formSubmit");

//   const nameValue = document.getElementById("name").value;
//   //   const emailValue = document.getElementById("email").value;
//   const passwordValue = document.getElementById("password").value;
//   const selectValue = document.getElementById("select").value;

//   const submitionObject = {
//     name: nameValue,
//     password: passwordValue,
//     option: selectValue,
//   };

//   console.log(submitionObject);

//   sendPOSTRequest(
//     "https://630f59da37925634188d7eb8.mockapi.io/form/new",
//     submitionObject
//   );
// }

// // Add a password field and select field to you form and submit it to the API
// // Log your response
// // {
// //     name,
// //     password,
// //     option
// // }

// function sendPOSTRequest(url, body) {
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => {
//       response.json().then((result) => {
//         console.log(result);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// function setHTTPRequest(url) {
//   const listCointainer = document.getElementById("my-list");
//   fetch(url)
//     .then((response) => {
//       response.json().then((result) => {
//         result.forEach((item) => {
//           addItem(item, listCointainer);
//         });

//         // for (let item of result) {
//         //   console.log(item.name);
//         // }
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// function addItem(item, parentContainer) {
//   const elem = document.createElement("div");
//   elem.innerHTML = item.email;

//   parentContainer.append(elem);
// }

// function init() {
//   const myForm = document.getElementById("my-form");

//   myForm.addEventListener("submit", formSubmit);

//     setHTTPRequest("https://630f59da37925634188d7eb8.mockapi.io/form/list");
// }

// window.onload = () => {
//   init();
// };

// // send a request to https://630f59da37925634188d7eb8.mockapi.io/form/list and print
// // the name inside each item in the response array

const now = new Date("05/01/2022");
console.log(now);
console.log("Currenct Hour", now.getHours());
console.log("Currenct Minute", now.getMinutes());
console.log("Currenct Day", now.getDay());
console.log("Currenct Month", now.getMonth());
console.log("Currenct Time", now.getTime());

console.log(new Date().getDay() - now.getDate());
