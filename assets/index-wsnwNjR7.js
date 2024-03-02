(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const y of i.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const x=[{name:"Moon",images:{png:"./assets/destination/image-moon.png",webp:"./assets/destination/image-moon.webp"},description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"./assets/destination/image-mars.png",webp:"./assets/destination/image-mars.webp"},description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"./assets/destination/image-europa.png",webp:"./assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"./assets/destination/image-titan.png",webp:"./assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}],k=[{name:"Douglas Hurley",images:{png:"./assets/crew/image-douglas-hurley.png",webp:"./assets/crew/image-douglas-hurley.webp"},role:"Commander",bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{name:"Mark Shuttleworth",images:{png:"./assets/crew/image-mark-shuttleworth.png",webp:"./assets/crew/image-mark-shuttleworth.webp"},role:"Mission Specialist",bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{name:"Victor Glover",images:{png:"./assets/crew/image-victor-glover.png",webp:"./assets/crew/image-victor-glover.webp"},role:"Pilot",bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{name:"Anousheh Ansari",images:{png:"./assets/crew/image-anousheh-ansari.png",webp:"./assets/crew/image-anousheh-ansari.webp"},role:"Flight Engineer",bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],E=[{name:"Launch vehicle",images:{portrait:"./assets/technology/image-launch-vehicle-portrait.jpg",landscape:"./assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"Spaceport",images:{portrait:"./assets/technology/image-spaceport-portrait.jpg",landscape:"./assets/technology/image-spaceport-landscape.jpg"},description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{name:"Space capsule",images:{portrait:"./assets/technology/image-space-capsule-portrait.jpg",landscape:"./assets/technology/image-space-capsule-landscape.jpg"},description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}],e={destinations:x,crew:k,technology:E},v=document.querySelectorAll(".subnav__nav--item");let o=document.querySelector(".left-side__planet--img");const c=document.querySelector(".right-side__planet--name"),l=document.querySelector(".right-side__planet--description"),m=document.querySelector(".distance__avg--number"),d=document.querySelector(".distance__time--number");function A(){L(),this.classList.toggle("show")}function L(){v.forEach(t=>{t.classList.remove("show")})}v.forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const s=a.target;if(s!=null)switch(s.innerText){case"MOON":o.src="./src/assets/destination/image-moon.png",c.innerText=e.destinations[0].name,l.innerText=e.destinations[0].description,m.innerText=e.destinations[0].distance,d.innerText=e.destinations[0].travel;break;case"MARS":o.src="./src/assets/destination/image-mars.png",c.innerText=e.destinations[1].name,l.innerText=e.destinations[1].description,m.innerText=e.destinations[1].distance,d.innerText=e.destinations[1].travel;break;case"EUROPA":o.src="./src/assets/destination/image-europa.png",c.innerText=e.destinations[2].name,l.innerText=e.destinations[2].description,m.innerText=e.destinations[2].distance,d.innerText=e.destinations[2].travel;break;case"TITAN":o.src="./src/assets/destination/image-titan.png",c.innerText=e.destinations[3].name,l.innerText=e.destinations[3].description,m.innerText=e.destinations[3].distance,d.innerText=e.destinations[3].travel;break}else console.error("e.target (menuItem) is null")})});v.forEach(t=>t.addEventListener("click",A));const b=document.querySelectorAll(".memberBtn"),p=document.querySelector(".members__left--position"),g=document.querySelector(".members__left--name"),u=document.querySelector(".description"),h=document.querySelector(".members__right-img");b.forEach(t=>t.addEventListener("click",a=>{const s=a.target;if(console.log(s.value),s!=null)switch(s.value){case"0":p.innerText=e.crew[0].role,g.innerText=e.crew[0].name,u.innerText=e.crew[0].bio,h.src="./src/assets/crew/image-1.png";break;case"1":p.innerText=e.crew[1].role,g.innerText=e.crew[1].name,u.innerText=e.crew[1].bio,h.src="./src/assets/crew/image-2.png";break;case"2":p.innerText=e.crew[2].role,g.innerText=e.crew[2].name,u.innerText=e.crew[2].bio,h.src="./src/assets/crew/image-3.png";break;case"3":p.innerText=e.crew[3].role,g.innerText=e.crew[3].name,u.innerText=e.crew[3].bio,h.src="./src/assets/crew/image-4.png";break}else console.error("crewItem = null")}));function _(){q(),this.classList.toggle("active")}function q(){b.forEach(t=>t.classList.remove("active"))}b.forEach(t=>t.addEventListener("click",_));const w=document.querySelectorAll(".circle"),I=document.querySelector(".title"),N=document.querySelector(".vehicle-description"),f=document.querySelector(".main__right--vehicle-img");function O(){j(),this.classList.toggle("circle-active")}function j(){w.forEach(t=>t.classList.remove("circle-active"))}const M=()=>{window.innerWidth<=1024?f.src="./src/assets/technology/image-1-landscape.jpg":f.src="./src/assets/technology/image-1-portrait.jpg"};function B(){window.onload=t,window.onresize=t;function t(){let a=window.innerWidth;w.forEach(s=>s.addEventListener("click",r=>{const n=r.target;let i=Number(n.innerText);a<=1024?f.src=`./src/assets/technology/image-${i}-landscape.jpg`:f.src=`./src/assets/technology/image-${i}-portrait.jpg`}))}}B();w.forEach(t=>t.addEventListener("click",a=>{const s=a.target;let r=Number(s.innerText);console.log(s),console.log(r),s&&(I.innerText=e.technology[r-1].name,N.innerText=e.technology[r-1].description)}));window.addEventListener("load",M);w.forEach(t=>t.addEventListener("click",O));const S=document.querySelector(".nav"),T=document.querySelector(".burger"),D=document.querySelectorAll(".nav__item");T.addEventListener("click",()=>{T!=null&&S.classList.toggle("nav--active"),D.forEach(t=>{t.addEventListener("click",()=>{S.classList.remove("nav--active")})})});