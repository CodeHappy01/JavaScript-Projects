function my_Dictionary() {
    var Vehicle = {
        Brand:"Audi R8",
        Color: "White",
        Horsepower: "602 HP",
        Torque: "413 lb-ft",
    };
    delete Vehicle.Horsepower;
    document.getElementById("Dictionary").innerHTML = Vehicle.Horsepower;
}