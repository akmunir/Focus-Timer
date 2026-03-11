import './styles.css';

const timerEl = document.querySelector("#timer");
const currentTime = timerEl.textContent.toString();
const timeInput = document.querySelector("#time");
//console.log(timeInput.value);
let hours = 0;
const timerInterval = setInterval(runTimer, 1000);
//addEventListener("focusout", formatInput);
addEventListener("focusout", formatInput);
addEventListener("focusin", emptyTextBox)

function formatInput(event) {
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
    }
    if (minutes > 60) {
        newMinutes = newMinutes - 60;
        console.log(newMinutes)
        newHours = hours + 1;
    }
    console.log(Math.floor((newMinutes / 10)).toString());
    console.log(newHours, newMinutes, newSeconds)
    const formattedTime = Math.floor((newHours / 10)).toString() + (newHours % 10).toString() + ":"
        + Math.floor((newMinutes / 10)).toString() + (newMinutes % 10).toString() + ":"
        + Math.floor((newSeconds / 10)).toString() + (newSeconds % 10).toString();
    event.target.value = formattedTime;
    // potential edge case where minutes causes hours to have some sort of wrapping situation
}

function emptyTextBox(event) {
    event.target.value = "";
}

function runTimer() {

}
    





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
