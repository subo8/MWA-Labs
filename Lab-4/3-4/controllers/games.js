
const dbConnection = require('../data/dbconnection');

module.exports.getAll = function (req, res) {
    console.log("Get All controller called");
    //DB Connection
    const db = dbConnection.get();
    const gamesCollection = db.collection("games");

    gamesCollection.find().toArray(function (err, games) {
        console.log("Found games");
        res.status(200).json(games);
    });
}

module.exports.getSpecific = function (req, res) {
    console.log("Get Specific number of games called");
    //DB Connection
    const db = dbConnection.get();
    const gamesCollection = db.collection("games");

    const gameIndex = parseInt(req.params.gameIndex);
    if (gameIndex <= 10) {
        let offset = 0;
        let count = gameIndex;

        if (req.query && req.query.offset) {
            offset = parseInt(req.query.offset, 10);
        }

        if (req.query && req.query.count) {
            count = parseInt(req.query.count, 10);
        }
        gamesCollection.find().skip(offset).limit(count).toArray(function (err, games) {
            console.log("Found games");
            res.status(200).json(games);
        });
    } else {
        gamesCollection.find().limit(3).toArray(function (err, games) {
            console.log("Found games");
            res.status(200).json(games);
        });
    }
}

module.exports.create = function (req, res) {
    console.log("POST new game called");
    //DB Connection
    const db = dbConnection.get();
    const gamesCollection = db.collection("games");

    let newGame = {};
    console.log(req.body.minPlayers)
    if (req.body && req.body.title && req.body.price && req.body.minPlayers > 1 && req.body.minPlayers < 11 && req.body.minAge > 5 && req.body.minAge < 99) {
        newGame.title = req.body.title;
        newGame.price = parseFloat(req.body.price);
        gamesCollection.insertOne(newGame, function (err, savedGame) {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                console.log("Game saved");
                res.status(201).json(savedGame);
            }
        });
    } else {
        res.status(400).json({ message: "Data is wrong" })
    }
}

module.exports.delete = function (req, res) {
    console.log("DELETE by name called");
    try {
        const db = dbConnection.get();
        const gamesCollection = db.collection("games");
        let myquery = { title: 'newGame' };
        gamesCollection.deletOne(myquery);
        res.status(200).json("Successful delete operation");
    } catch (e) {
        res.status(500).json("Unsuccessful delete operation");
    }

}
