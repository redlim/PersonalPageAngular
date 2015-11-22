"use strict";

angular.module('wilderOlmosApp').directive('navBar', function() {

  var navBarController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/navbar.html',
    controller : navBarController,
    controllerAs: 'navBarCtrl'
  };
});