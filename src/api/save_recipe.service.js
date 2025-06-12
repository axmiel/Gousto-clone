const savedRecipesUrl =
  "http://g0kg8os8sg8so4sks4k080g0.49.12.204.98.sslip.io/api/v1/saved-recipes";

export const fetchSavedRecipes = async () => {
    const res = await fetch (savedRecipesUrl);
    if (!res.ok) {
        throw new Error(`HTTPS error, returned status ${res.status}`)
    }
    const savedRecipeData = await res.json()
    console.log(savedRecipeData)
    return savedRecipeData
}

export const postSavedRecipe = async (recipeId) => {
    const res = await fetch(savedRecipesUrl, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ "_id" : recipeId })
    });
    if (!res.ok) {
        throw new Error(`HTTP error, returned status ${res.status}`);
    }
    const recipeData = await res.json();
    console.log(recipeData)
    return res.json()
}

export const removeSavedRecipe = async () => {
    const res = await fetch(savedRecipesUrl + `${recipeId}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error(`HTP error, returned status ${res.status}`);
    }
    const data = await res.json()
    console.log(data)
    return data
}