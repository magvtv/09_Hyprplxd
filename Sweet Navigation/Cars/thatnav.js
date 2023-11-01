const nav = document.getElementById("nav");
const a = nav.getElementsByTagName("a");
for (const link of a) {
    link.onmousemove = m => {
        const rect = link.getBoundingClientRect(), img = link.querySelector("img");
        img.style.left = `${e.ClientX - rect.left}px`;
        img.style.top = `${e.ClientY - rect.top}px`;
    }
}

window.onmousemove = m => {
    const percent = e.clientY / window.innerHeight, y = percent * nav.offsetHeight * -1;

    nav.animate({
        transform: `translateY(${y}px)`
    },{
        fill: "forwards",
        duration: 4000
    })
}