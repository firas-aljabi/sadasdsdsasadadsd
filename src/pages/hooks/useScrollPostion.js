import { useEffect } from "react";

// Object in which we will save our scroll position state
const scrollPositions = {};

const useScrollPosition = (page) => {
  useEffect(() => {
    const pageScrollPosition = scrollPositions[page];

    if (pageScrollPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: pageScrollPosition,
          behavior: "smooth",
        });
      }, 2500);
    }

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener("scroll", save);
    return () => {
      window.removeEventListener("scroll", save);
    };
  }, [page]);
};

export default useScrollPosition;
