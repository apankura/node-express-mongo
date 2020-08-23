/* eslint no-console: "off" */
require("dotenv").config();
require("colors");

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
const databaseName = "owlvey_db";
const stringConnection = `mongodb://localhost:27017/${databaseName}`;
mongoose.connect(stringConnection, { useNewUrlParser: true }, error => {
  if (error) console.log("Error connection mongoDB".red, error);
  else console.log("=====> Connection to MONGO DB is ready <=====".green);
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // Request methods you wish to allow

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // Request headers you wish to allow

  res.setHeader("Access-Control-Allow-Credentials", true); // Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)

  // Pass to next layer of middleware
  next();
});

app.use(
  session({
    secret: "top_secret",
    store: new MongoStore({ mongooseConnection: db })
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

const sessionRouter = require("./server-api/routes/session.route");
const userRouter = require("./server-api/routes/user.route");
const customerRouter = require("./server-api/routes/customer.route");
const productRouter = require("./server-api/routes/product.route");
const versionRouter = require("./server-api/routes/version.route");
const featureRouter = require("./server-api/routes/feature.route");
const scenarioRouter = require("./server-api/routes/scenario.route");
const stepRouter = require("./server-api/routes/step.route");
const caseRouter = require("./server-api/routes/case.route");
app.use("/api/session", sessionRouter);
app.use("/api/users", userRouter);
app.use("/api/customers", customerRouter);
app.use("/api/products", productRouter);
app.use("/api/versions", versionRouter);
app.use("/api/features", featureRouter);
app.use("/api/scenarios", scenarioRouter);
app.use("/api/steps", stepRouter);
app.use("/api/cases", caseRouter);

var PORT = process.env.PORT_NUMBER;
app.listen(PORT, err => {
  if (err) {
    console.log(`=> Run Forrest, RUN!!! 🙀 ${err}`.red);
  }
  console.log(
    `=====> 🔥  Webpack dev server is running on port ${PORT} <=====`.green
  );
});
