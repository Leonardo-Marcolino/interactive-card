

function userNameCard(){
var nameUser = document.getElementById("nameCard")
var nameCard = document.getElementById("userName")

nameCard.innerHTML = nameUser.value ; 
}

function userNumberCard(){
var cardnumber = document.getElementById('cardNumber')
var userCard = document.getElementById('numberCard')   

    cardnumber.innerHTML = userCard.value
}

function dateCard(){
    var date = document.getElementById("date")
    var datecard = document.getElementById("dateCard")

    datecard.innerHTML = date.value
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