/* eslint react/prop-types: 0 */

import "./DynamicSearchBar.css";

function DynamicSearchBar() {
  return (
    <div className="dynamic-search-bar">
      <div className="gg-search"></div>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search recipes"
      ></input>
    </div>
  );
}

export default DynamicSearchBar;
