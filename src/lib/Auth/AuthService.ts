import axiosClient from "@/axios-client";
import type { Login } from "./AuthTypes";

export const AuthService = {
  login: async (values: Login) => {
    try {
      const response = await axiosClient.post("/auth/login", values);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
