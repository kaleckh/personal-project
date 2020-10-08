require("dotenv").config()
const express = require("express");
const massive = require("massive")
const app = express();
app.use(express.json())
var {getAll, createTournament} = require("./controller")
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

app.get("/tournaments", getAll);
app.post("/tournaments", createTournament)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
