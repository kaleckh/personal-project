const bcrypt = require("bcrypt");

let getAll = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .read_tournaments()
    .then((tournaments) => {
      let result = tournaments.reduce((acc, curr) => {
        if (acc[curr.tournamentid]) {
          acc[curr.tournamentid].teamName.push(curr.name);
        } else {
          acc[curr.tournamentid] = {
            id: curr.tournamentid,
            type: curr.type,
            teamName: [curr.name],
          };
        }

        return acc;
      }, {});
      res.status(200).send(Object.values(result));
    })
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
};

let deleteTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  var id = parseInt(req.params.id);
  dbInstance
    .delete_tournament([id])
    .then((tournament) => res.status(200).send(tournament))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
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
    .create_tournament([body.type, body.date])
    .then((tournament) => res.status(200).send(tournament))
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
  var { type, date } = req.body;
  var id = parseInt(req.params.id);
  dbInstance
    .update_tournament([type, date, id])
    .then((tournament) => res.status(200).send(tournament[0]))
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
