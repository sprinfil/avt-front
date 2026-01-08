import ZustandPrincipal from "@/lib/ZustandPrincipal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../AuthTypes";
import axiosClient from "@/axios-client";
import { AuthService } from "../AuthService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setOpcionMenu } = ZustandPrincipal();

  const login = async (values: Login) => {
    try {
      setLoading(true);
      const response = await AuthService.login(values);
      setOpcionMenu("zonas");
      let token = response?.data?.data?.token;
      localStorage.setItem("ACCESS_TOKEN", token);
      navigate("/dashboard/zonas");
    } catch (error) {
      //TODO: MANEJAR ERRORES
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
  };
};
