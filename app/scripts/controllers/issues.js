'use strict';

angular.module('horseApp')
  .controller('IssuesCtrl', function ($scope, issues) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.issues = issues.get();
  });
