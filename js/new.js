function delayMsg() {
    setTimeout(booyah, 5000);
    document.getElementById("output").innerHTML = "Wait for it...";
}

function booyah() {
    // called when the timer goes off
    document.getElementById("output").innerHTML = "BOOYAH!";
}

timer = null; // stores ID of interval timer
var rudyTimer = function(){
        if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }

document.getElementById("output").innerHTML += "Rudy!";

}

class Employee{
    constructor(name, salary, position){
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}

var emp1 = new Employee('Samuel', 6800, 'programmer');
var emp2 = new Employee('Aron', 5680, 'Accountant');
var emp3 = new Employee('Misgan', 5000, 'Sales');

function multiply(){
    console.log(arguments);
    var product = 1;
    for(var i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }

    return product;
}

console.log(multiply(2, 3));
console.log(multiply(4, 6, 9));