'use strict';

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
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function ($httpBackend) {
        var users = {
            "data": [
                {
                    "id": 1,
                    "username": "ArekZc",
                    "email": "a.zajac@clearcode.cc",
                    "gender": "male",
                    "displayName": "Arek Zając",
                    "updated_at": "2013-09-12T06:20:31+0000",
                    "created_at": "2013-09-12T06:20:31+0000"
                },
                {
                    "id": 2,
                    "username": "Koleś",
                    "email": "koles@dudemail.dm",
                    "gender": "male",
                    "displayName": "Koleś",
                    "updated_at": "2014-01-14T06:20:31+0000",
                    "created_at": "2014-01-12T06:20:31+0000"
                }
            ],
            "pagging": {
                "itemsCount": 1110
            }
        };
        $httpBackend.when('GET', '/users').respond(users);
        $httpBackend.when('GET', /.*/).passThrough();
    });
