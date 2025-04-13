import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/recipe.service";
import useSearchParams from "./useSearchParams";

export const useRecipes = (url) => {
  const [params] = useSearchParams();
  const filter = params.get('filter');
  const search = params.get('search');

  const queryResponse = useQuery({
    queryKey: ["recipesResponse", filter, search],
    queryFn: ({queryKey}) => fetchRecipes(url, filter, search),
  })

  return queryResponse;
};