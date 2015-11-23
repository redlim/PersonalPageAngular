"use strict";
angular.module('wilderOlmosApp').directive('contact', function() {

  var contactController = function(){

    this.showForm = true;
    this.message = "";

    this.contactSubmit = function(){

      this.showForm = false;
      this.message = "Mensaje enviado, te responderé en la mayor brevedad"
    }
  };

  return {
    restrict: 'A',
    templateUrl: 'views/contact.html',
    controller : contactController,
    controllerAs: 'contactCtrl'
  };
});