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

    $(window).scroll(function() {
      $('.fromLeft').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("slideLeft");
        }
      });
      $('.fromRight').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("slideRight");
        }
      });
      $('#graphic').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("hatch");
        }
      });
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
.controller('NavbarCtrl',function(){
    this.tab = 1;
    this.selectedTab = function(selectedTab){
      this.tab = selectedTab;
    };
    this.isSelected = function(selected){
      return this.tab === selected;
    };
  });

