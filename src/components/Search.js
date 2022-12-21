import React, { useState } from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input type="text" />
      <button onClick={props.search}>Search</button>
    </div>
  );
};

export default Search;
