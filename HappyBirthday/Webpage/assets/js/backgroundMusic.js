const music = document.getElementById('backgroundMusic');


document.addEventListener('DOMContentLoaded', () => {
    let volume = 0.05
    const fadeInterval = setInterval(() => {
        if(volume < 1.0) {
            volume += 0.05
            music.volume = volume
            music.play()
        } else {
            clearInterval(fadeInterval)
        }
    }, 3000);
});
