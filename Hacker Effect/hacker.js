const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = (event) => {   
    let repeat = -1;
    const loop = setInterval(() => {
        let letterNumber = Math.floor(Math.random() * 26);
        let word = event.target.innerText;
        word.split("").map((letter, index) => {
            if (index <= repeat) {
                letter = event.target.dataset.value[index]
                return letter;
            }
            return caps[letterNumber];
        }            
        ).join("");
        let wordLength = event.target.dataset.value.length;
        if (repeat >= wordLength) {
            clearInterval(loop); 
        }
        repeat += 8/11; 
    }, 100);
}



