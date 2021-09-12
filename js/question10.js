var employee = (function (){
    var name = ''; var age = 0; var salary = 0;

    var setName = function setName(name){
        this.name = name;
    }

    var setSalary = function setSalary(salary){
        this.salary = salary;
    }

    var setAge = function setAge(age){
        this.age = age;
    }

    function getAge(){
        return this.age;
    }

    function getSalary(){
        return this.salary;
    }

    function getName(){
        return this.name;
    }

    var increaseSalary = function increaseSalary(percentage){
        return this.getSalary(1 + percentage / 100) + this.getSalary;
    }

    var incrementAge = function incrementAge(){
        return this.getAge() + 1;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
    
})

return{
    Open: Open,
    Deposit: Deposit
}

return {
    giveRaise: giveRaise
}