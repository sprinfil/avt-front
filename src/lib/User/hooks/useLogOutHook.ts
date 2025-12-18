import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };
  return { logOut };
};
