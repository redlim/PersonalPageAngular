'use strict';

/**
 * @ngdoc function
 * @name wilderOlmosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wilderOlmosApp
 */
angular.module('wilderOlmosApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
.controller('NavbarCtrl',function(){
    this.tab = 1;
    this.selectedTab = function(selectedTab){
      this.tab = selectedTab
    };
    this.isSelected = function(selected){
      return this.tab === selected
    }
  });
