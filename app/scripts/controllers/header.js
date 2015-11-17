angular.module('wilderOlmosApp').directive('header', function() {

  var headerController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/header.html',
    controller : headerController,
    controllerAs: 'headerCtrl'
  }
});