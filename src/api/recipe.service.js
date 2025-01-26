const recipeUrl = "https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes/";

export const fetchAllRecipes = async () => {
  const res = await fetch(recipeUrl);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};
