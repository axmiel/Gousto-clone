import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../API/Recipe.service";

export const useRecipes = () => {
  const queryResponse = useQuery({
    queryKey: ["apiResponse"],
    queryFn: fetchAllRecipes,
  });

  return queryResponse;
};
