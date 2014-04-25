'use strict';

angular.module('horseApp')
  .factory('projects', function ($resource) {
        return $resource(
            '/projects'
        );
  })
    .factory('project', function ($resource) {
        return $resource(
            '/projects/:Id',
            { Id: '@Id' }
        );
    })

;
