const form = document.querySelector('form')
const span = document.querySelectorAll('#spanRequired')



form.addEventListener('submit', (event)=>{
    event.preventDefault();
    userNameCard();
    userNumberCard();
    dateCard();
    yearCard();
    userCvc();

})


function userNameCard(){
var nameUser = document.getElementById("nameCard")
var nameCard = document.getElementById("userName")
var nameLimit = 20;

if (nameUser.value.length> nameLimit || nameUser.value.length < 6) {

    nameUser.style.border = "2px solid #ff0000";
    nameCard.innerHTML =  nameUser.value.toUpperCase();
    span[0].style.display = "block"; 

    }else if(nameUser.value.length <= nameLimit && nameUser.value.length >= 6){
    
    nameUser.style.border = "2px solid #008000";
    nameCard.innerHTML =  nameUser.value.toUpperCase();
    span[0].style.display = "none"; 

    }
}

function userNumberCard(){
    var numberImg = document.querySelector('#numberCardImg')
    var numberForm = document.querySelector('#numberCardForm')   

if(numberForm.value.length == 4 || numberForm.value.length == 9 || numberForm.value.length == 14 || numberForm.value.length == 19){
    
    numberImg.innerHTML = numberForm.value += " ";

}else if( numberForm.value.length <=19){

    numberForm.style.border = "2px solid #ff0000";
    span[1].style.display = "block"; 
    
    
}else if( numberForm.value.length >= 20){
    
    numberForm.style.border = "2px solid #008000";
    numberForm.value = numberForm.value.substring(0, 20);
    span[1].style.display = "none"; 
    }
}

function dateCard(){
    var date = document.getElementById("date")
    var datecard = document.getElementById("dateCard")

    if(date.value.length > 2 || date.value.length == 0 ){
        
        date.value = date.value.substring(0, 2);
        date.style.border = "2px solid #ff0000";
        span[2].style.display = "block"; 

    }else if(date.value > 12){

        alert("esse mês não é aceito");
        date.value = "";
        
    }else{
        
        datecard.innerHTML = date.value;
        date.style.border = "2px solid #008000";
        span[2].style.display = "none"; 

    }   
}

function yearCard(){
    var year = document.getElementById("year")
    var yearCard = document.getElementById("yearCard") 
    const date = new Date();

    var yearToday = date.getFullYear() - 2000 ;

    if(year.value.length > 2 || year.value == 0  ){

        year.style.border = "2px solid #ff0000";
        year.value = year.value.substring(0, 2);
        span[2].style.display = "block"; 
      

    }else if(year.value > yearToday + 8 || year.value < yearToday){

        year.style.border = "2px solid #ff0000";
        span[2].style.display = "block"; 
        
    }else{
        
        yearCard.innerHTML = year.value;
        year.style.border = "2px solid #008000";
        span[2].style.display = "none"; 
    
    }   
}

function userCvc(){
    var cvc = document.getElementById("cvc")
    var cvcCard = document.getElementById("cvcCard")

    if (cvc.value.length < 3 ) {

        cvcCard.innerHTML = cvc.value
        cvc.value = cvc.value.substring(0, 3)
        cvc.style.border = "2px solid #ff0000"
        span[3].style.display = "block"; 
        

    }else{

    cvc.value = cvc.value.substring(0, 3)
    cvc.style.border = "2px solid #008000";
    cvcCard.innerHTML = cvc.value
    span[3].style.display = "none"; 

    }
    
}