require("dotenv").config()
const express = require("express");
const massive = require("massive")
const app = express();
app.use(express.json())
var {getAll, createTournament, deleteTournament, createUser, updateTournament, login} = require("./controller")
const { PORT = 3001} = process.env;
const cors = require("cors");
app.use(cors())
const CONNECTION_STRING = "postgres://deqigqdvzjrmez:8d9386b3039cc9a9e17568961bcb47908175aa4640be47a1dc6c5257c9537e0d@ec2-23-20-168-40.compute-1.amazonaws.com:5432/dbqmome1c1ts44"



massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
.then(dbInstance => {
    app.set("db", dbInstance);
})
.catch(err => console.log(err));


app.get("/test", (req, res) => {
    res.json({
        test: "test"
    })
})

app.post("/login", login);

app.get("/tournaments", getAll);
app.post("/tournaments", createTournament)
app.post("/users", createUser)
app.delete("/tournaments/:id", deleteTournament)
app.put("/tournaments/:id", updateTournament)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
