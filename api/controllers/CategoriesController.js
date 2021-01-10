const path = require("path");
const fs = require("fs");
const logger = require("log4js").getLogger();
logger.level = "debug";
const response = require("../commons/response");

exports.health = (req, res) =>
  res
    .status(200)
    .send(
      response.successResponse(
        "HEALTH_OK",
        "SIRI backend is up and running",
        req
      )
    );

exports.getCategories = (req, res) => {
  let dirPath = path.join(__dirname, "../public/images/categories");
  if (req.query.categoryType) {
    dirPath = path.join(
      __dirname,
      `../public/images/categories/${req.query.categoryType}`
    );
  }

  function getFiles(dir, parentPath) {
    try {
      const dirents = fs.readdirSync(dir, { withFileTypes: true });
      const categories = dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        const category = {
          key: dirent.name,
          basePath: parentPath + "/" + dirent.name,
          sub: [],
          isFile: false,
        };
        if (dirent.isDirectory()) {
          category.sub.push(...getFiles(res, category.basePath));
        } else {
          category.isFile = true;
        }
        return category;
      });
      return categories;
    } catch (err) {
      logger.error("Error while reading directories", err);
      return [];
    }
  }

  const categories = getFiles(dirPath, "/static/images/categories");
  return res.status(200).send({ categories });
};
