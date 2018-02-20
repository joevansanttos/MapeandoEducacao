var dropdown = document.getElementById("dropdown-estado");

dropdown.addEventListener("click", function(){

    var x = document.getElementById('dropdown-list-estado');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var x = document.getElementById('dropdown-list-mask');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
});

var dropdown = document.getElementById("dropdown-cidade");

dropdown.addEventListener("click", function(){

    var x = document.getElementById('dropdown-list-cidade');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var x = document.getElementById('dropdown-list-mask');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
});

var dropdown = document.getElementById("dropdown-escola");

dropdown.addEventListener("click", function(){

    var x = document.getElementById('dropdown-list-escola');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var x = document.getElementById('dropdown-list-mask');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
});

var mask = document.getElementById("dropdown-list-mask");

mask.addEventListener("click", function(){

    var x = document.getElementById('dropdown-list-estado');
    x.style.display = 'none';
    var x = document.getElementById('dropdown-list-cidade');
    x.style.display = 'none';
    var x = document.getElementById('dropdown-list-escola');
    x.style.display = 'none';


    var x = document.getElementById('dropdown-list-mask');

    x.style.display = 'none';
});

function searchEngine(){

  var search = document.querySelectorAll(".dropdown-search");

  search.forEach(function (input) {   

    input.addEventListener('input', function(){

      var target = input.value;
      
      var ul = document.querySelectorAll('.nomeUl');

       ul.forEach(function (li) { 

          var nome = li.textContent;

          var expressao = new RegExp(target, 'i');
          if (!expressao.test(nome)) {
            li.classList.add('invisivel');
          } else {
            li.classList.remove('invisivel');
          }

      });
    });
  });
}

var estados = [{
    "ID": "1",
    "Sigla": "AC",
    "Nome": "Acre"
},
     {
    "ID": "2",
    "Sigla": "AL",
    "Nome": "Alagoas"
},
     {
    "ID": "3",
    "Sigla": "AM",
    "Nome": "Amazonas"
},
     {
    "ID": "4",
    "Sigla": "AP",
    "Nome": "Amapá"
},
     {
    "ID": "5",
    "Sigla": "BA",
    "Nome": "Bahia"
},
     {
    "ID": "6",
    "Sigla": "CE",
    "Nome": "Ceará"
},
     {
    "ID": "7",
    "Sigla": "DF",
    "Nome": "Distrito Federal"
},
     {
    "ID": "8",
    "Sigla": "ES",
    "Nome": "Espírito Santo"
},
     {
    "ID": "9",
    "Sigla": "GO",
    "Nome": "Goiás"
},
     {
    "ID": "10",
    "Sigla": "MA",
    "Nome": "Maranhão"
},
     {
    "ID": "11",
    "Sigla": "MG",
    "Nome": "Minas Gerais"
},
     {
    "ID": "12",
    "Sigla": "MS",
    "Nome": "Mato Grosso do Sul"
},
     {
    "ID": "13",
    "Sigla": "MT",
    "Nome": "Mato Grosso"
},
     {
    "ID": "14",
    "Sigla": "PA",
    "Nome": "Pará"
},
     {
    "ID": "15",
    "Sigla": "PB",
    "Nome": "Paraíba"
},
     {
    "ID": "16",
    "Sigla": "PE",
    "Nome": "Pernambuco"
},
     {
    "ID": "17",
    "Sigla": "PI",
    "Nome": "Piauí"
},
     {
    "ID": "18",
    "Sigla": "PR",
    "Nome": "Paraná"
},
     {
    "ID": "19",
    "Sigla": "RJ",
    "Nome": "Rio de Janeiro"
},
     {
    "ID": "20",
    "Sigla": "RN",
    "Nome": "Rio Grande do Norte"
},
     {
    "ID": "21",
    "Sigla": "RO",
    "Nome": "Rondônia"
},
     {
    "ID": "22",
    "Sigla": "RR",
    "Nome": "Roraima"
},
     {
    "ID": "23",
    "Sigla": "RS",
    "Nome": "Rio Grande do Sul"
},
     {
    "ID": "24",
    "Sigla": "SC",
    "Nome": "Santa Catarina"
},
     {
    "ID": "25",
    "Sigla": "SE",
    "Nome": "Sergipe"
},
     {
    "ID": "26",
    "Sigla": "SP",
    "Nome": "São Paulo"
},
     {
    "ID": "27",
    "Sigla": "TO",
    "Nome": "Tocantins"
}];

var x = document.getElementById('dropdown-list');

var ul = document.getElementById('dropdown-ul-estados');

estados.forEach(function (s) {
    s.Nome.toLowerCase();

    li = montaLi('nomeUl', s.Nome, s.Sigla, 'estado');
    ul.appendChild(li);
});

function montaLi(classe, dado, link, local) {
  var li = document.createElement('li');
  li.classList.add(classe);

  var node = document.createElement('a');
  node.setAttribute('href', 'estatisticas.html?' + local + '=' + link);
  node.textContent = dado;

  li.appendChild(node);

  return li;
}

searchEngine();
