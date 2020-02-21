let futureValue = 0; 
let investment = 0; 
let rate = 0; 
let years = 0; 
let i;

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));

while(isNaN(investment)) {
    alert("Enter the numbers");
    investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
}

rate = parseFloat(window.prompt("Enter interest rate as xx.x"));

while (isNaN(rate)) {
    alert("Enter the numbers");
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
}
while (rate > 6) {
    alert("Number must be less than 6%");
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
}

years = parseInt(window.prompt("Enter number of years"));

while (isNaN(years)) {
    alert("Enter the numbers");
    years = parseInt(window.prompt("Enter number of years"));
}
while (years > 30) {
    alert("Years must be less than 30 Years");
    years = parseInt(window.prompt("Enter number of years"));
}
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
} 


window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + futureValue);


