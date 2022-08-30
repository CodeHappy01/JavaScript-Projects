//Add function
function add() {
    var adding = 2500 + 2 + 2;
    document.getElementById("Math").innerHTML = "2500 + 2 + 2 = " + adding;
}
//Subtraction Function
function subtraction() {
    var subtract = 1234 - 4321;
    document.getElementById("Math2").innerHTML = "1234 - 4321 = " + subtract;
}
//Multiplication Function
function multiplication() {
    var multiply = 123 * 321;
    document.getElementById("Math3").innerHTML = "123 * 321 = " + multiply;
}
//Division Function
function division() {
    var divide = 5224 / 2;
    document.getElementById("Math4").innerHTML = "5224 / 2 = " + divide;
}
//Multiple Operators Added Together Function
function operations() {
    var operators = (2500 + 2 + 2) + (1234 - 4321) + (123 * 321) + (5224 / 2);
    document.getElementById("Math5").innerHTML = "(2500 + 2 + 2) + (1234 - 4321) + (123 * 321) + (5224 / 2) =  " + operators;
}
//Modulus Function
function modulus() {
    var remainder = 70 % 12;
    document.getElementById("Math6").innerHTML = "Remainder of 70 / 12 = " + remainder;
}
//Negation Function
function negation() {
    var operand = 500;
    document.getElementById("Math7").innerHTML = "Negation of 500 = " + -operand;
}
//Increment Function
function increment() {
    var X = 5;
    X++;
    document.getElementById("Math8").innerHTML = "Increment of 5 = " + X;
}
//Decrement Function
function decrement() {
    var Y = 5;
    Y--;
    document.getElementById("Math9").innerHTML = "decrement of 5 = " + Y;
}
//Random # Function
function random() {
    var value = (Math.random() * 1000000000);
    document.getElementById("Math10").innerHTML = value;
}
//Rounding # Object Method Function
function object() {
    var round = (Math.round(1.2345));
    document.getElementById("Math11").innerHTML = "1.2345 rounded to the nearest integer is = " + round;
}