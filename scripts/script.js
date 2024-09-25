// JavaScript Document
console.log("hi");

const videojoris = document.getElementById('myVideo');
let openButton = document.querySelector("header > button");
let sluitButton = document.querySelector("nav button");

videojoris.autoplay = true;
videojoris.muted = true;
videojoris.loop = true;

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu() {  
    // zoek de nav op
    let deNav = document.querySelector("nav");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
  }
  function sluitMenu() {
    let deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
 