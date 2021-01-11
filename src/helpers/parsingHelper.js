//This method is going to consume all the categories, and return the specific category mentioned. If fetchAllImageLinks are true,
// then, all the images pertaining to that category are also fetched.

export const parseCategories = (category, categories, fetchAllImageLinks) => {
  const parsedCategories = categories.filter((value) => value.key === category);
  if (fetchAllImageLinks) {
    const categoryMetaData = {
      key: category,
      mainImage: "",
      imageFiles: [],
    };
    function deepLookUp(subCategories) {
      subCategories.forEach((element) => {
        if (!element.isFile) {
          deepLookUp(element.sub);
        } else {
          categoryMetaData.imageFiles.push(element.basePath);
          categoryMetaData.mainImage = element.basePath;
        }
      });
    }
    deepLookUp(parsedCategories);
    return categoryMetaData;
  }
  return parsedCategories[0];
};

//This method returns all the root categories, in a flat hierarchy, making sure all its images are also listed in them

export const flatCategories = (categories) => {
  const flatCats = [];
  categories.forEach((category) => {
    const categoryMetaData = {
      key: category.key,
      mainImage: "",
      imageFiles: [],
    };
    function deepLookUp(subCategories) {
      subCategories.forEach((element) => {
        if (!element.isFile) {
          deepLookUp(element.sub);
        } else {
          categoryMetaData.imageFiles.push(element.basePath);
          categoryMetaData.mainImage = element.basePath;
        }
      });
      return categoryMetaData;
    }
    const flattenedCategory = deepLookUp(category.sub);
    flatCats.push(flattenedCategory);
  });
  return flatCats;
};

export const getSubCategories = (categories) => {};
