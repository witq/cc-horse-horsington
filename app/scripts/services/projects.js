'use strict';

angular.module('horseApp')
  .factory('projects', function ($resource) {
        return $resource(
            '/projects'
        );
  });
