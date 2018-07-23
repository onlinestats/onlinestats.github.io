var Highcharts = require('highcharts')
var LinReg = require('online-linear-regression')
const lin = LinReg(2)

let data = []
let x = []
let y = []
let pred = []

/*
for (let i = 0; i < 1; i += Math.random() * 0.5) {
  let yi = 3 * i * i * i - 2 * i * i + 9 * i + 10 + Math.random() * 20 - 10
  x.push(i)
  y.push(yi)
  lin([i, i * i, i * i * i], yi)
  data.push([i, yi])
}

console.log('PREDICTION: ', lin([2, 4, 8]))

for (let i = 0; i <= 5.01; i += 0.2) {
  pred.push([i, lin([i, i * i, i * i * i])])
}
*/

let ch = Highcharts.chart('container', {
      xAxis: {
                min: -0.5,
                max: 5.5
            },
      yAxis: {
                min: 0,
                max: 500
            },
      title: {
                text: 'Scatter plot with regression line'
            },
      series: [{
                type: 'line',
                name: 'Regression Line',
                data: pred,
                marker: {
                              enabled: false
                          },
                states: {
                              hover: {
                                                lineWidth: 0
                                            }
                          },
                enableMouseTracking: false
            }, {
                      type: 'scatter',
                      name: 'Observations',
                      data: data,
                      marker: {
                                    radius: 4
                                }
                  }]
})

// chart.series[0].setData

let i = 0

setInterval(() => {
  i += Math.random() * 0.1
  let yi = 3 * i * i * i - 2 * i * i + 9 * i + 100 + Math.random() * 100 - 50
  lin([i, i * i, i * i * i], yi)
  
  pred = []
  for (let i = 0; i <= 5.01; i += 0.2) {
    pred.push([i, lin([i, i * i, i * i * i])])
  }

  data.push([i, yi])
  ch.series[0].setData(pred, true)
  ch.series[1].setData(data, true)
}, 500)


