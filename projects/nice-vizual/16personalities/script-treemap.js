Plotly.d3.csv('https://raw.githubusercontent.com/alamehan/visualization-sunburst-hobi/master/dataset/personalitiestreemap.csv', function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key]
    });
  }

  var data = [{
    type: "treemap",
    maxdepth: 2,
    pathbar: {
      visible: true,
      edgeshape: "/",
    },

    ids: unpack(rows, 'ids'),
    text: unpack(rows, 'text'),
    labels: unpack(rows, 'labels'),
    parents: unpack(rows, 'parents'),

    textposition: "middle center",
    hoverinfo: "none", //bukan labels, tapi label, lihat dokumentasi
    hovertext: "",

    insidetextfont: {
      color: '#FFFFFF'
    }
  }];

  var layout = {
    autosize: true,
    width: 920,
    height: 1120,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 56
    },
    font: {
      family: 'Roboto Condensed, sans-serif',
      size: 46,
    },
    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#19d3f3",
      "#e763fa", "#FECB52", "#FFA15A", "#FF6692", "#B6E880"
    ],
    paper_bgcolor: '#FFFFFF',
  }

  var config = {
    responsive: true
  }

  Plotly.newPlot('myDiv', data, layout, config);
})