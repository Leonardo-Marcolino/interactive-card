

function userNameCard(){
var nameUser = document.getElementById("nameCard")
var nameCard = document.getElementById("userName")
var nameLimit = 20;

if (nameUser.value.length> nameLimit || nameUser.value.length < 6) {

    nameUser.style.border = "2px solid #ff0000";
    nameCard.innerHTML =  nameUser.value ; 


}else if(nameUser.value.length <= nameLimit && nameUser.value.length >= 6){
    
    nameUser.style.border = "1px solid #008000";
    nameCard.innerHTML =  nameUser.value   ;

}

}

function userNumberCard(){
    var numberImg = document.querySelector('#numberCardImg')
    var numberForm = document.querySelector('#numberCardForm')   

if(numberForm.value.length == 4 || numberForm.value.length == 9 || numberForm.value.length == 14 || numberForm.value.length == 19){
    
    numberImg.innerHTML = numberForm.value += " ";

}else if( numberForm.value.length <=19){

    numberForm.style.border = "2px solid #ff0000";
    
    
}else if( numberForm.value.length >= 20){
    
    numberForm.style.border = "2px solid #008000";
    numberForm.value = numberForm.value.substring(0, 20);
}

    console.log(numberForm.value.length)

}

function dateCard(){
    var date = document.getElementById("date")
    var datecard = document.getElementById("dateCard")

    if(date.value.length > 2 ){
        date.value = date.value.substring(0, 2);
    }else if(date.value > 12){

        alert("esse mês não é aceito");
        date.value = "";
        
    }else{
        dateCard.style.border = "2px solid #008000";
        datecard.innerHTML = date.value;
    }
    
    
    
}

function yearCard(){
    var year = document.getElementById("year")
    var yearcard = document.getElementById("yearCard") 

    yearcard.innerHTML = year.value
    
}

function userCvc(){
    var cvc = document.getElementById("cvc")
    var cvcCard = document.getElementById("cvcCard")
    
    cvcCard.innerHTML = cvc.value
}