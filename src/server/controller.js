const bcrypt = require("bcrypt")


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
  res.json({});
};

let createTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  mock.push(body);
  res.json(body);
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
}
module.exports = {
  getAll,
  createTournament,
  deleteTournament,
  createUser,
  updateTournament,
  login
};
