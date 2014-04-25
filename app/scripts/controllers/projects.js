'use strict';
var testData = null;
angular.module('horseApp')
    .controller('ProjectsListCtrl', function ($scope, projects) {
        $scope.data = projects.get();
    })
    .controller('ProjectsShowCtrl', function ($scope, project, $routeParams) {
        $scope.data = project.get({
            'id' : $routeParams.id
        });
        console.log($routeParams, "$routeParams");
        console.log(project, "project");

        console.log (project.get($routeParams.id), "project.get($routeParams.id)");

    })

;
