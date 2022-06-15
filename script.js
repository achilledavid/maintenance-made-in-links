window.addEventListener("load", () => {
	autoSlide();
})

function autoSlide() {
	setInterval(() => {
		slide(getItemActiveIndex() + 1);
	}, 4500);
}

function slide(toIndex) {
	const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
	const itemActive = document.querySelector(".carousel_item__active");

	if (toIndex >= itemsArray.length) {
		toIndex = 0;
	}

	const newItemActive = itemsArray[toIndex];

	newItemActive.classList.add("carousel_item__pos_next");
	setTimeout(() => {
		newItemActive.classList.add("carousel_item__next");
		itemActive.classList.add("carousel_item__next");
	}, 20);

	newItemActive.addEventListener("transitionend", () => {
		itemActive.className = "carousel_item";
		newItemActive.className = "carousel_item carousel_item__active";
	}, {
		once: true
	});
}

function getItemActiveIndex() {
	const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
	const itemActive = document.querySelector(".carousel_item__active");
	const itemActiveIndex = itemsArray.indexOf(itemActive);
	return itemActiveIndex;
}