import React, { useRef } from "react";

function useDebounce(interval, setState) {
  let timeoutvalVariable = useRef(null);
  function dataFetch(url) {
    console.log(timeoutvalVariable);
    clearTimeout(timeoutvalVariable.current);
    timeoutvalVariable.current = setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setState(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }, interval);
  }
  return dataFetch;
}

export default useDebounce;
