//concat() Method Example//
function connect() {
    var Part_1 = "Hello,";
    var Part_2 = " how are ";
    var Part_3 = "you today?";
    var whole_sentence = Part_1.concat(Part_2, Part_3);
    document.getElementById("connected").innerHTML = whole_sentence;
}

//Slice () Method Example//
function slice() {
    var sentence = "This is a sentence...";
    var section = sentence.slice(0,5);
    document.getElementById("cut").innerHTML = section;
}

//toUpperCase() Method Example//
function upper() {
    var hello = "hello";
    var uppercase = hello.toUpperCase();
    document.getElementById("uppercased").innerHTML = uppercase;
}

//search() Method Example//
function search() {
    var icecream = "Vanilla, Chocolate, Strawberry, Sherbet";
    var favorite = icecream.search("Vanilla");
    document.getElementById("searched").innerHTML = favorite;
}

//toString() Method Example//
function string() {
    var X=123;
    document.getElementById("stringed").innerHTML = X.toString();
}

//toPrecision() Method Example//
function precision() {
    var Y= 123321123.321;
    document.getElementById("precisioned").innerHTML = Y.toPrecision(3);
}

//toFixed Method Example//
function fixed() {
    var Z = 123.321;
    document.getElementById("fixeded").innerHTML = Z.toFixed(4);
}

//valueOf() Method Example//
function value() {
    var hey = "Hey, there world!";
    document.getElementById("valued").innerHTML = hey.valueOf();
}
