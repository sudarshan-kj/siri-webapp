import { authAxios } from "auth";

const fetchCategories = async (categoryType) => {
  let path = "/api/categories/images";

  if (categoryType) {
    path = `${path}/?categoryType=${categoryType}`;
  }
  const result = await authAxios().get(path);
  let categories = undefined;
  if (result) categories = result.data.categories;
  return categories;
};

export default fetchCategories;
