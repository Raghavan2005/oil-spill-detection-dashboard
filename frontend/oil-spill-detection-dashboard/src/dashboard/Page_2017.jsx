import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page_2017 = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/2017";
  }, []);

  return null; // No UI needed, just redirects
};

export default Page_2017;
