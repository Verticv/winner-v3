import { useEffect } from "react";
import "../App.css";

export const HoverDisabler = ({ children }) => {
  useEffect(() => {
    let timer = 0;

    function debounce(method, delay) {
      clearTimeout(method._tId);
      method._tId = setTimeout(function () {
        method();
      }, delay);
    }
    function scrollFunction() {
      clearTimeout(timer);
      if (!document.body.classList.contains("hoverDisabled")) {
        document.body.classList.add("hoverDisabled");
      }
      timer = setTimeout(() => {
        document.body.classList.remove("hoverDisabled");
      }, 500);
    }

    document.addEventListener("scroll", function () {
      debounce(scrollFunction, 100);
    });
  }, []);
  return children;
};
