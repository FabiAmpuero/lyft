var botonFlag = document.getElementById("btn-flag");
botonFlag.addEventListener("click",onFlagClick);

function onFlagClick() {
    window.location.href="../paises.html";
}


function init()
{
    var imgFlag = document.getElementById("img-flag");
    
    var select = localStorage.getItem('country_select'); 
    var country_url = paises[select].imageURL;
    
    imgFlag.src=country_url;
}