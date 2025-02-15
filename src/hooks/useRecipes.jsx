import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/recipe.service";

export const useRecipes = (url) => {
  const queryResponse = useQuery({
    queryKey: ["recipesResponse"],
    queryFn: () => fetchRecipes(url),
  });

  return queryResponse;
};