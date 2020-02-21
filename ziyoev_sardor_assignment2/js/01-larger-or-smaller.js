let inteNum = prompt("Enter first number");
let intesNum = prompt("Enter another number");

if (inteNum > intesNum) {
    window.document.write(inteNum);
} else if (inteNum < intesNum) {
    window.document.write(intesNum);
} else if (inteNum == intesNum) {
    window.document.write("Numbers are equal");
}