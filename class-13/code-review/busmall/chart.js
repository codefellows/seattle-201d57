'use strict';

function buildChart(arr){
  var ctx = document.getElementById('myChart').getContext('2d');
  var labels = [];
  var percentages = [];
  var shown = [];
  var clicked = [];
  var colors = [];

  arr.forEach(el => {
    labels.push(el.name);
    clicked.push(el.clicked);
    shown.push(el.shown);

    var percentage = ((el.clicked/el.shown)*100).toFixed(2);
    if(isNaN(percentage)){
      percentages.push(0);
    }else{
      percentages.push(percentage);
    }
    //https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    colors.push(getRandomColor());
  });

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Busmall Research Results',
        data: percentages,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: 'label',
        callbacks: {
          label: function(tooltipItem) {
            console.log(tooltipItem.index);
            var displayed = `Times Shown: ${shown[tooltipItem.index]} \n Times Clicked: ${clicked[tooltipItem.index]} \n Percentage: %${percentages[tooltipItem.index]}`;
            return displayed;
          },
          afterLabel: function(){
            return 'hello world';
          },
          beforeLabel: function(){
            return 'I\'m the before label';
          },
          afterTitle: function () {
            return 'I\'m after the title';
          },
          beforeTitle: function () {
            return 'I\'m the before title';
          },
          title: function(){
            return ' I\'m the title';
          },
          afterBody: function () {
            return 'I\'m after the Body';
          },
          beforeBody: function () {
            return 'I\'m the before Body';
          },
          body: function () {
            return ' I\'m the body';
          }
        },
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Percentage',
            ticks : {
              suggestedMax: 100
            }
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
