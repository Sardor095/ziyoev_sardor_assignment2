let coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 1) {
        window.document.write("tails" + "<br>");
    } else {
        window.document.write("heads" + "<br>");
    }
} while (coinFlip != 1);

window.document.write("You're dead!");