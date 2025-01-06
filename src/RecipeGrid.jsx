/* eslint-disable react/prop-types */

import "./RecipeGrid.css"
import { useQuery } from '@tanstack/react-query';

const fetchAllRecipes = async () => {
  const res = await fetch('https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes/');
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};

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
      <img src={recipe.image} alt={recipe.name}/>
      <button>Add</button>
      <p className='prep-time'>{displayTime}</p>
      <h3>{recipe.name}</h3>      
    </div>
  );
}

function RecipeGrid() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['apiResponse'],
    queryFn: fetchAllRecipes,
  });

  if (isLoading) return (
    <div className="loading-state">
      <div className="loader"></div>
      <p>Loading recipes...</p>
    </div>
  );
  if (isError) return (
    <div className='error-state'>
      <h3>Error:</h3>
      <p>{error.message}</p>
    </div>
  );

  return (
    <div className="recipes-container">
      {data.map((recipe) => (
        <RecipeComponent key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;