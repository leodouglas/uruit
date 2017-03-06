import angular from 'angular';
import Home from './home/home';
import Records from './records/records';
import Round from './home/round/round';
import Winner from './home/winner/winner';
import Score from './home/score/score';

let componentModule = angular.module('app.components', [
  Home,
  Records,
  Round,
  Score,
  Winner
])

.name;

export default componentModule;
