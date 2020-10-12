let getAll = (req, res) => {
  res.json([
    {
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },{
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th", 
    },{
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },{
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },{
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },{
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    }
  ]);
  const dbInstance = req.app.get("db");
};

let deleteTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  res.json({})
};

let createTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  res.json(body);
};

let createUser = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  res.json(body)
};

module.exports = {
  getAll,
  createTournament,
  deleteTournament,
  createUser
};
