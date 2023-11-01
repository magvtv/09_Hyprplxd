const carousel = document.querySelector('.carousel');

let currentIndex = 0;

window.addEventListener('wheel', (e) => {
	if (e.deltaY > 0) {
		// Scrolled down
		currentIndex++;
	} else {
		// Scrolled up
		currentIndex--;
	}

	// Update the carousel's position
	const translateX = -currentIndex * (100 + 10); // Adjust as needed
	carousel.style.transform = `translateX(${translateX}%)`;
});
