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

    Math.max(Math.min(nextPercent, 0), -100)

    readyValue = nextPercent;


    cursorTrack.animate({
        transform: `translate(${nextPercent}%, -50%)`}, {
        duration: 1500, fill: "forwards"
    });
}

for (const photo of cursorTrack.getElementsByClassName("photo")) {
    // photo.style.objectPosition = `${nextPercent + 100} 50%`
    photo.animate({
        objectPosition: `${100 + nextPercent}% center`
    }, {
    duration: 1500, fill: "forwards"     
    });
} 

window.onmouseup = () => {
    atDownValue = "0";
    prevValue = readyValue;
}