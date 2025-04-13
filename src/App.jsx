import "./App.css";
import DynamicSearchBar from "./DynamicSearchBar.jsx";
import FiltersList from "./FiltersList.jsx";
import RecipeGrid from "./RecipeGrid.jsx";

function App() {

  return (
    <div className="App">
      <DynamicSearchBar />
      <FiltersList />
      <RecipeGrid />
    </div>
  );
}

export default App;
