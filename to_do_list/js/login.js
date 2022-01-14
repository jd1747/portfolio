const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login__input");
const greeting = document.querySelector(".main-content__greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  userGreetings(username);
}

function userGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  userGreetings(savedUsername);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}
