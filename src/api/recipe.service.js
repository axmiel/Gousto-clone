const recipesUrl =
  "http://g0kg8os8sg8so4sks4k080g0.49.12.204.98.sslip.io/api/v1/recipes";

export const fetchRecipes = async (url, prepTime, category, cuisine, search) => {
  const urlWithSearch = new URL(url);

  if (prepTime) urlWithSearch.searchParams.set('prep_time', prepTime);
  if (category) urlWithSearch.searchParams.set('category', category);
  if (cuisine) urlWithSearch.searchParams.set('cuisine', cuisine);
  if (search) urlWithSearch.searchParams.set('search', search);

  const res = await fetch(urlWithSearch.toString());

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }
  return res.json();
};
