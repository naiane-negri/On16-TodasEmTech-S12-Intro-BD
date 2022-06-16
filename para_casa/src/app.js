
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./database/mongooseConnect')
const musicRoutes = require('./routes/routes')
const index = require ("./routes/routes.js"); 
const data = require ("./routes/data.js");

const app = express()

// configuracao
app.use(express.json())
app.use(cors())

// base de dados
db.connect()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/data", data);

module.exports = app;