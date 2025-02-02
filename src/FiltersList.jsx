/* eslint react/prop-types: 0 */

import { randomNumberInRange } from "./api/random_number.service";
import "./FiltersList.css";
import { useRecipes } from "./hooks/useRecipes";

function RecipeFilter({ filter }) {
  const filterLabel = filter.charAt(0).toUpperCase() + filter.slice(1);
  return <button className="filter-button">{filterLabel}</button>;
}

function FiltersList() {
  const { data: filters, isLoading: loadingFilters } = useRecipes();
  const categoriesList = filters?.map((filter) => filter.category) || [];
  const cuisinesList = filters?.map((filter) => filter.cuisine) || [];
  const filtersArr = [...new Set([...categoriesList, ...cuisinesList])];

  if (loadingFilters) {
    const numOfFilterPlaceholders = randomNumberInRange(12, 16);
    const filterPlaceholders = Array.from(
      { length: numOfFilterPlaceholders },
      (_, i) => (
        <div
          key={i}
          className="filter-placeholder"
          style={{ width: `${randomNumberInRange(60, 100)}px` }}
        />
      )
    );

    return <div className="filters-list-container">{filterPlaceholders}</div>;
  }

  return (
    <div className="filters-list-container">
      {filtersArr.map((filter, index) => (
        <RecipeFilter key={index} filter={filter} />
      ))}
    </div>
  );
}

export default FiltersList;
