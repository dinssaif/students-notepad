const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

const store = [];

class Comment {
  constructor(id, title, note) {
    this.id = id;
    this.title = title;
    this.note = note;
  }
  id;
  title;
  detail;
}

app.post("/create-notes", (req, res) => {
  const cookieeId = +req.cookies.id;
  const { title, note } = req.body;
  if (!cookieeId) {
    res.cookie("id", parseInt(Math.random() * 1000000).toString(), {
      maxAge: 900000,
      httpOnly: true,
    });
  }
  if (store[cookieeId] === undefined) {
    store[cookieeId] = Array();
  }
  const comment = new Comment(store[cookieeId].length + 1, title, note);
  store[cookieeId].push(comment);
  res.send(JSON.stringify(comment));
});

app.get("/notes", (req, res) => {
  res.send(JSON.stringify(store[+req.cookies.id]));
});
app.post("/delete-notes", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const cookieeId = +req.cookies.id;
  store[cookieeId] = store[cookieeId].filter((current) => current.id !== id);
  res.send(JSON.stringify(store[cookieeId]));
});
app.use("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(5000);
