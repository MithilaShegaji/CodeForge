const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 5000;
const mongoose = require('mongoose');
const uploadRoute = require('./upload'); // Import upload route

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongoose.connect('mongodb://localhost:27017/excelDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api', uploadRoute); // Attach upload route


app.get("/", async (req, res) => {
    return res.render("home");
});
app.get("/admin", async (req, res) => {
    return res.render("adminDashboard");
});
app.get("/login", async (req, res) => {
    return res.render("login");
});
app.get("/dashboard", async (req, res) => {
    return res.render("dashboard");
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));


/*
    http://localhost:5000/

*/