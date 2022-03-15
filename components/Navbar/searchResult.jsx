import React from "react";

function SearchResult({ open, searchData }) {
  console.log(searchData);
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
      SearchResult
    </div>
  );
}

export default SearchResult;
