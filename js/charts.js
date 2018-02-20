google.load("visualization", "1", {packages:["corechart"]});

var chart;
var data;
var data2;
var options;

function updateChart(newData) {

  data = newData;

  options = {
  //width: 700,
  height: 180,
  animation:{
    duration: 1000,
    easing: 'out',
    startup: true,
  },
  legend: { 
    position : 'bottom'
  },
  //vAxis: {minValue:0, maxValue:10},
   bars: 'horizontal',
};

  dataTable = new google.visualization.DataTable();

  // determine the number of rows and columns.
  var numRows = newData.length;
  var numCols = newData[0].length;

  // in this case the first column is of type 'string'.
  dataTable.addColumn('string', newData[0][0]);

  // all other columns are of type 'number'.
  for (var i = 1; i < numCols; i++)
    dataTable.addColumn('number', newData[0][i]);           

  // now add the rows.
  for (var i = 1; i < numRows; i++) 
    dataTable.addRow(newData[i]);            
  chart = new google.visualization.ColumnChart(document.getElementById('barchart_material'));
  // redraw the chart.
  chart.draw(dataTable, options);        
}

function updateChart2(newData) {

  data2 = newData;

  options = {
  //width: 700,
  height: 180,
  animation:{
    duration: 1000,
    easing: 'out',
    startup: true,
  },
  legend: { 
    position : 'bottom'
  },
  //vAxis: {minValue:0, maxValue:1000},
   bars: 'horizontal',
};

  dataTable = new google.visualization.DataTable();

  // determine the number of rows and columns.
  var numRows = newData.length;
  var numCols = newData[0].length;

  // in this case the first column is of type 'string'.
  dataTable.addColumn('string', newData[0][0]);

  // all other columns are of type 'number'.
  for (var i = 1; i < numCols; i++)
    dataTable.addColumn('number', newData[0][i]);           

  // now add the rows.
  for (var i = 1; i < numRows; i++) 
    dataTable.addRow(newData[i]);            
  chart = new google.visualization.ColumnChart(document.getElementById('barchart_material_2'));
  // redraw the chart.
  chart.draw(dataTable, options);        
}

window.addEventListener('resize', function(event) {
  updateChart(data);
  updateChart2(data2);
});
