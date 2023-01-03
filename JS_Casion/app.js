const casinoForm = document.getElementById("casino-form");
const NUM = document.querySelectorAll("input");
const Msg = document.getElementById("result-meg");
const Win_msg = document.querySelector(".msg span");

const HIDDEN_CLASSNAME = "hidden";
const GUSESS_KEY = "guessnum";

handleRoulletBtn = (event) => {
  event.preventDefault();
  const EnterNum = NUM[0].valueAsNumber;
  const GuessNum = NUM[1].valueAsNumber;
  localStorage.setItem(GUSESS_KEY, GuessNum);
  const range = Math.floor(Math.random() * (EnterNum + 1) + 0);

  if (GuessNum === range) {
    Win_msg.classList.remove(HIDDEN_CLASSNAME);
    Msg.innerText = `You choose : ${GuessNum}, the machine choose : ${range}`;
    Win_msg.innerText = "You Win!";
  } else {
    Win_msg.classList.remove(HIDDEN_CLASSNAME);
    Msg.innerText = `You choose : ${GuessNum}, the machine choose : ${range}`;
    Win_msg.innerText = "You Lost!";
  }
};

casinoForm.addEventListener("submit", handleRoulletBtn);
