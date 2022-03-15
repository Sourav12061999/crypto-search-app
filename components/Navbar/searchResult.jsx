import React from "react";

function SearchResult({ open }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        position: "absolute",
        backgroundColor: "white",
        zIndex: 1000,
        border: "1px solid gray",
        display: open ? "block" : "none",
      }}
    >
      SearchResult
    </div>
  );
}

export default SearchResult;
