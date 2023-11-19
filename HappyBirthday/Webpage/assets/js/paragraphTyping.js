const paragraphs = [
	"Dear Helen, As the sun rises on your special day, I find my thoughts traversing continents to reach you in Australia, where you celebrate another year of your beautiful existence. I heard that today marks not just the passage of time but a celebration of the INCREDIBLE SISTER you are. No vast miles can make thy brother fail to wish you HBD19TH i hope this small messages bridges the gap. In heart, I'm right there with you, sharing in the joy that your birthday brings.",
	"In the tapestry of memories, the years we've spent together weaving a colorful pattern in life.. Though oceans may separate us physically, the bond we share knows no bounds. Be the melody that transcends these geographical distance. Blow out your  19 candles on your cake merrily, for you are the symphony of our family's love and warmth",
	"In the rhythm of life, our birthdays serve as sweet reminders, to pause and celebrate the unique gift from God. So, here's to you, dear sister, a remarkable soul on a remarkable life journey. May all your days be adorned with love, beautiful surprises as you, and the knowledge that, no matter how far, you are deeply cherished and missed. Happy birthday, Helen! May this year be as extraordinary as the spirit within you.",
];

document.addEventListener('DOMContentLoaded', function () {
	paragraphs.forEach((text, index) => {
		setTimeout(() => {
			typeWriter(text, `paragraph${index + 1}`);
		}, index * 10000);
	});
});

function typeWriter(text, classElement) {
	let charIndex = 0;
	const typingElement = document.getElementsByClassName(classElement);
    const typingInterval = setInterval(() => {
       typingElement.style.opactiy = '1'
       typingElement.innerHTML += text[charIndex]
       
       if (charIndex === text.length) {
        clearInterval(typingInterval)
       }
    }, 100);
}
