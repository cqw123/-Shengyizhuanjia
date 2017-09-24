/**
 * Created by admin on 2017/9/24.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('HomeCtrl',['$scope',function ($scope) {
      $scope.$on('$ionicView.Enter',function () {
        var user = localStorageService.get('User');
        if(user .isLogin ===false){
          $state.go('login');
        }
      });
    }]);
})();
