import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page_2019 = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/2019";
  }, []);

  return null; // No UI needed, just redirects
};

export default Page_2019;
