var app =angular.module('wilderOlmosApp');
app.directive("personalWorks", function(){

  var personalWorksController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/personalWorks.html',
    controller : personalWorksController,
    controllerAs: 'personalWorksCtrl'
  };
});