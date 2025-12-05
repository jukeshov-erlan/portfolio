  import { useState, useEffect } from "react";

  export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
      document.documentElement.style.scrollBehavior = "smooth";  //documentElement = <html>

      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400); // how many px has the user scrolled down if it's more than 400 then true
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        //clean up smooth scroll on unmount
        document.documentElement.style.scrollBehavior = "auto";
      };
    }, []);

    return showScrollTop;
  };
