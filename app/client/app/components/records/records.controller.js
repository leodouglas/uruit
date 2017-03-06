class RecordsController {

  constructor($rootScope, $http, API) {
    this.API = API;
    this.$rootScope = $rootScope;
    this.$http = $http;

    this.$http({
      method: 'GET',
      url: this.API.URL + '/records'
    }).then(function (response) {
      $rootScope.records = response.data;
    });
  }
}

RecordsController.$inject = ["$rootScope", "$http", "API"];

export default RecordsController;
