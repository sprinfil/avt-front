import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };
  return { logOut };
};
