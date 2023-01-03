const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

handleLoginBtnSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

paintGreetings = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginBtnSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
