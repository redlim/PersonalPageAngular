"use strict";

angular.module('wilderOlmosApp').directive('footer', function() {

  var footerController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/footer.html',
    controller : footerController,
    controllerAs: 'footerCtrl'
  };
});