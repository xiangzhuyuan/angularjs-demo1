'use strict';

/**
 * @ngdoc function
 * @name myAngularDemo1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularDemo1App
 */
angular.module('myAngularDemo1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
