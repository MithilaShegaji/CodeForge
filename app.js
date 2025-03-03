const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 5000;
const mongoose = require('mongoose');

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    return res.render("home");
});
app.get("/login", async (req, res) => {
    return res.render("login");
});
app.get("/signup", async (req, res) => {
    return res.render("signup");
});

app.get("/dashboard", async (req, res) => {
    return res.render("dashboard");
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}. Click on http://localhost:5000/ \n Click on http://localhost:5000/login`));


/*
    http://localhost:5000/

*/