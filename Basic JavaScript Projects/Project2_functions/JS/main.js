function My_First_Function() { //This function returns two variables that add together to the HTML Id "hi"
    var str = "Hi, ";
    var str2 = "there!";
    document.getElementById("hi").innerHTML = str + str2;
}
function myFunction() { //This function returns the variable "sentence" with two concatenated values to the HTML Id "Concatenate".
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}