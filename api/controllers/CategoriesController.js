const logger = require("log4js").getLogger();
logger.level = "debug";
const response = require("../commons/response");

exports.health = (req, res) =>
  res
    .status(200)
    .send(
      response.successResponse(
        "HEALTH_OK",
        "This is the message and it is ok",
        req
      )
    );

    exports.getCategories = (req,res)
