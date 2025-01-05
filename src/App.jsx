import "./App.css"
import RecipeGrid from './RecipeGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client = {queryClient}>
        <RecipeGrid/>
      </QueryClientProvider>
    </>
  )
}

export default App