export const fetchFilteredRecipes = async (url, filter = null) => {
  const res = await fetch(url, filter);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};
