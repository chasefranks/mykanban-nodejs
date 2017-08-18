/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import * as mongo from "connect-mongo";
import * as path from "path";
import * as mongoose from "mongoose";
import * as passport from "passport";
import expressValidator = require("express-validator");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env.example" });


/**
 * Controllers (route handlers).
 */
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";
import * as userStoryController from "./controllers/user-story";

/**
 * API keys and Passport configuration.
 */
// I want to use this, but I need to understand more about passport first
// import * as passportConfig from "./config/passport";

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("error", () => {
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(passport.initialize());

// some middleware...not sure if I need this
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// should probably do this at the route level
app.use((req, res, next) => {
  res.type('json')
  next()
})

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/userStory", userStoryController.getUserStories)
app.get("/userStory/:id", userStoryController.getUserStoryById)
app.post("/userStory", userStoryController.createUserStory)
app.put("/userStory/:id", userStoryController.updateUserStory)

/**
 * API examples routes.
 */
app.get("/api", apiController.getApi);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
