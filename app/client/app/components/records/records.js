import angular from 'angular';
import uiRouter from 'angular-ui-router';
import recordsComponent from './records.component';

let recordsModule = angular.module('records', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('records', {
      url: '/records',
      component: 'records'
    });
})

.component('records', recordsComponent)

.name;

export default recordsModule;
