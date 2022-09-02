//Ternary Operation Example
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
//Ternary Operation Example
function Vote_Function () {
    var age, Can_Vote;
    age = document.getElementById("age").value;
    Can_Vote = (age < 18) ? "You are not old enough to vote":"You can Vote!";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

//Keyword Challenge//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
//Keyword Challenge 2//
function Forcast(Skies, Temperature,) {
    this.Forcast_Skies = Skies;
    this.Forcast_Temperature = Temperature;
}
var today = new Forcast ("Cloudy", "66F-83F");
var tomorrow = new Forcast ("Partly -Cloudy", "67F-85F" );
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "The low-high temperature in Midland, Texas today is " + today.Forcast_Temperature + 
    " and expect the skies to be " + today.Forcast_Skies
}
//Nested Function Assignment//
function double_Function() {
    document.getElementById("Nested_Function").innerHTML = double();
    function double() {
        var Starting_point = 2;
        function Times_two() {Starting_point *= 2;}
        Times_two();
        return Starting_point;
    }

}