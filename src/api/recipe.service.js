const recipesUrl =
  "https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes";

export const fetchRecipes = async (url, filter, search) => {
  const urlWithSearch = new URL(url);

  if (filter) urlWithSearch.searchParams.set('filter', filter);
  if (search) urlWithSearch.searchParams.set('search', search);

  const res = await fetch(urlWithSearch.toString());

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};
