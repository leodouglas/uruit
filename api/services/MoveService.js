function MatchService() {

    const typicalMoves = [
        {move: "paper", kills: "rock"},
        {move: "rock", kills: "scissors"},
        {move: "scissors", kills: "paper"}
    ];

    this.getValidMoves = function () {
        var moves = [];
        typicalMoves.forEach(function (move) {
            moves.push(move.move);
        });
        return moves;
    };

    this.validMove = function (check) {
        typicalMoves.forEach(function (move) {
            if (move.move === check) {
                return true;
            }
        });
        return true;
    };

    this.play = function (player1Move, player2Move) {
        var result = undefined;
        typicalMoves.forEach(function (move) {
            if (move.move === player1Move && move.kills === player2Move) {
                result = 'player1';
                return true;
            } else if (move.move === player2Move && move.kills === player1Move) {
                result = 'player2';
                return true;
            }
        });
        return result;
    };

    this.checkWinner = function (match) {
        var player1Points = 0;
        var player2Points = 0;
        match.moves.forEach(function (move) {
            if (move !== null) {
                if (move.winner === 'player1') {
                    player1Points++;
                } else if (move.winner === 'player2') {
                    player2Points++;
                }
            }
        });
        if (player1Points >= 3) {
            return 'player1'
        } else if (player2Points >= 3) {
            return 'player2'
        }
        return null;
    };

    return this;
}

module.exports = new MatchService();
