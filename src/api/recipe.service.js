const recipesUrl =
  "https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes";



export const fetchRecipes = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};
