import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/recipe.service";
import useSearchParams from "./useSearchParams";

export const useRecipes = (url) => {
  const [params] = useSearchParams();
  const filter = params.get('filter')

  const queryResponse = useQuery({
    queryKey: ["recipesResponse", filter],
    queryFn: ({queryKey}) => fetchRecipes(url, filter),
  })

  return queryResponse;
};