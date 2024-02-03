import '../sass/main.scss';
import '../ts/destination'

const navItem = document.querySelectorAll('.nav__item');

navItem.forEach((e) => {
	e.addEventListener('click', (item) => {
		item.preventDefault()
		console.log(item);
	})
})



// navigation

navItem.forEach((e) => {
	e.addEventListener('click', () => {
		navItem.forEach((item) => {
			item.classList.toggle('active');
		});
	});
});





// const scrollSpySections = document.querySelectorAll('.section');
// console.log(pageFiles.crew);

// const crew: object = pageFiles.crew
// const destinations: object = pageFiles.destinations
// const technology: object = pageFiles.technology

// console.log(crew);
// console.log(destinations);
// console.log(technology);
