function init() {
    
}


var miMapa;
function initMap() {
    
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Laboratoria</h1>'+
      '<div id="bodyContent">'+
      '<p><b>laboratoria</b></p>'+
      '</div>'+
      '</div>';
    
    
    
    miMapa = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: {
                lat: -16.457736, 
                lng: -71.530440
            },
            zoom: 16
        }
    );
    
    var latLongPazPeru = {
        lat: -16.457736, 
        lng: -71.530440
    };
    
    var pazPeru = new google.maps.Marker({
    position: latLongPazPeru,
    map: miMapa,
    label: "m",
    title: 'Aqui estamos!!!'
    });
    
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    
    pazPeru.addListener('click', function() {
    infowindow.open(map, pazPeru);
  });
}

