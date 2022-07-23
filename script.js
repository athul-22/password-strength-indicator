var input = document.getElementById("input");
var button = document.getElementById("button");

var weak = document.getElementById("weak");
var medium = document.getElementById("medium");
var strong = document.getElementById("strong");

let regExpWeak = /[a-z]/;
let regExpmedium = /[\d+]/;
let regExpstrong = /.[!,@,$,#,%,^,&,8]/;

// PASSWORD HIDE SHOW 

function showFun(){

    var input = document.getElementById("input");
    var button = document.getElementById("button");

    if(input.type == "password"){
        input.type = "text";
        button.value = "HIDE";
        
    }else{
        input.type = "password";
        button.value = "SHOW ";
    }
}

// FIRST FUNCTION

function triggerFun(){

    let regExpWeak = /[a-z]/;
    let regExpmedium = /[\d+]/;
    let regExpstrong = /.[!,@,$,#,%,^,&,8]/;

    var input = document.getElementById("input");

    var weak = document.getElementById("weak");
    var medium = document.getElementById("medium");
    var strong = document.getElementById("strong");
    var bottomText  = document.getElementById("bottom-text");

    var indicator = document.getElementsByClassName("indicator");

    if (input.value != ""){
        weak.style.display = "inline";
        medium.style.display = "inline";
        strong.style.display = "inline";

            if(input.value.length <= 1 && (input.value.match(regExpWeak) || input.value.match(regExpmedium) || input.value.match(regExpstrong)))no=1;
            if(input.value.length >= 3 && ((input.value.match(regExpWeak) && input.value.match(regExpmedium)) || (input.value.match(regExpstrong) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
            if(input.value.length >= 3 && input.value.match(regExpWeak) && input.value.match(regExpmedium) && input.value.match(regExpstrong))no=3;

        if(no==1){
            weak.style.display = "inline";
            medium.style.display = "inline";
            strong.style.display = "inline";
            
            weak.style.backgroundColor = "rgb(255, 59, 59)";
            medium.style.backgroundColor = "#ccc";
            strong.style.backgroundColor = "#ccc";
    
            bottomText.innerHTML= "PASSWORD IS WEAK";
            bottomText.style.color = "red";
        }

        if(no==2){
            weak.style.display = "inline";
            medium.style.display = "inline";
            strong.style.display = "inline";
            
            weak.style.backgroundColor = "rgb(255, 59, 59)";
            medium.style.backgroundColor = " rgb(244, 167, 14)";
            strong.style.backgroundColor = "#ccc";
    
            bottomText.innerHTML= "PASSWORD IS WEAK";
            bottomText.style.color = "orange";
        }

        if(no==3){
            weak.style.display = "inline";
            medium.style.display = "inline";
            strong.style.display = "inline";
    
            weak.style.backgroundColor = "rgb(255, 59, 59)";
            medium.style.backgroundColor = " rgb(244, 167, 14)";
            strong.style.backgroundColor = "rgb(2, 170, 16)";
    
            bottomText.innerHTML= "PASSWORD IS STRONG";
            bottomText.style.color = "green";
        }

    }   else{
        indicator.style.display = "none";

    }       
        setTimeout(triggerFun, 100);
  
}



//empty input box function

function emptyFun(){
    var input = document.getElementById("input");

    var weak = document.getElementById("weak");
    var medium = document.getElementById("medium");
    var strong = document.getElementById("strong");
    var bottomText  =document.getElementById("bottom-text");

    if(input.value == ""){
        weak.style.display = "none";
        medium.style.display = "none";
        strong.style.display = "none";

        medium.style.backgroundColor = "#ccc";
        strong.style.backgroundColor = "#ccc";

        bottomText.innerHTML= "";
        bottomText.style.color = "#ffffff00";
    }
}
