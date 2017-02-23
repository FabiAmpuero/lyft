function init(){
    createList();
    var listaPaises = $("li");
    
    //listaPaises.each()
    
    for(var i=0; i<listaPaises.length-1; i++){
        listaPaises[i].addEventListener("click",onCountryClick);
    }
    
    buscador();
}

function createList() {
    var elListCountries = $("#list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        
        //elListCountries.innerHTML += listHtml;
        elListCountries.append(listHtml);
    }
}

// ----------------------------------------------- BUSCADOR
function buscador(){

    var search = $("#search"); 
    var ulListCountries = $("#list-countries");
    //problema de selectores
    var contacto = ulListCountries.children();
    console.log(contacto);
    console.log(search[0]);
    var forEach = Array.prototype.forEach;

    search[0].addEventListener("keyup", function(e){
        var choice = this.value;
        console.log(this.value);
        forEach.call(contacto, function(f){

           if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1){

               f.parentNode().style.display = "none";}   
           else
              f.parentNode().style.display = "block";        
        });
    }, 
    false);
}