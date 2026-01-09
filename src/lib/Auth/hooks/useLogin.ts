import ZustandPrincipal from "@/lib/ZustandPrincipal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../AuthTypes";
import { AuthService } from "../AuthService";
import { toast } from "sonner";
import { catchErrors } from "@/lib/tools";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setOpcionMenu, setUser } = ZustandPrincipal();

  const login = async (values: Login) => {
    try {
      setLoading(true);
      const response = await AuthService.login(values);
      setOpcionMenu("zonas");
      let token = response?.data?.data?.token;
      localStorage.setItem("ACCESS_TOKEN", token);
      setUser(response?.data?.data?.user);
      navigate("/dashboard/zonas");
    } catch (error) {
      //TODO: MANEJAR ERRORES
      toast.error(await catchErrors(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
  };
};
