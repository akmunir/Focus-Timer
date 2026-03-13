import './styles.css';
import { timerToggle } from './timer-handling.js';
import { formatInput, emptyTextBox, runTimer, buttonHandler, switchTimer, timerState } from "./timer-handling.js";



const shortBtn = document.querySelector(".short-btn");
const focusBtn = document.querySelector(".focus-btn");
const timerElements = document.querySelectorAll("#timer");
const timerInputElements = document.querySelectorAll("#time");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const skipButton = document.querySelector("#skip");
const focusTimer = document.querySelector("#focus-timer");
const shortBreakTimer = document.querySelector("#short-break-timer");
const longBreakTimer = document.querySelector("#long-break-timer");
const longBtn = document.querySelector(".long-btn");
const startIcon = startButton.querySelector("i");


//console.log(timerInputElements.value);
let hours = 0;
//addEventListener("focusout", formatInput);
export function switchActiveToFocus() {
    focusTimer.classList.remove("hidden");
    focusBtn.classList.add("active");
    shortBreakTimer.classList.add("hidden");
    shortBtn.classList.remove("active");
    longBreakTimer.classList.add("hidden");
    longBtn.classList.remove("active");
    timerState.activeTimerIndex  = 0;
}

export function switchActiveToShort() {
    shortBreakTimer.classList.remove("hidden");
    shortBtn.classList.add("active");
    focusTimer.classList.add("hidden");
    focusBtn.classList.remove("active");
    longBreakTimer.classList.add("hidden");
    longBtn.classList.remove("active");
    timerState.activeTimerIndex = 1;
}

export function switchActiveToLong() {
    longBreakTimer.classList.remove("hidden");
    longBtn.classList.add("active");
    shortBreakTimer.classList.add("hidden");
    shortBtn.classList.remove("active");
    focusTimer.classList.add("hidden");
    focusBtn.classList.remove("active");
    timerState.activeTimerIndex = 2;
}

export function resetTimer() {
    if (timerInputElements[timerState.activeTimerIndex].value == "") return;
    timerToggle();
    timerInputElements[timerState.activeTimerIndex].value = "";
    startIcon.classList.add("fa-play");
    startIcon.classList.remove("fa-pause");
}

addEventListener("focusout", formatInput);
addEventListener("focusin", emptyTextBox)

startButton.addEventListener("click", () => {
    if (timerInputElements[timerState.activeTimerIndex].value == "") return;
    timerToggle();
    startButton.classList.toggle("play");
    startIcon.classList.toggle("fa-play");
    startIcon.classList.toggle("fa-pause");
    
});


resetButton.addEventListener("click", resetTimer);

skipButton.addEventListener("click", switchTimer);

focusBtn.addEventListener("click", switchActiveToFocus);

shortBtn.addEventListener("click", switchActiveToShort);

longBtn.addEventListener("click", switchActiveToLong);

    


