const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
// const fs = require("fs");
const cors = require("cors");
const log4j = require("log4js");
const helmet = require("helmet");
const path = require("path");
// const morgan = require("morgan");
// const notifier = require("node-notifier");
const logger = log4j.getLogger();
logger.level = "debug";

const { CategoriesRoutes } = require("./routes");
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   { flags: "a" }
// );

app.use(cors());
// app.use(morgan("combined", { stream: accessLogStream }));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public"))); // make files available on public folder under the path 'static'
app.use(express.json());
const apiRouter = express.Router();

app.use("/api", apiRouter);
apiRouter.use("/categories", CategoriesRoutes);

app.listen(port, () => {
  logger.info(`Server started listening on port ${port}`);
  //   notifier.b({
  //     title: `SIRI Web App has started.`,
  //     message: `PORT: ${port}`,
  //   });
});
