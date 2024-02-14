import jsonFile from '../files/data.json';

const destinationNav: NodeList = document.querySelectorAll('.subnav__nav--item');

let planetImage = document.querySelector('.left-side__planet--img') as HTMLImageElement;

const planetName = document.querySelector('.right-side__planet--name') as HTMLElement;
const planetDescription = document.querySelector('.right-side__planet--description') as HTMLElement;

const avgDistance = document.querySelector('.distance__avg--number') as HTMLElement;
const avgTime = document.querySelector('.distance__time--number') as HTMLElement; 




destinationNav.forEach((navItem) => {
	navItem.addEventListener('click', (e) => {
		e.preventDefault();

		const menuItem = e.target as HTMLElement;
		

		if(menuItem != null) {
			switch (menuItem.innerText) {
				case 'MOON':				
					planetImage.src = "./src/assets/destination/image-moon.png"							
					planetName.innerText = jsonFile.destinations[0].name
					planetDescription.innerText = jsonFile.destinations[0].description
					avgDistance.innerText = jsonFile.destinations[0].distance;
					avgTime.innerText = jsonFile.destinations[0].travel
					
					break;
	
				case 'MARS':			
					planetImage.src = "./src/assets/destination/image-mars.png"					
					planetName.innerText = jsonFile.destinations[1].name
					planetDescription.innerText = jsonFile.destinations[1].description
					avgDistance.innerText = jsonFile.destinations[1].distance;
					avgTime.innerText = jsonFile.destinations[1].travel
					
					break;
	
				case 'EUROPA':
					planetImage.src = "./src/assets/destination/image-europa.png"			
					planetName.innerText = jsonFile.destinations[2].name
					planetDescription.innerText = jsonFile.destinations[2].description
					avgDistance.innerText = jsonFile.destinations[2].distance;
					avgTime.innerText = jsonFile.destinations[2].travel		
	
					break;
	
				case 'TITAN':		
					planetImage.src = "./src/assets/destination/image-titan.png"
					planetName.innerText = jsonFile.destinations[3].name
					planetDescription.innerText = jsonFile.destinations[3].description
					avgDistance.innerText = jsonFile.destinations[3].distance;
					avgTime.innerText = jsonFile.destinations[3].travel
					
					break;
	
				default:
					break;
			}
		} else {
			console.error('e.target (menuItem) is null');		
		}		
	});
});
