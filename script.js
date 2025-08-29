//Variables & Conditionals
let team = "Barcelona";
let goals = 0;

if (team === "Barcelona") {
    console.log("Visca Barça");
} else {
    console.log("Okay, respect to Madrid");
}

//Functions
function scoreGoal(player) {
    goals++;
    return player + " scored! Total goals: " + goals;
}

function celebrate(player) {
    return player + " does a backflip after scoring";
}

console.log(scoreGoal("Messi"));
console.log(celebrate("Messi"));

//Loops
let players = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Vinicius", "Pedri", "Yamal", "Bellingham", "Halaand", "Saka", "Salah", "Osimhen", "Palmer", "Pedro", "Dembele", "Desire", "Lewandowski", "Isak", "Matinelli", "Gabriel", "Rodrygo", "Valverde", "Manstantuano", "Pogba", "Guler", "Thuram", "Vitinha"];

//For loop
for (let i = 0; i < players.length; i++) {
    console.log("Starting player:", players[i]);
}

//For...of loop
for (let player of players) {
    console.log(player, "is warming up...");
}

//DOM Interactions
let shootBtn = document.getElementById("shootBtn");
let scoreBoard = document.getElementById("scoreBoard");

//A random player scores when you click
shootBtn.addEventListener("click", function () {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    scoreBoard.innerText = scoreGoal(randomPlayer);
});

shootBtn.addEventListener("mouseover", function () {
    shootBtn.style.background = "green";
});

document.getElementById("intro").innerText += " (No VAR check needed)";
