/*


*/

async function getData(url) {
  const containerRef = document.getElementById("comments-container");

  containerRef.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    console.log("response", response);
    const result = await response.json();
    console.log("result", result);

    containerRef.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      const object = result[i];
      addComment(containerRef, object);
    }

    const comments = document.getElementsByClassName("comment-box");

    for (let comment of comments) {
      comment.addEventListener("click", (event) => {
        event.preventDefault();
        event.currentTarget.children[2].style.display = "block";
      });
    }

    console.log("End of block");
  } catch (err) {
    console.log("err", err);
  }

  // getElementsByClassName

  // Traform the getData function to an async and use await instead of then
  // Also iterate through the array and create a comment element for each item

  console.log("After catch");
  //   response.json()
  // .then((response) => {
  //   response.json().then((result) => {
  //     const containerRef = document.getElementById("comments-container");

  //     addComment(containerRef, result[0]);
  //   });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

window.onload = () => {
  getData("https://jsonplaceholder.typicode.com/comments");

  //   setTimeout(() => {
  //     addComment(containerRef, {
  //       title: "My Title",
  //       email: "My Email",
  //     });
  //   }, 5000);
};

// Add the getData function that receives a url, once it receives the url it adds a comment
// box using the first element in the respnse array

function addComment(container, comment) {
  //   const commentBox = document.createElement("div");
  //   commentBox.classList.add("comment-box");

  //   commentBox.

  //   const title = document.createElement("div");
  //   title.classList.add("title");
  //   title.innerHTML = comment.title;

  //   const email = document.createElement("div");
  //   email.classList.add("email");
  //   email.innerHTML = comment.email;

  //   commentBox.append(title);
  //   commentBox.append(email);

  container.innerHTML += `
    <div class="comment-box">
        <div class="title">${comment.name}</div>
        <div class="email">${comment.email}</div>
        <div class="description">${comment.body}</div>
    </div>
  `;
}

// Create addComment function, pass on an object ontaining the data you want to show
