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
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller:'MainCtrl'
      })
      .state('benefits', {
        url: '/benefits',
        templateUrl: 'views/benefits.html',
        controller: 'BenefitsCtrl'
      })
      .state('benefits.quality', {
        url: '/quality',
        template: 'Good Quality'
      })
      .state('benefits.support', {
        url: '/support',
        template: 'Good Support'
      })
      .state('benefits.accomodation', {
        url: '/accomodation',
        template: 'Good Accomodation'
      })
      .state('benefits.payment', {
        url: '/payment',
        template: 'Easy Payment'
      })
      .state('founders', {
        url: '/founders',
        templateUrl: 'views/founders.html',
        controller: 'FoundersCtrl'
      })
      .state('founders.yen', {
        url: '/yen',
        template: 'Founder 1'
      })
      .state('founders.masa', {
        url: '/masa',
        template: 'Founder 2'
      })
      .state('programs', {
        url: '/programs',
        templateUrl: 'views/programs.html',
        controller: 'ProgramsCtrl'
      })
      .state('activities', {
        url: '/activities',
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .state('partners', {
        url: '/partners',
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl'
      });
    $locationProvider.html5Mode(true);
  });