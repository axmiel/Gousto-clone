import "./App.css";
import DynamicSearchBar from "./DynamicSearchBar.jsx";
import FiltersList from "./FiltersList.jsx";
// import { useRecipes } from "./hooks/useRecipes.jsx";
import RecipeGrid from "./RecipeGrid.jsx";

function App() {
  // if (isLoading) {
  //   return (
  //     <div className="loading-state">
  //       <div className="loader"></div>
  //       <p>Loading recipes...</p>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="error-state">
  //       <h3>Error:</h3>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <DynamicSearchBar />
      <FiltersList />
      <RecipeGrid />
    </div>
  );
}

export default App;
