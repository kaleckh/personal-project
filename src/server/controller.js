const bcrypt = require("bcrypt");

var mock = [
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"],
  },
];
let getAll = (req, res) => {
  res.json(mock);
  const dbInstance = req.app.get("db");
};

let deleteTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  var id = parseInt(req.params.id);
  dbInstance
    .delete_post([id])
    .then((post) => res.status(200).send(post))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
};

let updateTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  res.json(body);
};
var createUser = (req, res) => {
  var { username, password } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      var dbInstance = req.app.get("db");
      dbInstance.create_user([username, hash]).then((result) => {
        let user = result[0];
        console.log(user);
        res.json(user);
      });
    });
  });
};
let createTournament = (req, res) => {
  const dbInstance = req.app.get("db");

  var body = req.body;
  dbInstance
    .create_tournament([body.gameType, body.teameName, body.date])
    .then((tournament) => res.status(200).send(tournament))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
};
var login = (req, res) => {
  var { username, password } = req.body;
  var dbInstance = req.app.get("db");
  dbInstance.get_user([username]).then((result) => {
    var user = result[0];
    if (bcrypt.compareSync(password, user.hash)) {
      res.status(200).json(user);
    } else {
      res.status(403).json({
        not: "authorized",
      });
    }
  });
};
module.exports = {
  getAll,
  createTournament,
  deleteTournament,
  createUser,
  updateTournament,
  login,
};
