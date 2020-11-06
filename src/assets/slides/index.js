function Image(path, key) {
  this.path = path;
  this.key = key;
}

function helperMethod(file, keysArray, array) {
  for (let i = 0; i < keysArray.length; i++) {
    if (file.includes(keysArray[i])) {
      array.push(new Image(file, keysArray[i]));
    }
  }
}

const allCategories = [
  "kokum",
  "snacks",
  "garments",
  "phenyl",
  "sirishop",
  "agarbatti",
  "pushti",
  "siricafe",
  "rexin",
];

function enrichFiles(files, categoryList) {
  let enrichedFiles = [];
  files.forEach((file) => {
    helperMethod(file, categoryList, enrichedFiles);
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
