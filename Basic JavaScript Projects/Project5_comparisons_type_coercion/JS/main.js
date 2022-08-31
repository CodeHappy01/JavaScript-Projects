//typeof Example
document.write(typeof "word");

//Coercion Example
document.write("12" + 3);

//Console.log Method Example
console.log(2+2);

//Boolean Console.Log Method Example
console.log(500<200);

//Double Equal Sign True Example
document.write((122+1)==123);

//Double Equal Sign false Example
document.write((122+1)==321);


//---Triple Equal Sign Examples//---

//Same Data Type and Value (true)
X=123;
Y=123;
document.write(X===Y);
//Different Data Type and Value (false)
A="1";
B=2;
document.write(A===B);
//Different Data Type, Same Value (false)
C="1";
D=1;
document.write(C===D);
//Same Data Type, Different Value (false)
E=2;
F=3;
document.write(E===F);

//---AND,OR Operators//---

//AND Example (true)
document.write(100>50 && 10>4);

//AND Example (false)
document.write(100<50 && 10>4)

//OR Example (true)
document.write(123<321 || 10<4)

//OR Example (false)
document.write(123>321 || 10<4)

//---Functions//---

//return NaN Function
function myFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}
//isNaN True Function
function myFunction2() {
    document.getElementById("Test2").innerHTML = isNaN("Hello");
}
//isNaN False Function
function myFunction3() {
    document.getElementById("Test3").innerHTML = isNaN("123");
}
//infinity Function
function myFunction4() {
    document.getElementById("Test4").innerHTML = 2E310;
}
//-infinity Function
function myFunction5() {
    document.getElementById("Test5").innerHTML = -3E310;
}

//NOT Example (false)
function myFunction6() {
    document.getElementById("Test6").innerHTML = !(20>10);
}
//NOT Example (true)
function myFunction7() {
    document.getElementById("Test7").innerHTML = !(5>10);
}

