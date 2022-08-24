const express = require("express");
const routeWeb = require("./routes/router");

const app = express();

app.listen(3000, console.log("Server Connected"));
// Middleware
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routeWeb);
