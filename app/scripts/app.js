'use strict';


angular.module('himawariApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
      .state('index.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
      })
      .state('staff', {
        url: '/staff',
        templateUrl: 'views/staff.html',
        controller: 'StaffCtrl'
      });
    $locationProvider.html5Mode(true);
  });




