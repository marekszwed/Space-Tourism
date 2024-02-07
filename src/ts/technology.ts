"use strict"

import jsonFile from '../files/data.json';

const circles = document.querySelectorAll('.circle')


function openActiveItem (this: HTMLButtonElement) {
    closeActiveItem()
    this.classList.toggle('circle-active')
}

function closeActiveItem () {
    circles.forEach(btn => btn.classList.remove('circle-active'))
}



circles.forEach(button => button.addEventListener('click', openActiveItem))