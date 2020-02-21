let coinFlip;

for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
        window.document.write("heads" + "<br>");
    } else {
        window.document.write("tails" + "<br>");
    }
}