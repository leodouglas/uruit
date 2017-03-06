class RoundController {

  constructor($rootScope, $http, API) {
    this.$http = $http;
    this.API = API;
    this.$rootScope = $rootScope;
    this.turn = 1;
    this.move = undefined;

    this.loadValidMoves();
  }

  loadValidMoves() {
    const self = this;
    self.$http({
      method: 'GET',
      url: self.API.URL + '/moves'
    }).then(function (response) {
      self.$rootScope.validMoves = response.data;
    });
  }

  getPlayer() {
    return this.turn === 1 ? this.$rootScope.player1 : this.$rootScope.player2;
  }

  play() {
    const self = this;
    if (self.move) {
      if (self.turn === 1) {
        self.turn = 2;
        self.player1Move = self.move;
      } else {
        self.turn = 1;
        self.player2Move = self.move;
        self.$http({
          method: 'POST',
          url: self.API.URL + '/matches/' + self.$rootScope.matchId + '/moves',
          data: {
            'player1_move': self.player1Move,
            'player2_move': self.player2Move
          }
        }).then(function (response) {
          if (response.data.finish) {
            self.$rootScope.lastWinner = response.data.data.winner;
            self.$rootScope.lastWinners.push({
              'round': self.$rootScope.round,
              'winner': response.data.data.winner
            });
            self.$rootScope.startStep = false;
            self.$rootScope.roundStep = false;
            self.$rootScope.winnerStep = true;
          }
        });
      }
      self.move = undefined;
    }
  }
}

RoundController.$inject = ["$rootScope", "$http", "API"];

export default RoundController;
