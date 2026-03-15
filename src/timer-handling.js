import { resetTimer, switchActiveToShort, switchActiveToFocus, switchActiveToLong } from "./index.js";
import timerEndAudio from './temp_timer_audio.mp3';
let totalTimeInSeconds = 0;
let isActive = false;
let timerInterval = 0;
const timerInputElements = document.querySelectorAll("#time");
export let activeTimerIndex = 0;
let startTime = null;
let startingSeconds = 0;
export const timerState = {
    activeTimerIndex: 0,
};
let timerOffFlag = false;

export function formatInput(event) {
    let totalTime = Number(event.target.value);
    const time = [0, 0, 0, 0, 0, 0];
    let index = time.length - 1;
    let remaining = totalTime;

    do {
        time[index] = remaining % 10;
        remaining = Math.floor(remaining / 10);
        index--;
    } while (remaining !== 0 && index >= 0);

    let hours = time[0] * 10 + time[1];
    let minutes = time[2] * 10 + time[3];
    let seconds = time[4] * 10 + time[5];
    let newSeconds = 0
    let newMinutes = 0
    let newHours = 0;
    console.log(hours, minutes, seconds)

    if (seconds > 60) {
        newSeconds = seconds - 60;
        newMinutes = minutes + 1;
        console.log(newMinutes)
    } else {
        newSeconds = seconds;
        newMinutes = minutes;
    }
    if (minutes > 60) {
        newMinutes = newMinutes - 60;
        console.log(newMinutes)
        newHours = hours + 1;
    } else {
        newMinutes = minutes;
        newHours = hours;
    }
    console.log(Math.floor((newMinutes / 10)).toString());
    console.log(newHours, newMinutes, newSeconds)
    const formattedTime = generateFormattedTime(newHours, newMinutes, newSeconds);
    event.target.value = formattedTime;
    totalTimeInSeconds = (newHours * 3600) + (newMinutes * 60) + newSeconds;
    // potential edge case where minutes causes hours to have some sort of wrapping situation
}

function generateFormattedTime(newHours, newMinutes, newSeconds) {
    return Math.floor((newHours / 10)).toString() + (newHours % 10).toString() + ":"
        + Math.floor((newMinutes / 10)).toString() + (newMinutes % 10).toString() + ":"
        + Math.floor((newSeconds / 10)).toString() + (newSeconds % 10).toString();
}
export function emptyTextBox(event) {
    event.target.value = "";
}

export function buttonHandler(event) {
    console.log("clicked");
    event.target.classList.toggle("fa-pause");
    event.target.classList.toggle("fa-play");
    event.target.classList.toggle('bg-green-500');
    
}



export function switchTimer() {
    console.log("switch");
    resetTimer();
    if (timerState.activeTimerIndex == 0) {
        switchActiveToShort();
    } else if (timerState.activeTimerIndex == 1) {
        switchActiveToLong();
    } else {
        switchActiveToFocus();
    }
}
export function runTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    totalTimeInSeconds = startingSeconds - elapsedTime
    if (!isActive || totalTimeInSeconds <= 0) {
        console.log(totalTimeInSeconds)
        timerToggle();
        if (timerOffFlag) {
            var audio = new Audio(timerEndAudio);
            audio.play();
            switchTimer();
            timerOffFlag = false;
        }
        return;
    }
    timerOffFlag = true;
    console.log("running");
    totalTimeInSeconds--;
    console.log(totalTimeInSeconds)
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.floor(totalTimeInSeconds % 60);
    timerInputElements[timerState.activeTimerIndex].value = generateFormattedTime(hours, minutes, seconds);

}

export function timerToggle() {
    console.log("toggle")
    isActive = !isActive;
    console.log(isActive)
    if (isActive) {
        startTime = Date.now();
        startingSeconds = totalTimeInSeconds;
        timerInterval = setInterval(runTimer, 1000);
    } else {
        console.log("timer interval: " + timerInterval);
        clearInterval(timerInterval);
        console.log("stopping")
    }
}

