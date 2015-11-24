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
      if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }

      var scrollPos = $(document).scrollTop();
      $('#mainNavBar a').each(function () {
        console.log(scrollPos);
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#mainNavBar ul li a').removeClass("active");
          currLink.parent().addClass("active");
        }
        else{
          currLink.parent().removeClass("active");
        }
      });
    });
  });

