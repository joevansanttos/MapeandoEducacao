function CreateTableFromJSON() {
  var myParam = location.search.split('q=')[1];
  var cod = myParam.split('&');
  var newurl = 'php/proxy.php?a=http://educacao.dadosabertosbr.com/api/escola/' + cod[0];
  console.log(newurl)
  let url = 'php/proxy.php?a=http://educacao.dadosabertosbr.com/api/escola/26124297';
  fetch(newurl).then(response => response.json()).then(json => {
    var size = Object.keys(json).length;
    var table = document.getElementById('myTable');
    var j = 0;
    var i = 0;
    var x = 0;
    while (i < size) {
      var row = table.insertRow(x);
      var r = i;
      for (j = 0; j < 4; j++) {
        var cell1 = row.insertCell(j);
        cell1.innerHTML = Object.keys(json)[r];
        r++;
      }

      x++;
      var row = table.insertRow(x);
      for (j = 0; j < 4; j++) {
        var cell1 = row.insertCell(j);
        cell1.innerHTML = Object.values(json)[i];
        i++;
      }

      x++;
    }
  });
}

function showSidebar() {
    if (document.getElementById("sidebar").classList.contains('minimal')){
        var x = document.getElementById("sidebar");
        x.classList.remove('minimal');
        var y = document.getElementById("logo");
        y.classList.remove('minimal');
        var z = document.getElementById("content-wrapper");
        z.classList.remove("all");

    }else{
        var x = document.getElementById("sidebar");
        x.className += "minimal";
        var y = document.getElementById("logo");
        y.className += "minimal";
        var z = document.getElementById("content-wrapper");
        z.className += "all";
        var t = document.getElementsByClassName("navbar")[0];
        t.className[0] += "minimal";

    }
    
}

