function Image(path, key, icon) {
  this.path = path;
  this.key = key;
  this.icon = icon;
}

function helperMethod(filePath, keysArray, array) {
  for (let i = 0; i < keysArray.length; i++) {
    if (filePath.includes(keysArray[i])) {
      array.push(new Image(filePath, keysArray[i]));
    }
  }
}

// make sure this category matches with the one defined in the locales

const allCategories = [
  "kokum",
  "snacks",
  "garments",
  "phenyl",
  "sirishop",
  "agarbatti",
  "nutritionpowder",
  "siricafe",
  "rexinbags",
  "pickle",
];

function enrichFiles(files, categoryList) {
  let enrichedFiles = [];
  files.forEach((filePath) => {
    helperMethod(filePath, categoryList, enrichedFiles);
  });
  return enrichedFiles;
}

function importAll(r) {
  return r.keys().map(r);
}

export const images = importAll(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);
export const imageCategories = enrichFiles(images, allCategories);
