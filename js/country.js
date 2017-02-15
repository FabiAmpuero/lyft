function init(){
    var listaPaises = document.getElementsByTagName("li");
    for(var i=0; i<listaPaises.length; i++){
        listaPaises[i].addEventListener("click",onCountryClick);
    }
    createList();
}


console.log(paises);

function createList() {
    var elListCountries = document.getElementById("list-countries");
    for(var i in paises){
        var listHtml= 
            '<a href="signup.html"><li>'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '</li><hr></a>';
        elListCountries.innerHTML += listHtml;
    }
}

function onCountryClick(evt) {
    var flagURL = evt.target.getElementsByTagName("img")[0].src;
    console.log(flagURL);
    console.log(imgFlag +"oli");
}

function countrySelection() {
    imgFlag = document.getElementById("img-flag").src;
    
    //imgFlag ="flagURL";
    console.log(imgFlag);
}

var search = document.getElementById("search");
var ulListCountries = document.getElementById("list-countries");

var contacto = ulListCountries.getElementsByClassName("country-name");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       console.log(f.parentNode.parentNode);
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.parentNode.style.display = "none";   
       else
          f.parentNode.parentNode.style.display = "block";        
   });
}, 
false);