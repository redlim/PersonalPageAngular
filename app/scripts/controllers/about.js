"use strict";
angular.module('wilderOlmosApp').directive('about', function() {

  var aboutController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/about.html',
    controller : aboutController,
    controllerAs: 'aboutCtrl'
  };
});