import React from 'react';
import RecipeGrid from './RecipeGrid';
import FiltersList from './FiltersList.jsx';
import DynamicSearchBar from './DynamicSearchBar.jsx';
import { useQuery } from '@tanstack/react-query';
import './App.css';

const recipeAPI = 'https://6774130577a26d4701c72ab8.mockapi.io/api/v1/recipes/'

const fetchAllRecipes = async () => {
  const res = await fetch(recipeAPI);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || `HTTP error, status: ${res.status}`);
  }

  return res.json();
};

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['apiResponse'],
    queryFn: fetchAllRecipes,
  });

  if (isLoading) {
    return (
      <div className="loading-state">
        <div className="loader"></div>
        <p>Loading recipes...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='error-state'>
        <h3>Error:</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <DynamicSearchBar/>
      <FiltersList filters={data}/>
      <RecipeGrid recipes={data} />
    </div>
  );
}

export default App;