function init(){
var listaPaises = document.getElementsByTagName("li");
for(var i=0; i<listaPaises.length; i++){
    listaPaises[i].addEventListener("click",onCountryClick);
}

var imgFlag = document.getElementById("img-flag").src;
console.log(imgFlag);

function onCountryClick(evt) {
    var flagURL = evt.target.getElementsByTagName("img")[0].src;
    console.log(evt.target);
    //imgFlag.src=flagURL;
}

var imgFlag = document.getElementById("img-flag").src;
console.log(imgFlag);
}