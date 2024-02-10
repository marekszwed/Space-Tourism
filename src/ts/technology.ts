"use strict"

import jsonFile from '../files/data.json';

const circles = document.querySelectorAll('.circle')
const title = document.querySelector('.title') as HTMLHeadElement
const description = document.querySelector('.vehicle-description') as HTMLParagraphElement
const image = document.querySelector('.main__right--vehicle-img') as HTMLImageElement


function openActiveItem (this: HTMLButtonElement) {
    closeActiveItem()
    this.classList.toggle('circle-active')
}

function closeActiveItem () {
    circles.forEach(btn => btn.classList.remove('circle-active'))
}

circles.forEach(btn => btn.addEventListener('click', ((e) => {
    const circleBtn = e.target as HTMLButtonElement
    let circleBtnNumber = Number(circleBtn.innerText)

    console.log(circleBtn);
    console.log(circleBtnNumber);

    if(circleBtn) {
        title.innerText = jsonFile.technology[circleBtnNumber -1].name
        description.innerText = jsonFile.technology[circleBtnNumber -1].description
        image.src = `./src/assets/technology/image-${circleBtnNumber}-portrait.jpg`		
    }
    

})))





circles.forEach(button => button.addEventListener('click', openActiveItem))