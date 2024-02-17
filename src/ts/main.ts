import '../sass/main.scss'
import '../ts/destination'
import '../ts/crew'
import '../ts/technology'


const navMobile = document.querySelector('.nav') as HTMLElement
const burgerBtn = document.querySelector('.burger') as HTMLElement
const navLinks: NodeList = document.querySelectorAll('.nav__item')

burgerBtn.addEventListener('click', () => {
	if(burgerBtn != null) {
		navMobile.classList.toggle('nav--active')
	} 

	navLinks.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav--active')
		})
	})
})




