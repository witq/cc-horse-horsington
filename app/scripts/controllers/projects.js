'use strict';
var testData = null;
angular.module('horseApp')
  .controller('ProjectsCtrl', function ($scope, projects) {
    $scope.data = projects.get();
  });
