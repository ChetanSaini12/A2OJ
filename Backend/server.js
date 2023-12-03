const express = require("express");
const app = express();
const cors = require("cors");
const codeController = require("./controller/codeController");
const userController = require("./controller/userController");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config;
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");

app.use(express.urlencoded({ extended: true }));
app.use(express.json("10kb"));
app.use(cors());
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CP",
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(hpp());
app.use(mongoSanitize());

app.post("/run", codeController);
app.get("/user", userController.getUser);
app.post("/user/:userId", userController.createUser);

const contestRouter = require("./routes/schedule");
app.use("/schedule", contestRouter);

app.get("/isitworking", (req, res) => {
  res.send("pong");
});

app.all("*", (req, resp, next) => {
  const error = new Error("invalid route");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status).json(error);
});

app.listen(3500, () => console.log("Server running on port 3500"));
