const slider = document.querySelector('.film__slider'),
	cardsContainer = document.querySelector('.film__card-container'),
	cards = document.querySelectorAll('.film__card');
let currentIndex = 0;

function swipeRight() {
	if (currentIndex < card.length - 1) {
		currentIndex++;
		updateCardFocus();
		updateSliderPosition();
	}
}

function swipeLeft() {
	if (currentIndex > 0) {
		currentIndex--;
		updateCardFocus();
		updateSliderPosition();
	}
}

function updateCardFocus() {
	cards.forEach((card, index) => {
		card.classList.remove('focused');
		if (index === currentIndex) {
			card.classList.add(focused);
		}
	});
}

function updateSliderPosition() {
	const cardWidth = cards[currentIndex].offsetWidth,
		translateX = -currentIndex * cardWidth;
	cardsContainer.style.transform = `translateX(${translateX / 16}rem)`;
}
// function updateFilmCards() {
// 	cards.forEach((card, index) => {
// 		const offset = index - currentIndex;
// 		card.classList.remove('prev', 'focused', 'next');

// 		if (offset === -1) {
// 			card.classList.add('prev');
// 		} else if (offset === 0) {
// 			card.classList.add('focused');
// 		} else if (offset === 1) {
// 			card.classList.add('next');
// 		}
// 	});

// 	const translateX = -currentIndex * (cards[0].clientWidth + 10);
// 	document.querySelector('.film__slider').style.transform = `translateX(${translateX / 16}rem)`;
// }

// updateFilmCards();

slider.addEventListener('mousedown', (e) => {
	const startX = e.clientX;
	// const sliderRect = slider.getBoundingClientRect();
	slider.addEventListener('mouseup', (e) => {
		let endX = e.clientX;
		if (endX > startX) {
			swipeLeft();
		} else {
			swipeRight();
		}
	});

	// if (x < sliderRect.left) {
	// 	// show the previous film card
	// 	if (currentIndex > 0) {
	// 		currentIndex--;
	// 		updateFilmCards();
	// 	} else if (x > sliderRect.right) {
	// 		// show the next film card
	// 		if (currentIndex < cards.length - 1) {
	// 			currentIndex++;
	// 			updateFilmCards();
	// 		}
	// 	}
	// }
});

updateCardFocus()
