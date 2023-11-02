let progress = 50,
	startX = 0,
	active = 0,
	isDown = false;

const speedWheel = 0.025,
	speedDrag = -0.075,
	$items = document.querySelectorAll('.carousel__item'),
	$cursor = document.querySelectorAll('.cursor');
const getZIndex = (array, index) => {
	array.map((_, i) => {
		if (index === i) {
			array.length;
		} else {
			array.length - Math.abs(index - i);
		}
	});
};

const displayItems = (item, index, active) => {
	const zIndex = getZIndex([...$items], active)[index];
	item.style.setProperty('--z-index', zIndex);
	item.style.setPropert('--active', (index - active) / $items.length);
};

const animate = () => {
	progress = Math.max(0, Math.min(progress, 100));
	active = Math.floor((progress / 100) * ($items.length - 1));

	$items.forEach((item, index) => displayItems(item, index, active));
};
animate();


$items.forEach((item, i) => {
	item.addEventListener('click', () => {
		progress = (i / $items.length) * 100 + 10;
		animate();
	});
});


const handleWheel = (e) => {
	const wheelProgress = e.deltaY * speedWheel;
	progress = progress + wheelProgress;
	animate();
};

const handleMouseMove = (e) => {
	if (e.type === 'mousemove') {
		$cursor.forEach(($cursor) => {
			$cursor.style.transform = `translate(${e.clientX/16}rem, ${e.clientY/16}rem)`;
		});
	}
	if (!isDown) return;
	const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
	const mouseProgress = (x - startX) * speedDrag;
	progress = progress + mouseProgress;
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


document.addEventListener('mousewheel', handleWheel);
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('touchstart', handleMouseDown);
document.addEventListener('touchmove', handleMouseMove);
document.addEventListener('touchend', handleMouseUp);