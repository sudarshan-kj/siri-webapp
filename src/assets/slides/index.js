function Image(path, key) {
  this.path = path;
  this.key = key;
}

function enrichFiles(files) {
  let enrichedFiles = [];
  files.forEach((file) => {
    if (file.includes("kokum")) {
      enrichedFiles.push(new Image(file, "kokum"));
    } else if (file.includes("snacks")) {
      enrichedFiles.push(new Image(file, "snacks"));
    } else if (file.includes("garments")) {
      enrichedFiles.push(new Image(file, "garments"));
    } else if (file.includes("oilfry")) {
      enrichedFiles.push(new Image(file, "oilfry"));
    } else if (file.includes("tailoring")) {
      enrichedFiles.push(new Image(file, "tailoring"));
    } else if (file.includes("phenyl")) {
      enrichedFiles.push(new Image(file, "phenyl"));
    } else if (file.includes("sirishop")) {
      enrichedFiles.push(new Image(file, "sirishop"));
    }
  });
  return enrichedFiles;
}

function importAll(r) {
  return r.keys().map(r);
}
const images = enrichFiles(
  importAll(require.context("./", false, /\.(png|jpe?g|svg)$/))
);

export default images;
