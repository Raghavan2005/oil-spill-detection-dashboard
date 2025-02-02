import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Finder = () => {
  useEffect(() => {
    window.location.href = "http://localhost:8501/";
  }, []);

  return null; // No UI needed, just redirects
};

export default Finder;
