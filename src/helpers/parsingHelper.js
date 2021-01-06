export const parseCategories = (category, categories, fetchAllImageLinks) => {
  const parsedCategories = categories.filter((value) => {
    if (value.key === category) {
      return true;
    }
    return false;
  });
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
