const destinationNav = document.querySelectorAll('.subnav__nav--item');
let elements = []

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