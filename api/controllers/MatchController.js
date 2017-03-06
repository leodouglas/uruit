//This Controller deals with all Match functionalities
function MatchController() {
    var Match = require('../models/MatchModel');
    var MoveService = require('../services/MoveService');

    // Creating New Match
    this.createMatch = function (req, res, next) {
        var player1 = req.params.player1;
        var player2 = req.params.player2;

        Match.create({player1: player1, player2: player2, moves: []}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(500, {'error': err});
            }
            else {
                return res.send({'result': result, 'status': 'successfully saved'});
            }
        });
    };

    // Fetching Details of All Matches
    this.getMatches = function (req, res, next) {

        Match.find({}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(500, {'error': err});
            }
            else {
                return res.send(result);
            }
        });
    };

    // Fetching Details of Match
    this.getMatch = function (req, res, next) {
        var id = req.params.id;

        Match.find({_id: id}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(500, {'error': err});
            }
            else {
                if (result[0]) {
                    return res.send(result[0]);
                } else {
                    console.log('id not found');
                    return res.send(500, {'error': 'id not found'});
                }
            }
        });
    };

    //get records
    this.getRecords = function (req, res, next) {
        Match.aggregate({$group: {_id: "$winner", total: {$sum: 1}}}, {$sort: {total: -1}}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(500, {'error': err});
            }else{
                return res.send(result);
            }
        });
    };

    //Add move on match
    this.addMove = function (req, res, next) {
        var id = req.params.id;
        var player1Move = req.params.player1_move;
        var player2Move = req.params.player2_move;

        Match.find({_id: id}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(500, {'error': err});
            } else {
                if (result[0]) {
                    var match = result[0];
                    if (MoveService.validMove(player1Move) && MoveService.validMove(player2Move)) {
                        var winner = MoveService.play(player1Move, player2Move);
                        if (winner === undefined) {
                            winner = 'tied';
                        }
                        match.moves.push({'player1': player1Move, 'player2': player2Move, 'winner': winner});
                        var roundWinner = MoveService.checkWinner(match);
                        if (roundWinner) {
                            match.winner = roundWinner === 'player1' ? match.player1 : match.player2;
                        }

                        Match.findOneAndUpdate({_id: id}, match, {upsert: true}, function (err, doc) {
                            if (err) return res.send(500, {error: err});
                            if (roundWinner) {
                                return res.send({
                                    "message": "There is already a winner",
                                    "finish": true,
                                    "data": match
                                });
                            }
                            return res.send({"message": "complete move", "finish": false, "data": match});
                        });
                    }
                } else {
                    console.log('id not found');
                    return res.send(500, {'error': 'id not found'});
                }
            }
        });
    };

    return this;

}

module.exports = new MatchController();
