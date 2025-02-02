import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../api/recipe.service";

export const useRecipes = () => {
  const queryResponse = useQuery({
    queryKey: ["apiResponse"],
    queryFn: fetchAllRecipes,
  });

  return queryResponse;
};
