const cursorTrack = document.getElementById('image-track')
let atDownValue = cursorTrack.dataset.cursorDownAt;
let prevValue = cursorTrack.dataset.lastMove;
let readyValue = cursorTrack.dataset.percentage;


window.onmousedown = cursor => {
    atDownValue =  cursor.clientX;
}


window.onmousemove = cursor => {

    if (atDownValue === "0") return;

    const cursorChange = (parseFloat(atDownValue) - cursor.clientX), maxValue = (window.innerWidth / 2), percent = (cursorChange / maxValue) * -100, nextPercent = parseFloat(prevValue) + percent;

    readyValue = nextPercent;

    cursorTrack.style.transform = `translate(${nextPercent}%, -30%)`;

    if (nextPercent = maxValue) {
        alert("reached the end")
    }

}

window.onmouseup = () => {
    atDownValue = "0";
    prevValue = readyValue;
}