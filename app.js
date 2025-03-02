const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 5000;
const mongoose = require('mongoose');

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.get("/", async (req, res) => {
    return res.render("home");
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));


/*
    http://localhost:5000/

*/