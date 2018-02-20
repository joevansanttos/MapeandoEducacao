// var getJSON = function(url, successHandler, errorHandler) {
//     var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//     xhr.open('GET', url, true);
//     xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://www.marcospaulo.buenotourinho.com.br/');
//     xhr.setRequestHeader('Access-Control-Allow-Method', 'GET');
//     xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
//     xhr.setRequestHeader('Access-Control-Max-Age', '60');
//     var data;

//     data = ConsumirPostUrl(url);

//     console.log(data);

//     if (data) {

//         successHandler && successHandler(data);
//     } else {
//         errorHandler && errorHandler(status);
//     }
//     // xhr.onreadystatechange = function() {

//     //     var status;
//     //     if (xhr.readyState == 4) {
//     //         status = xhr.status;
//     //         if (status == 200) {
//     //             data = xhr.responseText;
//     //             data = JSON.parse(xhr.responseText);

//     //             successHandler && successHandler(data);
//     //         } else {
//     //             errorHandler && errorHandler(status);
//     //         }
//     //     }
//     // };
//     // xhr.send();
// };

var getJSON = function(url, successHandler, errorHandler) {
    var data = '{"url": ' + url +'}';

    data = data.valueOf();

    console.log(JSON.stringify(url));

    var data = JSON.stringify({"url": url});
    var teste = JSON.stringify({"url": "http://educacao.dadosabertosbr.com/api/escola/26124297"});
    console.log(data);
    console.log(teste);
    var xhr = new XMLHttpRequest();

     xhr.addEventListener("load", function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
             data = xhr.responseText;
             data = JSON.parse(xhr.responseText);

            successHandler && successHandler(data);
        } else {
            errorHandler && errorHandler(status);
        }
    });

    xhr.open("POST", 'https://mapeandoeducadao.herokuapp.com/educacao', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
};

var setMarks = function(escolas) {

    var marks = []

    for (var i = 0; i < escolas.length; i++) {
        marks.push(buscarCoordenadas(escolas[i]));
    }

    return marks;
};

var buscarCoordenadas = function(data) {
    var latitude = data[0].lat;
    var longitude = data[0].lng;

    var coordenadas = {
        lat: latitude,
        lng: longitude,
    };
    var icon = data[1];
    var nome = data[2];

    var contentString = data[3];
    var codigo = data[4];

    return createMarker(coordenadas, icon, nome, contentString, codigo);
};

var errorHandler = function(status) {
    console.log('Algo não funcionou corretamente');
};
