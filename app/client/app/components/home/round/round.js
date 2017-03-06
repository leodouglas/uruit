import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roundComponent from './round.component';

let roundModule = angular.module('round', [
  uiRouter
])

.component('round', roundComponent)

.name;

export default roundModule;
