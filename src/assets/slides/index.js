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
    } else if (file.includes("agarbatti")) {
      enrichedFiles.push(new Image(file, "agarbatti"));
    } else if (file.includes("pushti")) {
      enrichedFiles.push(new Image(file, "pushti"));
    } else if (file.includes("shop")) {
      enrichedFiles.push(new Image(file, "shop"));
    } else if (file.includes("cafe")) {
      enrichedFiles.push(new Image(file, "cafe"));
    } else if (file.includes("rexin")) {
      enrichedFiles.push(new Image(file, "rexin"));
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
