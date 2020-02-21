let coinFlip = Math.round(Math.random());

let choice = prompt("Heads or Tails");

if (coinFlip < 2) {
    var flipResult = "heads";
} else {
    var flipResult = "tails";
}

if (flipResult == choice) {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (flipResult == "tails") {
        alert("The flip was heads and you chose tails...you lose!");
    } else {
        alert("The flip was tails and you chose heads...you lose!");
    }
}