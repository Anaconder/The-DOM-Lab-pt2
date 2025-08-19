// 1.) grab html element from dom
const welcomeBtn = document.getElementById("welcomeBtn");
let body = document.querySelector("body");
console.log(body);

// 2.) create handler function
function handleGreet() {
  for (let i = 0; i < 3; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("id", `btn${i + 1}`);
    btn.textContent = `Button ${i + 1}`;
    body.appendChild(btn);
  }
}

// 3.) Bind function to dom element for specific event;
welcomeBtn.addEventListener("click", handleGreet);

// JS for Todo list Example

// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// Handler Function
function handleComment() {
  let comment = cInput.value;

  const listItem = document.createElement("li");
  listItem.textContent = comment;

  cList.appendChild(listItem);

  cInput.value = "";

  cInput.focus();
}

// Us binding funciton with event/element
cBtn.addEventListener("click", handleComment);