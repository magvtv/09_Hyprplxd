let progress = 50;
let startX = 0;
let isDown = false;
const speedWheel = 0.02,
	speedDrag = -0.1;

const $items = document.querySelectorAll('.carousel__item'),
	$cursor = document.querySelectorAll('.cursor');

const getZindex = (array, index) =>
	array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

const displayItems = (item, index, active) => {
	const zIndex = getZindex([...$items], active)[index];
	item.style.setProperty('--z-index', zIndex);
	item.style.setProperty('--active', (index - active) / $items.length);
};

const animate = () => {
	progress = Math.max(0, Math.min(progress, 100));
	const active = Math.floor((progress / 100) * ($items.length - 1));
	$items.forEach((item, index) => displayItems(item, index, active));
};

animate();

$items.forEach((item, i) =>
	item.addEventListener('click', () => {
		progress = (i / $items.length) * 100 + 10;
		animate();
	})
);

const handleWheel = (e) => {
	progress += e.deltaY * speedWheel;
	animate();
};

const handleMouseMove = (e) => {
	if (e.type === 'mousemove') {
		$cursor.forEach(($cursor) => ($cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`));
	}
	if (!isDown) return;
	const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
	progress += (x - startX) * speedDrag;
	startX = x;
	animate();
};

const handleMouseDown = (e) => {
	isDown = true;
	startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
};

const handleMouseUp = () => {
	isDown = false;
};

function setUpEventListeners() {
	document.addEventListener('mousewheel', handleWheel);
	document.addEventListener('mousedown', handleMouseDown);
	document.addEventListener('mousemove', handleMouseMove);
	document.addEventListener('mouseup', handleMouseUp);
	document.addEventListener('touchstart', handleMouseDown);
	document.addEventListener('touchmove', handleMouseMove);
	document.addEventListener('touchend', handleMouseUp);
}

setUpEventListeners();
