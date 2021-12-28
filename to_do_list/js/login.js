const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login__input");
const mainContent = document.querySelector(".main-content");
const greeting = document.querySelector(".main-content__greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("userName", loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  mainContent.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello, ${localStorage.getItem("userName")}!`;
}

loginForm.addEventListener("submit", loginSubmit);
