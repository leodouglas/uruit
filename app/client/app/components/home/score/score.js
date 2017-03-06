import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scoreComponent from './score.component';

let scoreModule = angular.module('score', [
  uiRouter
])

.component('score', scoreComponent)

.name;

export default scoreModule;
