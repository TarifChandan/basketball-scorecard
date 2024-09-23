let scoreboardOne = document.getElementById("scoreboard-1");
let scoreboardTwo = document.getElementById("scoreboard-2");
let scoreOne = 0;
let scoreTwo = 0;

function addOneHome() {
    scoreOne += 1;
    scoreboardOne.textContent = scoreOne;
}

function addTwoHome() {
    scoreOne += 2;
    scoreboardOne.textContent = scoreOne;
}

function addThreeHome() {
    scoreOne += 3;
    scoreboardOne.textContent = scoreOne;
}

// GUEST

function addOneGuest() {
    scoreTwo += 1;
    scoreboardTwo.textContent = scoreTwo;
}

function addTwoGuest() {
    scoreTwo += 2;
    scoreboardTwo.textContent = scoreTwo;
}

function addThreeGuest() {
    scoreTwo += 3;
    scoreboardTwo.textContent = scoreTwo;
}

// RESET

function reset() {
    scoreOne = 0;
    scoreTwo = 0;
    scoreboardOne.textContent = scoreOne;
    scoreboardTwo.textContent = scoreTwo;
}