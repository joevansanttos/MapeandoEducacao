function ConsumirPostUrl(yourUrl){

	var data = '{"url": ' + yourUrl +'}';

	data = data.valueOf();

	console.log(JSON.stringify(yourUrl));

	var data = JSON.stringify({"url": yourUrl});
 	var teste = JSON.stringify({"url": "http://educacao.dadosabertosbr.com/api/escola/26124297"});
 	console.log(data);
 	console.log(teste);
	var xhr = new XMLHttpRequest();

	 xhr.addEventListener("load", function() {
    	if (xhr.readyState === 4 && xhr.status === 200) {
	       	var json = JSON.parse(xhr.responseText);
	       	adicionaJSON(json);
	    }
    });

	xhr.open("POST", 'https://mapeandoeducadao.herokuapp.com/educacao', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(data);
}


