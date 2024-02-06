"use strict"

import jsonFile from '../files/data.json';

// Btns
const circleBtns: NodeList = document.querySelectorAll('.memberBtn')
// personal info
const crewRole: HTMLHeadElement = document.querySelector('.members__left--position')!
const memberName: HTMLHeadElement = document.querySelector('.members__left--name')!
const description:HTMLParagraphElement = document.querySelector('.description')!
const memberImg: HTMLImageElement = document.querySelector('.members__right--member-img')!




circleBtns.forEach((item) => item.addEventListener('click', (e) => {
    const crewItem: any = e.target as HTMLElement;

    console.log(typeof crewItem.value);
    
    if(crewItem != null) {
        
        switch (crewItem.value) {
            case "0":
                crewRole.innerText = jsonFile.crew[0].role
                memberName.innerText = jsonFile.crew[0].name
                description.innerText = jsonFile.crew[0].bio
                memberImg.src = "./src/assets/crew/image-1.png"
                break;
            case "1":
                crewRole.innerText = jsonFile.crew[1].role
                memberName.innerText = jsonFile.crew[1].name
                description.innerText = jsonFile.crew[1].bio
                memberImg.src = "./src/assets/crew/image-2.png"
                break;
            case "2":
                crewRole.innerText = jsonFile.crew[2].role
                memberName.innerText = jsonFile.crew[2].name
                description.innerText = jsonFile.crew[2].bio
                memberImg.src = "./src/assets/crew/image-3.png"
                break;
            case "3":
                crewRole.innerText = jsonFile.crew[3].role
                memberName.innerText = jsonFile.crew[3].name
                description.innerText = jsonFile.crew[3].bio
                memberImg.src = "./src/assets/crew/image-4.png"
                break;
        
            default:
                break;
        }
    }  else {
        console.error('crewItem = null');
        
    }
}))