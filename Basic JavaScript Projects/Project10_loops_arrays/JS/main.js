//While Loop//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
    Digit += "<br>" + X;
    X++;
}
    document.getElementById("Loop").innerHTML = Digit;
}

//For Loop//

var Instruments = ["Violin, Cello, Piano, Guitar"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array//

function array_Function() {
    var dog_Picture = [];
    dog_Picture [0] ="pooping";
    dog_Picture [1] = "playing";
    document.getElementById("Array").innerHTML = "The dog in this picture is " + dog_Picture[0] + "."
}

//Constant//

function constant_Function() {
    const Musical_Instrument = {type:"piano", brand: "Yamaha", color:"white"};
    Musical_Instrument.color = "black";
    document.getElementById("Constant").innerHTML = "The " + Musical_Instrument.brand + " " + Musical_Instrument.type + 
    " was " + Musical_Instrument.color + ", which is my favorite color!";
}

//Let Keyword//

function let_Function() {
    var P = 123;
    document.write(P);
{
    let P = 321;
    document.write("<br>" + P);
}
    document.write("<br>" + P);
}

//Object//

let Meals = {
    Breakfast: "French Toast",
    Lunch: "Stir Fry",
    Dinner: "Chicken Salad",
    desciption : function() {
        return "Today I plan on waking up and having me some good ol' " 
        + this.Breakfast + ", for lunch I plan to have " + this.Lunch
        + ", and for dinner I plan to have " + this.Dinner + ".";
    }
};
document.getElementById("Meals").innerHTML = Meals.desciption();