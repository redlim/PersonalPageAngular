"use strict";

var app= angular.module('wilderOlmosApp');
app.directive('knowledge', function() {

  var knowledgeController = function($scope) {

    this.active ="Javascript";
    var localValues = this;
    this.data = [{
      name: 'Javascript',
      details: 'NodeJs, AngularJs, d3Js',
      value: 70
    },
      {
        name: 'HTML + css3',
        details: 'Bootstrap',
        value: 90
      },
      {
        name: 'Java',
        value: 90,
        details: 'La programación orientada a objetos la aprendí con este lenguaje',
        color: 'blue'
      },
      {
        name: 'Linux',
        value: 65,
        details: 'No supe lo que era la felicidad hasta que instalé linux en mi pc'
      },
      {
        name: 'Ruby On Rails',
        value: 55,
        details: 'Ni Houdini hace lo que hace Ruby'
      },
      {
        name: 'Bases de datos',
        value: 75,
        details: 'Mysql es mi gran aliado, aunque estoy empezando a investigar Nosql'
      }];

    $scope.initialValue = this.data[0];
    // El controlador de la gráfica
    var width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;


    var pie = d3.layout.pie()
      .value(function (d) {
        return d.value;
      })
      .sort(null);

    var scale = function (data) {

      var object = [];
      var valueComp = 100 - data.value;
      object.push(data);
      object.push({
        name: 'complementario',
        value: valueComp
      });
      return object;
    };

    var arc = d3.svg.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);

    var svg = d3.select("#graphic").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("font-size","30px")
      .text("%" + localValues.data[0].value);

    var path = svg.selectAll("path")
      .data(pie(scale(localValues.data[0])))
      .enter()
      .append("path");

    path.transition()
      .duration(500)
      .attr("fill", function (d) {
        if (d.data.name === 'complementario')
          return '#27313b'; else return '#3d6678';
      })
      .attr("d",arc)
      .each(function(d) { this._current = d; });

    // actualización

    this.click = function (data) {
      this.active =data.name;
      path.data(pie(scale(data)));
      path.transition().duration(750).attrTween("d", arcTween);
      svg.select("text")
        .attr("text-anchor", "middle")
        .text("%" + data.value);

      $scope.initialValue = data;
    };

    function arcTween(a) {
      var i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return arc(i(t));
      };

    }
  };
  return {
    restrict: 'A',
    templateUrl: 'views/knowledge.html',
    controller : knowledgeController,
    controllerAs: 'knowledgeCtrl'
  };
});

 app.directive('circle',function(){

  var circleController = function(){

    this.data = [{
        name : 'javascript',
        details : 'NodeJs, AngularJs',
        value : 70
      },
      {
        name : 'HTML + css3',
        details:'',
        value : 90
      },
      {
        name : 'Java',
        value : 90,
        details : 'La programación orientada a objetos la aprendí con este lenguaje'
      },
      {
        name : 'Linux',
        value : 65,
        details : 'No supe lo que era la felicidad hasta que instalé linux en mi pc'
      },
      {
        name : 'Ruby On Rails',
        value : 55,
        details : 'Ni Houdini hace lo que hace Ruby'
      },
      {
        name :'Bases de datos',
        value : 75,
        details : 'Mysql mi gran aliado, aunque estoy empezando a investigar Nosql'
      }];

  };

  return{
    restrict :'A',
    template : '  <div id="java" data-pct1="{{circleCtrl.data[1].value}}">' +
    '<svg id="svgJava" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  ' +
    ' <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>  ' +
    '<circle id="barJava" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>  ' +
    '</svg> ' +
    '</div> <h4 class="service-heading">{{circleCtrl.data[2].name}}</h4> ' +
    '<p class="text-muted">{{circleCtrl.data[2].details}}</p> ' +
    '</div>',
    controller : circleController,
    controllerAs: 'circleCtrl'
  };

});
