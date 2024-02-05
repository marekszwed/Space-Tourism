"use strict"

import jsonFile from '../files/data.json';

// Btns
const circleBtns: NodeList = document.querySelectorAll('.memberBtn')
// personal info
const crewRole = document.querySelector('.members__left--position') as HTMLElement
const memberName = document.querySelector('.members__left--name') as HTMLElement
const description = document.querySelector('.description') as HTMLElement


circleBtns.forEach((item) => item.addEventListener('click', (e) => {
    const crewItem: any = e.target as HTMLElement;

    console.log(typeof crewItem.value);
    
    if(crewItem != null) {
        
        switch (crewItem.value) {
            case "0":
                crewRole.innerText = jsonFile.crew[0].role
                memberName.innerText = jsonFile.crew[0].name
                description.innerText = jsonFile.crew[0].bio
                break;
            case "1":
                crewRole.innerText = jsonFile.crew[1].role
                memberName.innerText = jsonFile.crew[1].name
                description.innerText = jsonFile.crew[1].bio
                break;
            case "2":
                crewRole.innerText = jsonFile.crew[2].role
                memberName.innerText = jsonFile.crew[2].name
                description.innerText = jsonFile.crew[2].bio
                break;
            case "3":
                crewRole.innerText = jsonFile.crew[3].role
                memberName.innerText = jsonFile.crew[3].name
                description.innerText = jsonFile.crew[3].bio
                break;
        
            default:
                break;
        }
    }  else {
        console.error('crewItem = null');
        
    }
}))