const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sessionNotes = ["First note"];

app.get("/", (req, res) => {
    const date = new Date();
    const today = date.getDay();
    const month = date.getMonth();
    const day = date.getDate();

    res.render("home", {today: weekdays[today], month: months[month], day: day});
});

app.post("/", (req, res) => {
    //add a new component to the sessionNotes and re-render the home screen
})

app.listen(3000, () => {
    console.log("Server initialized on port 3k");
});