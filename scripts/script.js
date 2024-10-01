




// JavaScript Document
console.log("hi");

const videojoris = document.getElementById('myVideo');
let openButton = document.querySelector("header > button");
let sluitButton = document.querySelector("nav button");


 



if (videojoris) {
    videojoris.autoplay = true;
    videojoris.muted = true;
    videojoris.loop = true;

}


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

  document.addEventListener("DOMContentLoaded", () => {
    const infoElement = document.getElementById('info');
    const titleElement = document.getElementById('info-title');
    const textElement = document.getElementById('info-text');
    const imageElement = document.getElementById('info-image'); 
    

    const infoData = {
        joris: {
            title: "Joris en de Draak",
            text: "Een spannende rit waarbij je door een drakenhol gaat!",
            image: "kaart/jorisendraak.jpg"
           
         
        },
        baron: {
            title: "Baron 1898",
            text: "Een achtbaan met een vrije val van 37,5 meter!",
            image: "kaart/baron1898.jpg"
        },
        symbolica: {
            title: "Symbolica",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/symbolica.jpg"
        },
        hollander: {
            title: "Vliegende Hollander",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/vliegendehollander.jpg"
        },
        sprookjesbos: {
            title: "Sprookjesbos",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/sprookjesbos.jpg"
        },
        droomvlucht: {
            title: "Droomvlucht",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/droomvlucht.jpg"
        },
        python: {
            title: "Python",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/python.jpg"
        },
        villavolta: {
            title: "Villa Volta",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/villavolta.jpg"
        },
        pagode: {
            title: "Pagode",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/pagode.jpg"
        },
        fatamorgana: {
            title: "Fata Morgana",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/fatamorgana.jpg"
        },
        pirana: {
            title: "Piraña",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/pirana.jpg"
        },
        carnaval: {
            title: "Carnaval Festival",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/carnaval.jpg"
        },
        vogelrok: {
            title: "Vogelrok",
            text: "Een betoverende dark ride voor het hele gezin.",
            image: "kaart/vogelrok.jpg"
        },
        // Voeg hier meer attracties toe met hun informatie
    };

    // Functie om informatie weer te geven
    function displayAttractionInfo(attraction) {
        if (attraction) {
            titleElement.innerText = attraction.title;
            textElement.innerText = attraction.text;
            imageElement.src = attraction.image;
            imageElement.style.display = "block";

            infoElement.style.display = "block";
        }
    }

    // Functie om de informatie op te halen bij klikken
    function showInfo(event) {
        event.preventDefault(); // Voorkom dat de link wordt gevolgd

        const selectedArea = event.target;
        const infoType = selectedArea.getAttribute('data-info');
        const attractionInfo = infoData[infoType];

        displayAttractionInfo(attractionInfo);
    }

    // Voeg een event listener toe aan elke area
    const areas = document.querySelectorAll('area');
    areas.forEach(area => {
        area.addEventListener('click', showInfo);
    });
});
  
 

 


 