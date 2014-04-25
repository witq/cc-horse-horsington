'use strict';

angular.module('horseApp')
  .controller('UsersCtrl', function ($scope, Users) {
    $scope.users = Users.get();
  });
