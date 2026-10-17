let photos = ["potter1.jpeg", "potter2.jpeg", "potter3.jpg"];
let names = ["Harry", "Hermione", "Ron"];
let index = 0;

function nextImage() {
    index++;

    if (index === photos.length) {
        index = 0;
    }

    document.getElementById("character").src = photos[index];
    document.getElementById("character").alt = names[index]; 

 
}

function updateClock() {
    let currentTime = new Date();

    document.getElementById("clock").innerText = currentTime.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000)

let spells = ["Exelliarmus", "Lumos", "Expecto Petronum", "Wingardium Leviosa", "Alohomora", "Aabrakadavra", "Pitra dev Sangragkhanam"];

function generateSpell() {
    let randomNumber = Math.floor(Math.random() * spells.length);

    document.getElementById("spellName").innerText = spells[randomNumber];
}

let shows = ["Harry Potter", "Stranger Things", "Wednesday", "Game of Thrones", "Naruto"];

let showButton = document.getElementById("show-btn");
let showName = document.getElementById("show-name");

showButton.addEventListener("click", function() {

    let randomNumber = Math.floor(Math.random() * shows.length);
    
    showName.textContent = shows[randomNumber];
    showName.style.display = "block";
});