function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function fillModal(content) {

  abastecimentoAgua(content);
  abastecimentoEnergia(content);
  abastecimentoLixo(content);
  abastecimentoEsgoto(content);

  document.getElementById('nome').setAttribute('href', 'estatisticas.html?' + 'estado=' + content['siglaUf'] + '&cidade=' + content['codMunicipio'] +'&escola=' + content['cod']);

  for (cod in content) {
    var element = document.getElementById(cod);

    if (element) {
      if ((typeof (content[cod])) == 'boolean') {

        if (content[cod]) {
          element.innerHTML = 'Sim';
          element.style.color = 'green';
        } else {
          element.innerHTML = 'Nao';
          element.style.color = 'red';
        }
      } else {
        element.innerHTML = content[cod];
      }
    }
  }
}

function abastecimentoAgua(content) {
  var expressao = new RegExp('agua', 'i');
  var element = document.getElementById('abastecimentoAgua');
  var stringAgua = 'Não Identificado';

  if (element) {
    for (cod in content) {
      switch (cod) {
        case 'aguaPublica':

          if (content[cod])
            stringAgua = 'Rede Publica';
          break;
        case 'aguaPocoArtesiano':
          if (content[cod])
            stringAgua = 'Poço Artesiano';
          break;
        case 'aguaCacimba':
          if (content[cod])
            stringAgua = 'Água de Cacimba';
          break;
        case 'aguaRio':
          if (content[cod])
            stringAgua = 'Água de Rio';
          break;
        case 'aguaInexistente':
          if (content[cod])
            stringAgua = 'Inexistente';
          break;
      }
    }

    element.innerHTML = stringAgua;
  }
}

function abastecimentoEnergia(content) {
  var element = document.getElementById('abastecimentoEnergia');
  var stringEnergia = 'Não Identificado';

  if (element) {
    for (cod in content) {
      switch (cod) {
        case 'energiaPublica':

          if (content[cod])
            stringEnergia = 'Rede Publica';
          break;
        case 'energiaGerador':
          if (content[cod])
            stringEnergia = 'Gerador';
          break;
        case 'energiaOutros':
          if (content[cod])
            stringEnergia = 'Outros';
          break;
        case 'energiaInexistente':
          if (content[cod])
            stringEnergia = 'Inexistente';
          break;
      }
    }

    element.innerHTML = stringEnergia;
  }
}

function abastecimentoEsgoto(content) {
  var element = document.getElementById('abastecimentoEsgoto');
  var stringEsgoto = 'Não Identificado';

  if (element) {
    for (cod in content) {
      switch (cod) {
        case 'esgotoPublico':

          if (content[cod])
            stringEsgoto = 'Rede Publica';
          break;
        case 'esgotoFossa':
          if (content[cod])
            stringEsgoto = 'Fossa';
          break;
        case 'esgotoInexistente':
          if (content[cod])
            stringEsgoto = 'Inexistente';
          break;
      }
    }

    element.innerHTML = stringEsgoto;
  }
}

function abastecimentoLixo(content) {
  var element = document.getElementById('abastecimentoLixo');
  var stringLixo = 'Não Identificado';

  if (element) {
    for (cod in content) {
      switch (cod) {
        case 'lixoColetaPeriodica':
          if (content[cod])
            stringLixo = 'Coleta Periódica';
          break;
        case 'lixoQueima':
          if (content[cod])
            stringLixo = 'Queima';
          break;
        case 'lixoJogaOutraArea':
          if (content[cod])
            stringLixo = 'Descarta em Outra Área';
          break;
        case 'lixoRecicla':
          if (content[cod])
            stringLixo = 'Recicla';
          break;
        case 'lixoEnterra':
          if (content[cod])
            stringLixo = 'Enterra';
          break;
        case 'lixoOutros':
          if (content[cod])
            stringLixo = 'Outros';
          break;
      }
    }

    element.innerHTML = stringLixo;
  }
}
