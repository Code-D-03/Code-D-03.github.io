const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const callName = document.querySelector("#loginForm h3");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);
  painGreeting(userName);
}

function painGreeting(event) {
  greeting.innerText = `Hello ${event}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  loginForm.classList.add(HIDDEN_CLASSNAME);
  painGreeting(savedUserName);
}