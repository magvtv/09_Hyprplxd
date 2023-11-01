const slider = document.querySelector('.film__slider');
const cards = document.querySelectorAll('.film__card');
let currentIndex = 0;

slider.addEventListener('mousemove', (e) => {
	const x = e.clientX;
	const sliderRect = slider.getBoundingClientRect();

	if (x < sliderRect.left) {
		// show the previous film card
		if (currentIndex > 0) {
			currentIndex--;
			updateFilmCards();
		} else if (x > sliderRect.right) {
			// show the next film card
			if (currentIndex < cards.length - 1) {
				currentIndex++;
				updateFilmCards();
			}
		}
	}
});

function updateFilmCards() {
	cards.forEach((card, index) => {
		const offset = index - currentIndex;
		card.classList.remove('prev', 'focused', 'next');

		if (offset === -1) {
			card.classList.add('prev');
		} else if (offset === 0) {
			card.classList.add('focused');
		} else if (offset === 1) {
			card.classList.add('next');
		}
	});

	const translateX = -currentIndex * (cards[0].clientWidth + 10);
	document.querySelector('.film__slider').style.transform = `translateX(${translateX / 16}rem)`;
}

updateFilmCards();

// function nextFilmCard() {
// 	if (currentIndex < card.length - 1) {
// 		currentIndex++;
// 		updateFilmCards();
// 	}
// }

// function prevFilmCard() {
// 	if (currentIndex < 0) {
// 		currentIndex--;
// 		updateFilmCards();
// 	}
// }
