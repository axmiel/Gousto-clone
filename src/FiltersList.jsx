/* eslint react/prop-types: 0 */
// import { createContext } from "react";
import "./FiltersList.css";

// const recipesUrl = 'https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes'

// TBC
// function filteredRecipesUrlConstructor(filter = null) {
//   if (filter === "under 30 mins") {
//     return "?filters=under30"
//   } else {
//     return `?filters=${filter}`
//   }
// }

// let recipeFilterContext;

function RecipeFilter({ filter }) {
  const filterLabel = filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <button
      // TBC
      // onClick={ (filter) => recipeFilterContext = createContext(filteredRecipesUrlConstructor(filter)) }
      className="filter-button"
    >
      {filterLabel}
    </button>
  );
}

function FiltersList() {
  const categoriesList = [
    "pork",
    "beef",
    "vegetarian",
    "vegan",
    "chicken",
    "fish",
    "duck",
    "lamb",
  ];
  const cuisinesList = [
    "british",
    "american",
    "italian",
    "chinese",
    "asian",
    "indian",
    "korean",
    "spanish",
    "mexican",
  ];
  const prepTime = "under 30 mins";
  const filtersArr = [
    prepTime,
    ...new Set([...categoriesList, ...cuisinesList]),
  ];

  return (
    <div className="filters-list-container">
      {filtersArr.map((filter, index) => (
        <RecipeFilter key={index} filter={filter} />
      ))}
    </div>
  );
}

export default FiltersList;
