var mock = [
  {
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"]
  },{
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"] 
  },{
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"]
  },{
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"]
  },{
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"]
  },{
    tournamentType: "Search and Destroy",
    teamSize: 3,
    enrolled: 0,
    date: "june 19th",
    teamName: ["kale", "michael", "hamm"]
  }
]
let getAll = (req, res) => {
  res.json(mock);
  const dbInstance = req.app.get("db");
};

let deleteTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  res.json({})
};

let createTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body; 
  mock.push(body)
  res.json(body);
};

let createUser = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  res.json(body)
};
let updateTournament = (req, res) => {
  const dbInstance = req.app.get("db");
  const body = req.body;
  res.json(body)
}
module.exports = {
  getAll,
  createTournament,
  deleteTournament,
  createUser,
  updateTournament
};
