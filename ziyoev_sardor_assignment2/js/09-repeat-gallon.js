let miles, gallons, mpg, again = "y";
let running = true;

do {
    miles = parseFloat(window.prompt("Enter miles driven."));

    gallons = parseFloat(window.prompt("Enter size of tank in gallons."));

    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
    } else {
        window.alert("One or both entries are invalid.")
    } 
    again = window.prompt("Repeat entry? (y/n)");

    if(again == "y") {
        continue;
    }

    else if (again == "n") {
        running = false;
    }

    else {
        while(again != "y" || again != "n")
        {
            again = window.prompt("Invalid entery. Repeat calculation? (y/n)");

            if(again == "y")
            {
                break;
            }

            else if(again == "n")
            {
                running = false;
            }
        }
    }
} 
while (running);

window.document.write("The application has terminated!");
