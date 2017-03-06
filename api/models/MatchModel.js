// Model for the Match
module.exports = (function MatchSchema() {

    var mongoose = require('../db').mongoose;

    var schema = {
        player1: {type: String, required: true},
        player2: {type: String, required: true},
        moves: {type: Array, required: false},
        winner: {type: String, required: false}
    };
    var collectionName = 'matches';
    var matchSchema = mongoose.Schema(schema);

    return mongoose.model(collectionName, matchSchema);
})();
