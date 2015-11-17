angular.module('wilderOlmosApp').directive('navBar', function() {

  var navBarController = function($scope,$document){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/navbar.html',
    controller : navBarController,
    controllerAs: 'navBarCtrl'
  }
});