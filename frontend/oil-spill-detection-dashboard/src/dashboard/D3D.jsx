import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const D3D = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/immersive";
  }, []);

  return null; // No UI needed, just redirects
};

export default D3D;
