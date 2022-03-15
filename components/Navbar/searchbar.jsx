import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import SearchResult from "./searchResult";
import useDebounce from "../../Hooks/useDebounce";
function Searchbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid gray",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
      },
    },
  }));
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchParam, setsearchParam] = useState("");
  const dataFetch = useDebounce(500, setSearchData);

  useEffect(() => {
    if (searchParam && searchParam.length && open) {
      dataFetch(`/api/${searchParam}`);
    }
  }, [searchParam]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          autoFocus={open ? true : false}
          onFocus={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
          value={searchParam}
          onChange={(event) => {
            setsearchParam(event.target.value);
          }}
        />
        <SearchResult open={open} searchData={searchData} setOpen={setOpen} />
      </Search>
    </>
  );
}

export default Searchbar;
