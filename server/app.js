const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const url = `mongodb+srv://saoussen:%40vera9e135@cluster0.507fy.mongodb.net/test`;
const app = express();
app.use(bodyparser.json());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRouter);
app.use("/", indexRouter);
//mongodb connection
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
