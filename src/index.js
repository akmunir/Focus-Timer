import './styles.css';
import { timerToggle } from './timer-handling.js';
import { formatInput, emptyTextBox, runTimer, buttonHandler } from "./timer-handling.js";



const shortBtn = document.querySelector(".short-btn");
const focusBtn = document.querySelector(".focus-btn");
const timerEl = document.querySelector("#timer");
const currentTime = timerEl.textContent.toString();
const timeInput = document.querySelector("#time");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const skipButton = document.querySelector("#skip");
const focusTimer = document.querySelector("#focus-timer");
const shortBreakTimer = document.querySelector("#short-break-timer");
const longBreakTimer = document.querySelector("#long-break-timer");
const longBtn = document.querySelector(".long-btn");
const startIcon = startButton.querySelector("i");


//console.log(timeInput.value);
let hours = 0;
let skipButtonInterval = 1;
//addEventListener("focusout", formatInput);


addEventListener("focusout", formatInput);
addEventListener("focusin", emptyTextBox)

startButton.addEventListener("click", () => {
    timerToggle();
    startButton.classList.toggle("play");
    startIcon.classList.toggle("fa-play");
    startIcon.classList.toggle("fa-pause");
    
});

resetButton.addEventListener("click", () => {
    timerToggle();
    timeInput.value = "";
   startIcon.classList.add("fa-play");
   startIcon.classList.remove("fa-pause");

})


focusBtn.addEventListener("click", () => {
    focusTimer.classList.remove("hidden");
    focusBtn.classList.add("active");
    shortBreakTimer.classList.add("hidden");
    shortBtn.classList.remove("active");
    longBreakTimer.classList.add("hidden");
    longBtn.classList.remove("active");
})

shortBtn.addEventListener("click", () => {
    shortBreakTimer.classList.remove("hidden");
    shortBtn.classList.add("active");
    focusTimer.classList.add("hidden");
    focusBtn.classList.remove("active");
    longBreakTimer.classList.add("hidden");
    longBtn.classList.remove("active");
})

longBtn.addEventListener("click", () => {
    longBreakTimer.classList.remove("hidden");
    longBtn.classList.add("active");
    shortBreakTimer.classList.add("hidden");
    shortBtn.classList.remove("active");
    focusTimer.classList.add("hidden");
    focusBtn.classList.remove("active");
})

    


