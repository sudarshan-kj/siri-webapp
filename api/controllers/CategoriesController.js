const path = require("path");
const { readdir } = require("fs").promises;
const logger = require("log4js").getLogger();
logger.level = "debug";
const response = require("../commons/response");

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

exports.getCategories = async (req, res) => {
  const dirPath = path.join(__dirname, "../public/images/categories");
  const imageList = [];

  async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });

    const someFiles = dirents.forEach((dirent) => {
      if (dirent.isDirectory()) {
        const person = {
          key: dirent.name,
          name: "Something new",
          path: path.resolve(dir, dirent.name),
          subCat: [],
        };
        console.log("Yes, is a directory");
      }

      console.log(dirent.name);
    });

    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        console.log("Res", res);
        return dirent.isDirectory() ? getFiles(res) : res;
      })
    );
    return files;
  }

  const images = await getFiles(dirPath);

  // fs.readdir(dirPath)
  //   .then((files) =>
  //     files.forEach((file, id) => {
  //       return imageList.push(new Image(file, id));
  //     })
  //   )
  //   .then(() => res.status(200).send({ images: imageList }))
  //   .catch((err) => {
  //     res
  //       .status(500)
  //       .send({ error: "Error occurred while reading the images" });
  //     logger.error("Error :", err);
  //   });

  return res.status(200).send({ images: images });
};
