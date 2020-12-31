const logger = require("log4js").getLogger();
logger.level = "debug";

exports.errorResponse = (type, errorMessage, req) => {
  if (req)
    logger.error(
      `Request with id: *${req.id}* having client details: *${req.clientDetails}* FAILED with message *${errorMessage}*`
    );
  else logger.error(`Request FAILED with message *${errorMessage}*`);
  return {
    status: "error",
    type,
    message: errorMessage,
  };
};

exports.successResponse = (type, successMessage, req) => {
  if (req)
    logger.debug(
      `Request with id: ${req.id} SUCCEEDED with message ${successMessage}`
    );
  return {
    status: "success",
    type,
    message: successMessage,
  };
};
