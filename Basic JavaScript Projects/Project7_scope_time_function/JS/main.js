//Global Variable//
var X=123;
function multiply_number_1() {
    document.write(321 * X + "<br>");
}
function multiply_number_2() {
    document.write(X * 123 + "<br>");
}
multiply_number_1();
multiply_number_2();

//Local Variable Console.log example//
function multiply_number_3() {
    var Y=321;
    console.log(123 * Y + "<br>");
}
function multiply_number_4() {
    console.log(Y * 321);
}
multiply_number_3();
multiply_number_4();

//Method Assignment//
function get_Date() {
    if (new Date().getHours() < 23) {
        document.getElementById("hello").innerHTML = "Hello, how is life today!"
    }
}
//If Statement Assignment//
function get_Date2() {
    var quote_1 = "\"The life that you have is a result of your past decisions, the life you want to live will be determined by the decisions you make today.\" - anonymous"
    if (new Date().getHours() < 23) {
        document.getElementById("quote").innerHTML = "Quote of the day: " + quote_1;
    }
}
//Else Statement Assignment//
function Guess_Function() {
    guess= document.getElementById("guess").value;
    if (guess==123) {
        number = "You guessed right! Way to go!"
    }
    else {
        number = "You guessed incorrectly, maybe next time."
    }
    document.getElementById("guess_correctly?").innerHTML = number
}

//Else if Statement//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time>=12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}