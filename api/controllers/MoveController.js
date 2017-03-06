//This Controller deals with all Move functionalities
function MoveController() {
    var MoveService = require('../services/MoveService');

    // Fetching Details of All Moves
    this.getMoves = function (req, res, next) {
        return res.send(MoveService.getValidMoves());
    };

    return this;

}

module.exports = new MoveController();
