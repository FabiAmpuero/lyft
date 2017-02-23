var botonFlag = $("#btn-flag");
botonFlag.on("click",onFlagClick);

function onFlagClick() {
    //window.location.href="paises.html";
    $(location).attr("href","paises.html");
}


function init()
{
    var imgFlag = $("#img-flag");
    
    var select = localStorage.getItem('country_select'); 
    
    var country_url = paises[select].imageURL;
    console.log(country_url);
    imgFlag.src=country_url;
    
    // ------------------------- CODIGO
    var button = $("#next");
    button.on('click',onButtonClick);
}

// --------------------------------------
var inputNumber =$("#number");


function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.val());
    
    var mensajeNumber = $("#mensajeNumber");
    
    if(inputNumber.val() == '') {
        mensajeNumber.html("<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>")
    } else {
        mensajeNumber.html('');
        onCode();
        //location.href = 'signame.html';
        $(location).attr("href","signame.html");
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