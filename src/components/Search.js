import React from "react";

const Search = (props) => {
  const inputHandler = (e) => {
    props.setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <button onClick={props.search}>Search</button>
    </div>
  );
};

export default Search;
