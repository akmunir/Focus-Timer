import './styles.css';
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

//console.log(timeInput.value);
let hours = 0;
const timerInterval = setInterval(runTimer, 1000);
//addEventListener("focusout", formatInput);


addEventListener("focusout", formatInput);
addEventListener("focusin", emptyTextBox)

startButton.addEventListener("click", () => {
    startButton.classList.toggle("play");
    const startIcon = startButton.querySelector("i");
    startIcon.classList.toggle("fa-play");
    startIcon.classList.toggle("fa-pause");
    
});

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

    





// function formatInput(event) {
//     const totalTime = Number(event.target.value);
//     console.log(totalTime)
//     let minutes = Math.floor(totalTime / 60);
//     let hours = 0;
//     if (minutes > 60) {
//         hours = Math.floor(minutes / 60);
//         minutes = minutes % 60;
//     } else {
//         hours = 0;
//     }
//     const seconds = totalTime % 60;
//     console.log(minutes, seconds, totalTime)
//     if (totalTime > 0) {
//         if (minutes == 0) {
//             event.target.value = seconds;
//         } else {
//             event.target.value = minutes + ":" + seconds;
//         }
//     }
    
// }
