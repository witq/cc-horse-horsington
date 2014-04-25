'use strict';

angular.module('horseApp')
  .controller('IssueCtrl', function ($scope, $route, issues) {
        $scope.issueId = $route.current.params.id;
        $scope.issue = issues.get({Id: $scope.issueId});

  });
