module.exports = function (app) {
    var matchController = require('./controllers/MatchController');
    var moveController = require('./controllers/MoveController');

    app.get('/', function (req, res, next) {
        return res.send("WELCOME TO Game of drones REST API");
    });

    app.get('/api/v1/matches', matchController.getMatches); //Create Match
    app.post('/api/v1/matches', matchController.createMatch);  // Get All Matches

    app.post('/api/v1/matches/:id/moves', matchController.addMove);  // Add move on match
    app.get('/api/v1/matches/:id', matchController.getMatch);  // Get Match by id

    app.get('/api/v1/moves', moveController.getMoves);  // Get Add Moves

    app.get('/api/v1/records', matchController.getRecords);  // Get records
};
