const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const log4j = require("log4js");
const helmet = require("helmet");
const logger = log4j.getLogger();
logger.level = "debug";

const { CategoriesRoutes } = require("./routes");

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const apiRouter = express.Router();

app.use("/api", apiRouter);
apiRouter.use("/categories", CategoriesRoutes);

app.listen(port, () => logger.info(`Server started listening on port ${port}`));
