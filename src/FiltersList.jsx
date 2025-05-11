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
const prepTime = ["under 15 mins", "under 30 mins"];

const filtersArr = [
  ...prepTime.map((prepTime) => ({ value: prepTime, type: "prep_time" })),
  ...categoriesList.map((category) => ({ value: category, type: "category" })),
  ...cuisinesList.map((cuisine) => ({ value: cuisine, type: "cuisine" })),
];

function filteredRecipesParamConstructor(filter, filterType) {
  if (filterType === "prep_time") {
    const minutes = parseInt(filter.match(/\d+/)[0]);
    return minutes;
  } else {
    return filter;
  }
}

function RecipeFilter({ filter, filterType, isSelected, onSelectionChange }) {
  const filterLabel = filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <button
      onClick={() => onSelectionChange(filterType, filter)}
      className={`filter-button${isSelected ? " selected" : ""}`}
    >
      {filterLabel}
    </button>
  );
}

function FiltersList() {
  const [prepTime, setPrepTime] = useState(null);
  const [category, setCategory] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  const [params, updateParam] = useSearchParams();

  useEffect(() => {
    setCategory(params.get("category") || null);
    setCuisine(params.get("cuisine") || null);
    setPrepTime(params.get("prep_time") || null);
  }, [params]);

  const handleOnFilterSelectionChange = useCallback(
    (filterType, selectedFilter) => {
      if (filterType === "category") {
        if (window.location.search.includes(`category=${selectedFilter}`)) {
            updateParam("category", null);
          } else {
            setCategory(selectedFilter);
            updateParam("category", selectedFilter);
          }
      } else if (filterType === "cuisine") {
        if (window.location.search.includes(`cuisine=${selectedFilter}`)) {
          updateParam("cuisine", null);
        } else {
          setCuisine(selectedFilter);
          updateParam("cuisine", selectedFilter);
        }
      } else {
        if (window.location.search.includes(`prep_time=${filteredRecipesParamConstructor(selectedFilter, filterType)}`)) {
            updateParam("prep_time", null);
          } else {
            setPrepTime(filteredRecipesParamConstructor(selectedFilter, filterType));
            updateParam("prep_time", filteredRecipesParamConstructor(selectedFilter, filterType));
          }
      }
    },
    [setCategory, setCuisine, setPrepTime, updateParam]
  );

  return (
    <div className="filters-list-container">
      {filtersArr.map((filterItem, index) => {
        let isSelected = false;
        switch (filterItem.type) {
          case "category":
            isSelected = category === filterItem.value;
            break;
          case "cuisine":
            isSelected = cuisine === filterItem.value;
            break;
          case "prep_time":
            isSelected = prepTime === filteredRecipesParamConstructor(filterItem.value, filterItem.type).toString();
            break;
          default:
            isSelected = false;
        }

        return (
          <RecipeFilter
            key={index}
            filter={filterItem.value}
            filterType={filterItem.type}
            isSelected={isSelected}
            onSelectionChange={handleOnFilterSelectionChange}
          />
        );
      })}
    </div>
  );
}

export default FiltersList;
