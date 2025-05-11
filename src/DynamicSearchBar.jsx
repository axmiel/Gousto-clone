/* eslint react/prop-types: 0 */

import "./DynamicSearchBar.css";
import { useState, useEffect, useCallback } from "react";
import useSearchParams from "./hooks/useSearchParams";
import { debounce } from "./utils/debounce";

function DynamicSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [params, updateParam] = useSearchParams();

  useEffect(() => {
    const searchState = params.get("search");
    setSearchValue(searchState);
  }, [params]);

  const handleSearch = useCallback(
    debounce((event) => {
        const lowercaseInputValue = event.target.value.toLowerCase();
        setSearchValue(lowercaseInputValue);
        updateParam("search", lowercaseInputValue || null);
    }),
    [setSearchValue, updateParam]
  );

  return (
    <div className="dynamic-search-bar">
      <div className="dynamic-search"></div>
      <input
        type="search"
        autoComplete="off"
        placeholder="Search recipes"
        defaultValue={searchValue}
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default DynamicSearchBar;
