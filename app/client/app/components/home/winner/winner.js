import angular from 'angular';
import uiRouter from 'angular-ui-router';
import winnerComponent from './winner.component';

let winnerModule = angular.module('winner', [
  uiRouter
])

.component('winner', winnerComponent)

.name;

export default winnerModule;
