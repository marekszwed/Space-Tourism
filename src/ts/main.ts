import '../sass/main.scss'
import '../ts/destination'
import '../ts/crew'
import '../ts/technology'

const navItem = document.querySelectorAll('.nav__item');


// navigation

navItem.forEach((e) => {
	e.addEventListener('click', () => {
		navItem.forEach((item) => {
			item.classList.toggle('active');
		});
	});
});


