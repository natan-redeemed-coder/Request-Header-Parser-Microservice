const cors = require("cors");
require("dotenv").config();
const express = require("express");


var app = express();

app.enable("trust proxy")

app.use(cors({optionsSuccessStatus: 200}))

app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (request, response) => {
  response.json({
    ipaddress: request.get("X-Forwarded-For"),
    language: request.get("Accept-Language"),
    software: request.get("User-Agent")
  });
});


var listener = app.listen(
  process.env.PORT || 3000,
  () => {
    console.log("Your app is listening on port " + listener.address().port);
  }
);
