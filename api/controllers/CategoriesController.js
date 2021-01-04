const path = require("path");
const fs = require("fs");
const logger = require("log4js").getLogger();
logger.level = "debug";
const response = require("../commons/response");
const categories = require("../data/categories.json");

const entity = (function () {
  return function (key, name, path, subCat) {
    this.key = key;
    this.name = "TEMPORARY";
    this.path = path;
    this.subCat = subCat;
  };
})();

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

// const recurseCat = async (cats) => {
//   for (cat of cats) {
//     //end of direcotry reached

//     cat.files = ["new thing"];
//     const dirPath = path.join(__dirname, cat.path);
//     const dirents = await readdir(dirPath, { withFileTypes: true });
//     dirents.forEach((dirent) => cat.files.push(dirent));
//     if (cat.subCat.length) {
//       recurseCat(cat.subCat);
//     }
//   }
// };

exports.getCategories = (req, res) => {
  const dirPath = path.join(__dirname, "../public/images/categories");

  function getFiles(dir, parentPath) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const categories = dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      const category = {
        key: dirent.name,
        name: "Something new",
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
  }

  const categories = getFiles(dirPath, "/static/images/categories");
  return res.status(200).send({ categories });
};
