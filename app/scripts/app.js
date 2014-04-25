'use strict';
var httpBackendGlobal = null;
angular
  .module('horseApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function ($httpBackend) {

        console.log($httpBackend, "$httpBackend");

        var projects = {
            "data": [
                {
                    "id": 1,
                    "key": "PROJ",
                    "name": "Project",
                    "leader": {
                        // User Item
                    },
                    "url": "project.com",
                    "updated_at": "2013-09-12T06:20:31+0000",
                    "created_at": "2013-09-12T06:20:31+0000"
                },
                {
                    "id": 2,
                    "key": "PROJ_2",
                    "name": "Project 2",
                    "leader": {
                        // User Item
                    },
                    "url": "project2.com",
                    "updated_at": "2012-09-12T06:20:31+0000",
                    "created_at": "2012-09-12T06:20:31+0000"
                },
                {
                    "id": 3,
                    "key": "PROJ_3",
                    "name": "Project 3",
                    "leader": {
                        // User Item
                    },
                    "url": "project3.com",
                    "updated_at": "2011-09-12T06:20:31+0000",
                    "created_at": "2011-09-12T06:20:31+0000"
                },
                {
                    "id": 4,
                    "key": "PROJ_4",
                    "name": "Project 4",
                    "leader": {
                        // User Item
                    },
                    "url": "project4.com",
                    "updated_at": "2010-09-12T06:20:31+0000",
                    "created_at": "2010-09-12T06:20:31+0000"
                },
                {
                    "id": 5,
                    "key": "PROJ_5",
                    "name": "Project 5",
                    "leader": {
                        // User Item
                    },
                    "url": "project5.com",
                    "updated_at": "2009-09-12T06:20:31+0000",
                    "created_at": "2009-09-12T06:20:31+0000"
                }
            ],
            "pagging": {
                "itemsCount": 5
            }
        };

        $httpBackend.when('GET', /projects\/[0-9]+/).respond(function (method, url) {
            var urlSegments = url.split('/'),
                id = parseInt(urlSegments[2]),
                response;
            projects.data.forEach(function (project) {
                if (project.id === id) {
                    response = project;
                }
            });
            return [200, response, {}];
        });
        $httpBackend.when('GET', '/projects').respond(projects);
        $httpBackend.when('POST', /projects\/[0-9]+/).respond(function (method, url, data) {
            var urlSegments = url.split('/'),
                id = parseInt(urlSegments[2]);
            projects.data.forEach(function (project) {
                if (project.id === id) {
                    projects.data.splice(projects.data.indexOf(project),1);
                }
            });
            projects.data.push(angular.fromJson(data));
            return [200, data];
        });
        $httpBackend.when('POST', '/projects').respond(function (method, url, data) {
            projects.data.push(angular.fromJson(data));
            return [200, projects];
        });
        $httpBackend.when('GET', /.*/).passThrough();

    })


;
