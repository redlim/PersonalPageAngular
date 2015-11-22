"use strict";
angular.module('wilderOlmosApp').directive('contact', function() {

  var contactController = function(){

  };

  return {
    restrict: 'A',
    templateUrl: 'views/contact.html',
    controller : contactController,
    controllerAs: 'contactCtrl'
  };
});