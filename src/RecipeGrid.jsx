/* eslint react/prop-types: 0 */

import { randomNumberInRange } from "./utils/random_number";
import { useRecipes } from "./hooks/useRecipes";
import "./RecipeGrid.css";

const recipesUrl =
  "http://g0kg8os8sg8so4sks4k080g0.49.12.204.98.sslip.io/api/v1/recipes";

function RecipeComponent({ recipe }) {
  const prepTime = recipe.prep_time;
  let displayTime;

  if (prepTime < 61) {
    displayTime = `${prepTime} mins`;
  } else {
    const hours = Math.floor(prepTime / 60);
    const mins = prepTime % 60;
    displayTime = `${hours} h ${mins} mins`;
  }

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <button>Add</button>
      <p className="prep-time">{displayTime}</p>
      <h3>{recipe.name}</h3>
    </div>
  );
}

function RecipeGrid() {
  const { data: recipes, isLoading: loadingRecipes } = useRecipes(recipesUrl);

  if (loadingRecipes) {
    const numOfRecipeCardPlaceholders = 12;
    const recipeCardPlaceholders = Array.from(
      { length: numOfRecipeCardPlaceholders },
      (_, i) => (
        <div key={i} className="recipe-card-placeholder">
          <div
            className="recipe-title-placeholder"
            style={{ width: `${randomNumberInRange(200, 400)}px` }}
          />
        </div>
      )
    );
    return <div className="recipes-container">{recipeCardPlaceholders}</div>;
  }

  return (
    <div className="recipes-container">
      {recipes?.map((recipe) => (
        <RecipeComponent key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;
