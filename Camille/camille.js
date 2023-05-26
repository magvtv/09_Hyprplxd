const cursorTrack = document.getElementById('image-track')
const value = cursorTrack.dataset.cursorDownat;


window.onmousedown = cursor => {
    value =  cursor.clientX;
}

window.onmousemove = cursor => {

    if (value === "0") return;

    const cursorChange = (parseFloat(value) - cursor.clientX), maxValue = (window.innerWidth / 2), percent = (cursorChange / maxValue) * 100;

    cursorTrack.style.transform = `translate(${percent}%, -30%)`;

}

window.onmouseup = () => {
    value = "0";
}