import '../sass/main.scss';

const navItem = document.querySelectorAll('.nav__item');
const destinationNav = document.querySelectorAll('.subnav__nav--item');

let elements = []

// navigation

navItem.forEach((e) => {
	e.addEventListener('click', () => {
		navItem.forEach((item) => {
			item.classList.toggle('active');
		});
	});
});

// small navigation for destination subpage

destinationNav.forEach((navItem) => {
	navItem.addEventListener('click', (e) => {
		e.preventDefault();

		fetch("https://github.com/marekszwed/Space-Tourism/blob/main/src/files/data.json")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.destinations.length; i++) {
            elements.push(data.destinations[i]);
          }
        }
       );
        

		const menuItem = e.target as HTMLElement;

		switch (menuItem.innerText) {
			case 'Moon':
				break;
			case 'Mars':
				break;
			case "Europa":
				break;
			case "Titan":
				break;

			default:
				break;
		}
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
