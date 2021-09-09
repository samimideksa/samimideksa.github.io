
var accountInfoList = [];

const makeCounter = function(){
    let name = document.getElementById('mytext').value;
    console.log(name);
    let balance = document.getElementById('deposit').value;
    console.log(balance);

    var account = new Account(name, balance);

    accountInfoList.push(account);

    console.log(typeof accountInfoList);
    console.log(accountInfoList.length);

}


class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
}

function createAccount(){
    makeCounter();
    var text = "";
    for(var i = 0; i < accountInfoList.length; i++){
        text += "Account name: " + accountInfoList[i].name + "  " + "Balance: " + accountInfoList[i].balance + "\n";
    }

    document.getElementById('mytextarea').value = text;

}
