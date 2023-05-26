const left = document.getElementById("lft");

const handleOnMove = l => {
    const position = l.clientX / window.innerWidth * 100;
    left.style.width = `${position}%`
}

document.onmousemove = x => handleOnMove(x);
document.ontouchmove = x = handleOnMove(x.touches[0]);