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
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/issue/:id', {
        templateUrl: 'views/issue.html',
        controller: 'IssueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.run(function ($httpBackend) {
    var issues = {
        'data': [
            {
             'id': 1,
             'title':'Add new user',
             'description': 'Lorem impsum...',
             'status': 'In Progress',
             'type': 'Task',
             'prority': 'major',
             'assignee': 'Arek Zając',
             'updated_at': '2013-09-12T06:20:31+0000',
             'created_at': '2013-09-12T06:20:31+0000'
            },
            {
             'id': 2,
             'title':'Add new user',
             'description': 'Lorem impsum...',
             'status': 'In Progress',
             'type': 'Task',
             'prority': 'major',
             'assignee': 'Arek Zając',
             'updated_at': '2013-09-12T06:20:31+0000',
             'created_at': '2013-09-12T06:20:31+0000'
            },
        ],
        'paging': {
            'itemCount': 1110
        }
    };
        $httpBackend.when('GET', /issues\/[0-9]+/).respond(function (method, url) {
            var urlSegments = url.split('/'),
                id = parseInt(urlSegments[2]),
                response;
            issues.data.forEach(function (issue) {
                if (issue.id === id) {
                    response = issue;
                }
            });
            return [200, response, {}];
        });
    $httpBackend.when('GET', '/issues').respond(issues);
    $httpBackend.when('GET', /.*/).passThrough();
}
);



