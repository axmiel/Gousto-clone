import "./FiltersList.css";
import { useState, useEffect, useCallback } from "react";
import useSearchParams from "./hooks/useSearchParams";

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
const filtersArr = [prepTime, ...new Set([...categoriesList, ...cuisinesList])];

function filteredRecipesParamConstructor(filter = null) {
  if (filter === "under 30 mins") {
    return "under30";
  } else {
    return filter;
  }
}

function RecipeFilter({ filter, isSelected, onSelectionChange }) {
  const filterLabel = filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <button
      onClick={() => onSelectionChange(filteredRecipesParamConstructor(filter))}
      className={`filter-button${isSelected ? " selected" : ""}`}
    >
      {filterLabel}
    </button>
  );
}

function FiltersList() {
  const [filter, setFilter] = useState([]);
  const [params, updateParam] = useSearchParams();

  useEffect(() => {
    const filterState = params.get("filter");
    setFilter(filterState);
  }, [params]);

  const handleOnFilterSelectionChange = useCallback(
    (selectedFilter) => {
      if (window.location.search === `?filter=${selectedFilter}`) {
        updateParam("filter", null);
      } else {
        setFilter(selectedFilter);
        updateParam("filter", selectedFilter);
      }
    },
    [setFilter, updateParam]
  );

  return (
    <div className="filters-list-container">
      {filtersArr.map((filterItem, index) => (
        <RecipeFilter
          key={index}
          filter={filterItem}
          isSelected={filter === filteredRecipesParamConstructor(filterItem)}
          onSelectionChange={handleOnFilterSelectionChange}
        />
      ))}
    </div>
  );
}

export default FiltersList;
