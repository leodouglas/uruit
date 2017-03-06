class ScoreController {

  constructor($rootScope, $http, API) {
    this.$http = $http;
    this.API = API;
    this.$rootScope = $rootScope;
  }
}

ScoreController.$inject = ["$rootScope", "$http", "API"];

export default ScoreController;
