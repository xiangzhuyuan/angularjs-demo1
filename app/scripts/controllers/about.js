'use strict';

/**
 * @ngdoc function
 * @name myAngularDemo1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularDemo1App
 */
angular.module('myAngularDemo1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
