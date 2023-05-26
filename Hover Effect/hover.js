document.getElementById("cards").onmousemove = a => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = a.clientX - rect.left,
            y = a.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}em`);
        card.style.setProperty("--mouse-y", `${y}em`);
    }
}

/*
    Cannot find the radial lighting on the cards
*/
