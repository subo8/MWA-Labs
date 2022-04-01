const express = require('express');
const router = express.Router();
const games = require("../controllers/games");

router.route("/games").get(games.getAll)

router.route("/games/:gameIndex").get(games.getSpecific);

router.route("/games/create").post(games.create);

router.route("/games/delete/:title").delete(games.delete);

module.exports = router;