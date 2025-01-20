/* eslint react/prop-types: 0 */

import './FiltersList.css';

function RecipeFilter({ filter }) {
    const filterLabel = filter.charAt(0).toUpperCase() + filter.slice(1) // Capitalises the first letter of filter text
    return <button className="filter-button">{filterLabel}</button>;
}

function FiltersList({ filters }) {
    const categoriesList = filters.map((filter) => filter.category);
    const cuisinesList = filters.map((filter) => filter.cuisine);
    const filtersArr = [...new Set([...categoriesList, ...cuisinesList])]; // Array of unique filters from categories and cuisines arrays

    return (
        <div className="filters-list-container">
            {filtersArr.map((filter, index) => (
                <RecipeFilter key={index} filter={filter} />
            ))}
        </div>
    );
}

export default FiltersList;