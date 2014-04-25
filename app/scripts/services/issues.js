'use strict';

angular.module('horseApp')
  .factory('issues', function ($resource) {
    return $resource(
        '/issues/:Id',
        { Id: '@Id'}
    );
  });
