"use strict";

angular.module('wilderOlmosApp').directive('navBar', function() {

  var navBarController = function() {

    this.tab = 1;
    this.setActive= function(selectedTab){
      this.tab = selectedTab;
    };
    this.isActive = function(selected){
      return this.tab === selected;
    };

  };

  return {
    restrict: 'A',
    templateUrl: 'views/navbar.html',
    controller : navBarController,
    controllerAs: 'navbarCtrl'
  };
});