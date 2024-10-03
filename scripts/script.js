
// JavaScript Document
console.log("hi");

const videojoris = document.getElementById('myVideo');
const emailInput = document.getElementById('email');
const button = document.getElementById('buttonfooter');
const errorMessage = document.getElementById('error-message');

let openButton = document.querySelector("header > button");
let sluitButton = document.querySelector("nav button");

// in ene een if omdat de pagian over beperkingen de vidoe niet kon lezen waardoor de javascript het niet deed
if (videojoris) {
    videojoris.autoplay = true;
    videojoris.muted = true;
    videojoris.loop = true;
}

// wanneer je op button klikt word ding na = uitgevoerd
openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu() {  
    // zoek de nav op
    let deNav = document.querySelector("nav");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
    //zorgt dat stijling zichtbaar wordt
  }
  function sluitMenu() {
    let deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");// haalt stijling weer weg (dus menu)
  }

//uitgevoerd wannneer html pagian volledig geladen is
  document.addEventListener("DOMContentLoaded", () => {
    const infoElement = document.getElementById('info');
    const titleElement = document.getElementById('info-title');
    const textElement = document.getElementById('info-text');
    const imageElement = document.getElementById('info-image'); 
    
//informatie over alle attracties
// is een object om informatie te structuren
//sleutels: joris baron...
    const infoData = {
        joris: {
            title: "Joris en de Draak",
            text: "Houten achtbaan",
            image: "kaart/jorisendraak.jpg"
           
         
        },
        baron: {
            title: "Baron 1898",
            text: "Dive coaster",
            image: "kaart/baron1898.jpg"
        },
        symbolica: {
            title: "Symbolica",
            text: "overdekte familie attractie",
            image: "kaart/symbolica.jpg"
        },
        hollander: {
            title: "Vliegende Hollander",
            text: "Water achtbaan",
            image: "kaart/vliegendehollander.jpg"
        },
        sprookjesbos: {
            title: "Sprookjesbos",
            text: "Betoverend bos",
            image: "kaart/sprookjesbos.jpg"
        },
        droomvlucht: {
            title: "Droomvlucht",
            text: "Overdekte attractie",
            image: "kaart/droomvlucht.jpg"
        },
        python: {
            title: "Python",
            text: "Achtbaan met loopings",
            image: "kaart/python.jpg"
        },
        villavolta: {
            title: "Villa Volta",
            text: "Ronddraaiend huis",
            image: "kaart/villavolta.jpg"
        },
        pagode: {
            title: "Pagode",
            text: "zwevende tempel",
            image: "kaart/pagode.jpg"
        },
        fatamorgana: {
            title: "Fata Morgana",
            text: "Overdekte attractie",
            image: "kaart/fatamorgana.jpg"
        },
        pirana: {
            title: "Piraña",
            text: "Wildwaterbaan",
            image: "kaart/pirana.jpg"
        },
        carnaval: {
            title: "Carnaval Festival",
            text: "Overdekte attractie",
            image: "kaart/carnaval.jpg"
        },
        vogelrok: {
            title: "Vogelrok",
            text: "Achtbaan in het donker",
            image: "kaart/vogelrok.jpg"
        },
        
    };

    // Functie om informatie weer te geven van de attracties
    // if kijkt voor geldig waarde


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
    //showinfo voor informatie weergeven
    // event infomatie ove gebeurtenis
    // event.preventDefault();voorkomt dat standaar actie wordt uitgevoerd
    function showInfo(event) {
        event.preventDefault(); // Voorkom dat de link wordt gevolgd

        const selectedArea = event.target;
        const infoType = selectedArea.getAttribute('data-info'); // haalt sleutel op bijvoorbeeld joris
        const attractionInfo = infoData[infoType]; // halat informatie op

        displayAttractionInfo(attractionInfo);// zorgt dta d einformatie wordt weergegeven
    }

    // Voeg een event listener toe aan elke area
    const areas = document.querySelectorAll('area');
    areas.forEach(area => {
        area.addEventListener('click', showInfo);
    });
});


// zorgt er voor wanneer je iets in het invoerveld intypt deze functie wortd uitgevoerd
// checkValidity controleert of de e-mail voldoet aan de regels zoals dat ze een @ bezitten
// if geldig: foutmelding verborgen - valid wordt toegevoegd - invaildif word weg gedaan
//else ongeldig: word invalid teogevoegd en valid weg gedaan
emailInput.addEventListener('input', () => {
    if (emailInput.checkValidity()) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        errorMessage.style.display = 'none'; 
    } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    }
});

//wordt iets gedaan als je op een knop klikt
// event.preventDefault() haalt standaart functie van knop weg zoals het laden van een pagina
// if geldig: footmelding wordt verborgen, de '' zorgt er voor dat de veld weer leeg is en informatie getoont
// else ongeldig: foutmelding wordt getont en verbergt bevesteging
button.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailInput.checkValidity()) {
        confirmation.style.display = 'block';
        errorMessage.style.display = 'none';
        emailInput.value = ''; 
    } else {
        confirmation.style.display = 'none'; 
        errorMessage.style.display = 'block'; 
        
    }
});






  
 

 


 