var botonFlag = document.getElementById("btn-flag");
botonFlag.addEventListener("click",onFlagClick);

function onFlagClick() {
    window.location.href="paises.html";
}


function init()
{
    var imgFlag = document.getElementById("img-flag");
    
    var select = localStorage.getItem('country_select'); 
    var country_url = paises[select].imageURL;
    
    imgFlag.src=country_url;
    
    // ------------------------- CODIGO
    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);
}

// --------------------------------------
var inputNumber = document.getElementById("number");


function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.value);
    
    var mensajeNumber = document.getElementById("mensajeNumber");
    
    if(inputNumber.value == '') {
        mensajeNumber.innerHTML = "<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>"
    } else {
        mensajeNumber.innerHTML = '';
        onCode();
        location.href = 'signame.html';
    }
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}


function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 