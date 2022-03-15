import React from "react";
import SearchCard from "./searchCard";
function SearchResult({ open, searchData }) {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        position: "absolute",
        backgroundColor: "white",
        zIndex: 1000,
        border: "1px solid #e0e0e0",
        display: open ? "block" : "none",
        overflowY: "auto",
      }}
    >
      {searchData.map((el) => (
        <React.Fragment>
          <SearchCard coin={el} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default SearchResult;
