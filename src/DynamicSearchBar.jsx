/* eslint react/prop-types: 0 */

import "./DynamicSearchBar.css";
import { useState, useEffect, useCallback } from "react";
import useSearchParams from "./hooks/useSearchParams";
import { debounce } from "./utils/debounce";

function DynamicSearchBar() {
  const [filter, setFilter] = useState('');
  const [params, updateParam] = useSearchParams();

  useEffect(() => {
    const filterState = params.get("search");
    setFilter(filterState);
  }, [params]);

  const handleOnFilterSelectionChange = useCallback(
    debounce((event) => {
        const lowercaseInputValue = event.target.value.toLowerCase();
        setFilter(lowercaseInputValue);
        updateParam("search", lowercaseInputValue || null);
    }),
    [setFilter, updateParam]
  );

  return (
    <div className="dynamic-search-bar">
      <div className="dynamic-search"></div>
      <input
        type="search"
        autoComplete="off"
        placeholder="Search recipes"
        defaultValue={filter}
        onChange={handleOnFilterSelectionChange}
      ></input>
    </div>
  );
}

export default DynamicSearchBar;
