class WinnerController {

  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  startAgain(){
    this.$rootScope.player1 = undefined;
    this.$rootScope.player2 = undefined;
    this.$rootScope.startStep = true;
    this.$rootScope.roundStep = false;
    this.$rootScope.winnerStep = false;
  }

}

WinnerController.$inject = ["$rootScope"];

export default WinnerController;
