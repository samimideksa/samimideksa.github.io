// var employee = function(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.address = address;

//     function setAge(newAge){
//         this.age = newAge;
//     }

//     function setSalary(newSalary){
//         this.salary = newSalary;
//     }

//     function setName(newName){
//         this.name = newName;
//     }

//     function setAddress(newAddress){
//         this.address = newAddress;
//     }

//     function getAddress(){
//         return this.address;
//     }

//     function getAge(){
//         return this.age;
//     }

//     function getSalary(){
//         return this.salary;
//     }

//     function getName(){
//         return this.name;
//     }

//     function increaseSalary(percentage){
//         return this.getSalary() + (this.getSalary() * percentage);
//     }

//     function incrementAge(){
//         return this.getAge() + 1;
//     }

//     return {
//         setAge: setAge,
//         setSalary: setSalary,
//         setName: setName,
//         increaseSalary: increaseSalary,
//         incrementAge: incrementAge,
//         setAddress: setAddress,
//         getAddress: getAddress
//     };
// }

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
//    }
//    let promise = job(true);
//    promise.then(function(data) {
//         console.log(data);
//     return job(false);})
//     .catch(function(error) {
//     console.log(error);
//     return 'Error caught';
//    });

// console.log('2' + 3);
// console.log(42 === 42.0);
// let stooges = [];
// stooges[0] = 'Samuel';
// stooges[1] = 'Abebe';
// stooges[4] = 'Girma';
// console.log(stooges[3]);
// stooges.unshift('not');
// console.log(stooges);
// stooges.shift();
// console.log()

var add = (function () {
    var counter = 0;
    return function () {
    return counter += 1;
    }
     })();

var add = (function(){
    var counter = 0;

    function add(){
        return counter = counter + 1;
    }

    function reset(){
        return counter = 0;
    }

    function print(){
        console.log(counter);
    }

    function make_adder(inc){
        return function add(inc){
            counter = counter + inc;
        }
    }
})();


// var a = 10;

// function f(){
//     var b = 20;
//     function g(){
//         var c = a + b;
//         return c;
//     }
//     b = 30;
//     return g;
// }

// myFunc = f();
// x = myFunc();
// alert(x);
// a = 100;
// y = myFunc();
// alert(y);


// var x = 1;
// function z(){
//     alert(x);
//     x = 2;
//     if(x > 0){
//         var x = 3;
//         alert(x);
//     }
//     var f = function(x){
//         alert(x);
//     }
//     console.log(x);
//     alert(x);
//     f(5);
// }
// alert(x)
// z();
// // console.log(x);
// alert(x);


// theEmp.giveRaise=function(raise){//Ans
//     theEmp.salary=getSalary() + raise;
//    console.log(theEmp.salary) ;
  
//  }//An

function changeImage(){
    var myimage = document.getElementById('imageid');
    myimage.src = 'otherimage.jpg';
}


var giveMePizza = function(){
    return new Promise(function(resolve,reject){
    if(1){
        resolve("This is true"); // then() will be called
    } else {
        reject("This is false"); // catch() will be called
    }
    })
    }

    
    giveMePizza()
    .then(data => console.log(data))
    .catch(err => console.error(err));
    console.log('I will run immediately after calling giveMePizza() and before any result arrives');

