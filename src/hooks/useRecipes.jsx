import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "../api/recipe.service";
import useSearchParams from "./useSearchParams";

export const useRecipes = (url) => {
  const [params] = useSearchParams();
  const prepTime = params.get('prep_time')
  const category = params.get('category');
  const cuisine = params.get('cuisine');
  const search = params.get('search');

  const queryResponse = useQuery({
    queryKey: ["recipesResponse", prepTime, category, cuisine, search],
    queryFn: ({queryKey}) => fetchRecipes(url, prepTime, category, cuisine, search),
  })
  return queryResponse;
};