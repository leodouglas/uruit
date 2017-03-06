class HomeController {

  constructor($rootScope, $http, API) {
    this.API = API;
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.$rootScope.startStep = true;
    this.$rootScope.roundStep = false;
    this.$rootScope.winnerStep = false;
  }

  start() {
    if (this.$rootScope.player1 && this.$rootScope.player2) {
      const $scope = this.$rootScope;
      this.$http({
        method: 'POST',
        url: this.API.URL + '/matches',
        data: {
          'player1': this.$rootScope.player1,
          'player2': this.$rootScope.player2
        }
      }).then(function (response) {
        $scope.matchId = response.data.result._id;
        if (!$scope.round) {
          $scope.round = 0;
          $scope.lastWinners = [];
        }
        $scope.round++;
        $scope.startStep = false;
        $scope.roundStep = true;
      });
    }
  }


}

HomeController.$inject = ["$rootScope", "$http", "API"];

export default HomeController;
