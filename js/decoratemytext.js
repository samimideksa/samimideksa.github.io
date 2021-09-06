function booyah1(){
    alert('BOOYAH!');
}


function booyah2(){
    window.clearTimeout(booyah2);
    window.setTimeout(booyah1, 2000);

}

function makebold(){
    var currentfontsize = window.getComputedStyle(document.getElementById("input-text")).fontSize;
    var current = parseInt(currentfontsize);
    var updatedfontsize = current + 2;
    var newfont = updatedfontsize;
    document.getElementById("input-text").style.fontSize = newfont+'px';

}


function translatePigLatin() {

    var str = document.getElementById("input-text").value;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ay";
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    }
    document.getElementById("input-text").value = newStr;
}


function malkovitch(){
    var str = document.getElementById("input-text").value;
    var array1 = str.trim().split(" ");
    var arrayLength = array1.length;
    for (var i = 0; i < arrayLength; i++) {
        if(array1[i].length >= 5){
            array1[i] = 'Malkovitch';
        }
    }

    var s = array1.slice(0, array1.length - 1).join(' ') + " " + array1.slice(-1);
    document.getElementById("input-text").value = s;

}


function displayalert(){

    if(document.getElementById("bling").checked == true){
        document.getElementById("input-text").style.fontWeight = "bold";
        document.getElementById("input-text").style.color = "green";
        document.getElementById("input-text").style.textDecoration = "underline";
        document.getElementById("hello").style.backgroundImage = "url('Images1/background.png')";
    }
    else{
        document.getElementById('input-text').style.fontWeight = "normal";
        document.getElementById("input-text").style.color = "black";
        document.getElementById("input-text").style.textDecoration = "none";
    }
    
}