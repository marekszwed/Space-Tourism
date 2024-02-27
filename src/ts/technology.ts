'use strict';

import jsonFile from '../files/data.json';

const circles = document.querySelectorAll('.circle');
const title = document.querySelector('.title') as HTMLHeadElement;
const description = document.querySelector('.vehicle-description') as HTMLParagraphElement;
const image = document.querySelector('.main__right--vehicle-img') as HTMLImageElement;

function openActiveItem(this: HTMLButtonElement) {
	closeActiveItem();
	this.classList.toggle('circle-active');
}

function closeActiveItem() {
	circles.forEach((btn) => btn.classList.remove('circle-active'));
}

const setImage = () => {
	if (window.innerWidth <= 1024) {
		image.src = './src/assets/technology/image-1-landscape.jpg';
	} else {
		image.src = './src/assets/technology/image-1-portrait.jpg';
	}
};

function checkSiteSize() {
	window.onload = changeImageSize;
	window.onresize = changeImageSize;

	function changeImageSize() {
		let siteWidth = window.innerWidth;

		circles.forEach((btn) =>
			btn.addEventListener('click', (e) => {
				const btnNumber = e.target as HTMLButtonElement;
				let circleNumber = Number(btnNumber.innerText);

				if (siteWidth <= 1024) {
					image.src = `./src/assets/technology/image-${circleNumber}-landscape.jpg`;
				} else {
					image.src = `./src/assets/technology/image-${circleNumber}-portrait.jpg`;
				}
			})
		);
	}
}

checkSiteSize();

circles.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		const circleBtn = e.target as HTMLButtonElement;
		let circleBtnNumber = Number(circleBtn.innerText);

		console.log(circleBtn);
		console.log(circleBtnNumber);

		if (circleBtn) {
			title.innerText = jsonFile.technology[circleBtnNumber - 1].name;
			description.innerText =
				jsonFile.technology[circleBtnNumber - 1].description;
		}
	})
);

window.addEventListener('load', setImage);

circles.forEach((button) => button.addEventListener('click', openActiveItem));
