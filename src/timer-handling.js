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

export function runTimer() {

}

export function buttonHandler(event) {
    console.log("clicked");
    event.target.classList.toggle("fa-pause");
    event.target.classList.toggle("fa-play");
    event.target.classList.toggle('bg-green-500');
    
}