require("dotenv").config()
const express = require("express");
const massive = require("massive")
const app = express();
app.use(express.json())
var {getAll, createTournament, deleteTournament, createUser, updateTournament, login} = require("./controller")
const { PORT = 3001, CONNECTION_STRING } = process.env;
const cors = require("cors");
app.use(cors())




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
