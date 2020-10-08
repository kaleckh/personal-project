let getAll = (req, res) => {
  res.json([
    {
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },
  ]);
  const dbInstance = req.app.get("db");
};

let deleteTournament = (req, res) => {
  const dbInstance = req.app.get("db");
};

let createTournament = (req, res) => {
  const dbInstance = req.app.get("db");
};

let createUser = () => {
  const dbInstance = req.app.get("db");
};

module.exports = {
  getAll,
};
