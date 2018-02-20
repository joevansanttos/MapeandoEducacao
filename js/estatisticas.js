function fillElement(cod, content) {

  var element = document.getElementById(cod);

  if (element) {
    setTimeout(function () {
      element.innerHTML = content;
    }, 1000);
  }
}

function fillPercent(cod, content) {
	 var i = document.createElement('i');
	 var classColor;

	 if(content > 0){
	 	i.className = 'fa fa-caret-up';
	 	classColor = 'text-green';
	 	content = ' ' + Math.abs(content) + '%';
	 }
	 else if (content < 0){
	 	i.className = 'fa fa-caret-down';
	 	classColor = 'text-red';
	 	content = ' ' + Math.abs(content) + '%';
	 }
	else{
		i.className = 'fa fa-caret-left';
		classColor = 'text-yellow';
	}

	 var t = document.createTextNode(content);

     var element = document.getElementById(cod);

    if (element) {
	    setTimeout(function () {
	      element.innerHTML = '';
	      element.appendChild(i);
	      element.appendChild(t);
	      element.className = 'description-percentage ' + classColor;

	     // element.textContent = content;
	      
	      console.log(element);
	    }, 1000);
	}
 }

 function fillProgress(cod, content){
 	 var element = document.getElementById(cod);

 	 element.style.width = content + '%';
 }

var numeroMunicipal = 272049;
var numeroEstadual = 37028;
var numeroFederal = 558;
var mediaBrasil = 513.4;
var mediaEstado;
var mediaCidade;
var mediaEscola;

fillElement('numero-federais', numeroFederal);
fillElement('numero-estaduais', numeroEstadual);
fillElement('numero-municipais', numeroMunicipal);
fillElement('numero-escolas', (numeroFederal + numeroEstadual + numeroMunicipal));
fillElement('media-brasil', mediaBrasil);
fillElement('numero-escolas-mapa', (listaMunicipal().length + listaFederal().length + listaEstadual().length));

var estadoSigla = "";
var estadoNome = "";
var cidadeSigla = "";
var cidadeNome = "";
var escolaCodigo = "";
var escolaNome = "";

var dataChart = [['', 'Brasil'], ['Anos Iniciais',  5.2 ], ['Anos Finais',  4.2  ]];
var dataChart2 = [['', 'Brasil'], ['Área',  513.4 ]];

function cidadesLista(content) {
  
  var ul = document.getElementById('dropdown-ul-cidades');

  for (cod in content) {
    var link = content[cod].substr(0, 7);
    var nome = content[cod].substr(8);
    li = montaLi('nomeUl', nome, link, 'estado=' + estadoSigla + '&' + 'cidade');
    ul.appendChild(li);
  }
}

function escolasLista(content) {
  
  var ul = document.getElementById('dropdown-ul-escolas');

  var cont = content[1];
  for (cod in cont) {
    var link = cont[cod].cod;
    var nome = cont[cod].nome;
    li = montaLi('nomeUl', nome, link, 'estado=' + estadoSigla + '&' + 'cidade=' + cidadeSigla + '&' +'escola');
    ul.appendChild(li);
  }
}

function estatisticasEstado(content) {
  idebAI = content.idebAI;
  idebAF = content.idebAF;
  mediaEstado = content.enemMediaGeral;
  dataChart[0].push(estadoNome);
  dataChart[1].push(idebAI);
  dataChart[2].push(idebAF);
  dataChart2[0].push(estadoNome);
  dataChart2[1].push(mediaEstado);

  var media;

  if(mediaEstado == 0){
  	media = " Sem Informações";
  }else{
  	media = (((mediaEstado  / mediaBrasil) * 100) - 100);
  	media = media.toFixed(2);
 	}

  fillElement('media-estado', mediaEstado);
  fillPercent('porcentagem-estado', media);

  if(cidadeUrl)
  	 fillCidade(cidadeUrl);
  else
  	updateCharts();
}

function estatisticasCidade(content) {
  nome = content.nomeLocal;
  idebAI = content.idebAI;
  idebAF = content.idebAF;
  mediaCidade = content.enemMediaGeral;
  dataChart[0].push(nome);
  dataChart[1].push(idebAI);
  dataChart[2].push(idebAF);
  dataChart2[0].push(nome);
  dataChart2[1].push(mediaCidade);

  var nav = document.getElementById("dropdown-cidade");
  nav.textContent = nome;

  var media;

  if(mediaCidade == 0){
  	media = " Sem Informações";
  }else{
  	media = (((mediaCidade  / mediaBrasil) * 100) - 100);
  	media = media.toFixed(2);
 	}

  fillElement('media-cidade', mediaCidade);
  fillPercent('porcentagem-cidade', media);

  if(escolaUrl)
  	 fillEscola(escolaUrl);
  else
  	updateCharts();
}

function estatisticasEscola(content) {

  nome = content.nome;
  idebAI = content.idebAI;
  idebAF = content.idebAF;
  mediaEscola = content.enemMediaGeral;
  portugues = content.enemPortugues;
  matematica = content.enemMatematica;
  humanas = content.enemHumanas;
  naturais = content.enemNaturais;
  redacao = content.enemRedacao;
  salas = content.salasExistentes;
  funcionarios = content.funcionarios;
  computadores = content.computadores;

  dataChart[0].push(nome);
  dataChart[1].push(idebAI);
  dataChart[2].push(idebAF);
  dataChart2[0].push(nome);
  dataChart2[1].push(mediaEscola);

  var nav = document.getElementById("dropdown-escola");
  nav.textContent = nome;

  var media;

  if(mediaEscola == 0){
  	media = " Sem Informações";
  }else{
  	media = (((mediaEscola  / mediaBrasil) * 100) - 100);
  	media = media.toFixed(2);

 	}

  fillElement('portugues', portugues.toFixed(2));
  fillElement('matematica', matematica.toFixed(2));
  fillElement('humanas', humanas.toFixed(2));
  fillElement('naturais', naturais.toFixed(2));
  fillElement('redacao', redacao.toFixed(2));

  fillProgress('porcentagem-portugues', (portugues / 10));
	fillProgress('porcentagem-matematica', (matematica / 10));
	fillProgress('porcentagem-humanas', (humanas / 10));
	fillProgress('porcentagem-naturais', (naturais / 10));
	fillProgress('porcentagem-redacao', (redacao / 10));

computadores
	fillElement('computadores', computadores);
	fillElement('salas', salas);
	fillElement('funcionarios', funcionarios);
	fillElement('enem', mediaEscola.toFixed(2));

  fillElement('media-escola', mediaEscola);
  fillPercent('porcentagem-escola', media);

  updateCharts();
}

function nomeiaAbaEstado(estado) {
	var nav = document.getElementById("dropdown-estado");

	estados.forEach(function (s) {
      if (s.Sigla == estado){
        estadoNome = s.Nome
        nav.textContent = estadoNome;
      }
    });
}

function getApi(url, fun){
	//url = 'php/proxy.php?' + url;
	//var cookie = getCookie(url);
	//if (cookie == "" || cookie == null){
		getJSON(url, fun, errorHandler);
	//} else {
		// fun && fun(JSON.parse(cookie));
	//}
}

function showDropDown(id){
	var dropdown = document.getElementById(id);

    dropdown.style.display = 'block';
}

function fillEstado(estado) {
  if (estado) {

  	estadoSigla = estado;
   
  	nomeiaAbaEstado(estado);

  	var url = 'http://educacao.dadosabertosbr.com/api/estatisticas?tipoLocal=EST&nomeLocal=' + estado + '&indice=0';
  	getApi(url, estatisticasEstado);


    var url = 'http://educacao.dadosabertosbr.com/api/cidades/' + estado;
    getApi(url, cidadesLista);

    showDropDown("dropdown-cidade");
  }
}

function fillCidade(cidade) {
  if (cidade) {

    cidadeSigla =  cidade;

    var url = 'http://educacao.dadosabertosbr.com/api/estatisticas?tipoLocal=MUN&codMunicipio=' + cidade + '&indice=0';
    getApi(url, estatisticasCidade);

    var url = 'http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?cidade=' + cidade + '&situacaoFuncionamento=1&dependenciaAdministrativa=3';
    getApi(url, escolasLista);

    showDropDown("dropdown-cidade");

    showDropDown("dropdown-escola");
  }
}

function fillEscola(escola) {
  if (escola) {

    escolaCodigo =  escola;

    var url = 'http://educacao.dadosabertosbr.com/api/escola/' + escola;
    getApi(url, estatisticasEscola);

    showDropDown("dropdown-cidade");

    showDropDown("dropdown-escola");

    var url = 'http://educacao.dadosabertosbr.com/api/escola/' + escola;
    //getApi(url, fillModal);
  }
}

function updateCharts(){
	updateChart(dataChart);
	updateChart2(dataChart2);
}

var estadoUrl = queryString('estado');
var cidadeUrl = queryString('cidade');
var escolaUrl = queryString('escola');


if (estadoUrl)
	fillEstado(estadoUrl);
else
	updateCharts();

//setCookie("username", user, 30);
