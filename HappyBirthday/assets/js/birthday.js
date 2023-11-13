const imageUrl = [
	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];

let currentIndex = 0,
	headerBackground = document.getElementById('header-bg');
function changeImage() {
	headerBackground.style.transition = 'none';
	headerBackground.style.filter = 'grayscale(90%)';

	setTimeout(() => {
		headerBackground.style.transition = 'filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
		headerBackground.style.filter = 'none';
	}, 50);

	currentIndex = (currentIndex + 1) % imageUrl.length;
	headerBackground.style.backgroundImage = `url(${imageUrl[currentIndex]})`;
}

setInterval(changeImage, 2000);
