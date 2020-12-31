const express = require("express");
const categoriesRouter = express.Router();
const CategoriesController = require("../controllers/CategoriesController");
const ValidateRequestMiddleware = require("../middleware/validate.request");

categoriesRouter.get("", [
  ValidateRequestMiddleware.validateHeaders,
  CategoriesController.health,
]);
categoriesRouter.get("/header", [
  ValidateRequestMiddleware.validateHeaders,
  CategoriesController.health,
]);

module.exports = categoriesRouter;
