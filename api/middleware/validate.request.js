const response = require("../commons/response");

exports.validateHeaders = (req, res, next) => {
  const reqIdHeader = req.headers["x-req-id"];
  const clientDetailsHeader = req.headers["x-client-details"];
  if (!reqIdHeader) {
    return res
      .status(400)
      .send(
        response.errorResponse(
          "NO_REQ_ID_HEADER",
          "Request Id Header not found"
        )
      );
  }
  if (!clientDetailsHeader) {
    return res
      .status(400)
      .send(
        response.errorResponse(
          "NO_CLIENT_DETAILS_HEADER",
          "Client Details Header not found"
        )
      );
  }
  req.id = reqIdHeader;
  req.clientDetails = clientDetailsHeader;
  return next();
};
