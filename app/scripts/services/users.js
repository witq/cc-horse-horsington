'use strict';

angular.module('horseApp')
  .factory('Users', function Users($resource) {
      return $resource(
        '/users/:Id',
        {Id: '@Id'}
      );
  });
