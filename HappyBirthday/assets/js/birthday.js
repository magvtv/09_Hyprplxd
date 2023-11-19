// const imageUrl = [
// 	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// 	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// 	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// 	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// ];

// let currentIndex = 0,
// 	headerBackground = document.getElementById('header-bg');
// function changeImage() {
// 	headerBackground.style.transition = 'none';
// 	headerBackground.style.filter = 'grayscale(90%)';

// 	setTimeout(() => {
// 		headerBackground.style.transition = 'filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
// 		headerBackground.style.filter = 'none';
// 	}, 50);

// 	currentIndex = (currentIndex + 1) % imageUrl.length;
// 	headerBackground.style.backgroundImage = `url(${imageUrl[currentIndex]})`;
// }

// setInterval(changeImage, 2000);

const preloader = document.getElementById('preloader'),
	music = document.getElementById('backgroundMusic');
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(function () {
		preloader.style.opacity = '0';
		setTimeout(function () {
			preloader.style.display = 'none';
			music.play();
			music.volume = 1.0
			// fadeInMusic();
			addLongPressListener();
		}, 500);
	}, 2000);
});

function fadeInMusic() {
	let volume = 0.1;
	const fadeInterval = setInterval(function () {
		if (volume < 1.0) {
			volume += 0.1;
			music.volume = Math.min(volume, 1.0);
		} else {
			clearInterval(fadeInterval);
		}
	}, 500);
}

function addLongPressListener() {
	let touchsStart, touchEnd;
	document.addEventListener('touchstart', (event) => {
		touchStart = new Date().getTime();
	});

	document.addEventListener('touchend', (event) => {
		touchEnd = new Date().getTime();
		const touchDuration = touchEnd - touchsStart;

		if (touchDuration > 500) {
			if (music.paused) {
				music.play();
			} else {
				music.pause();
			}
		}
	});
}
