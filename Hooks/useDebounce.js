import React from "react";

function useDebounce(interval, setState) {
  let timeoutvalVariable = null;
  async function dataFetch(url) {
    if (timeoutvalVariable) {
      clearInterval(timeoutvalVariable);
    }

    intervalVariable = setTimeout(() => {
      timeoutvalVariable = null;
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
