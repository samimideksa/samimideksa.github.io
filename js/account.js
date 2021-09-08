
var  accountInfoList = [];

const makeCounter = function(){
    let name = document.getElementById('mytext').value;
    let balance = document.getElementById('deposit').value;

    function createAccount(AccountName, AccountBalance){
        this.AccountName = AccountName;
        this.AccountBalance = AccountBalance;
    }

    var account = createAccount(name, balance);

    accountInfoList.push(account);

}

// document.getElementById('createAccount').onclick = createAccount;

function createAccount(){
    makeCounter();
    // console.log(account1);
    // const account2 = makeCounter(a)
    // accountInfoList.push(account1);
    console.log(typeof accountInfoList)
    for(var i = 0; i < accountInfoList.length; i++){
        console.log("Account Name: "  + accountInfoList[i].AccountName + "Balance: " + accountInfoList[i].balance);
    }
    // document.getElementById('mytextarea').value = accountInfoList[0].name;

}
