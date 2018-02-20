var map;
var listaFederais = [];
var listaEstaduais = [];
var listaMunicipais = [];

var toogleMarks = 'todos';

function initMap() {
  var coordenada = {
    lat: -12.579,
    lng: -41.70,
  };
  icon = 'icon/schoolr.png';

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: coordenada,
  });

  listaMunicipais = setMarks(listaMunicipal());
  listaEstaduais = setMarks(listaEstadual());
  listaFederais = setMarks(listaFederal());

}

function setVisibleMarkers(lista, cond) {
  for (var i = 0; i < lista.length; i++) {
    lista[i].setMap(cond);
  }
}

function hideMapAll(cond) {

  if (toogleMarks != cond) {

    if (cond == 'municipal') {
      setVisibleMarkers(listaMunicipais, map);
      setVisibleMarkers(listaEstaduais, null);
      setVisibleMarkers(listaFederais, null);
    }else if (cond == 'estadual') {
      setVisibleMarkers(listaMunicipais, null);
      setVisibleMarkers(listaEstaduais, map);
      setVisibleMarkers(listaFederais, null);
    }else if (cond == 'federal') {
      setVisibleMarkers(listaMunicipais, null);
      setVisibleMarkers(listaEstaduais, null);
      setVisibleMarkers(listaFederais, map);
    }else if (cond == 'todos') {
      setVisibleMarkers(listaMunicipais, map);
      setVisibleMarkers(listaEstaduais, map);
      setVisibleMarkers(listaFederais, map);
    }
  }

  toogleMarks = cond;
}

function apenasMunicipal() {
  hideMapAll('municipal');
}

function apenasEstadual() {
  hideMapAll('estadual');
}

function apenasFederal() {
  hideMapAll('federal');
}

function todasEscolas() {
  hideMapAll('todos');
}

function createMarker(pos, icon, title, content, cod) {
  var marker = new google.maps.Marker({
    position: pos,
    icon: icon,
    map: map,
    title: title,
  });

  var infowindow = new google.maps.InfoWindow({
    content: content,
  });

  marker.addListener('mouseover', function () {
    infowindow.open(map, marker);
  });

  marker.addListener('mouseout', function () {
    infowindow.close(map, marker);
  });

  marker.addListener('click', function () {
    var url = 'http://educacao.dadosabertosbr.com/api/escola/' + cod;
    //url = 'php/proxy.php?' + url;
    getJSON(url, fillModal, errorHandler);
    openModal();
  });

  return marker;
}
