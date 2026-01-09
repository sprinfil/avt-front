import axiosClient from "@/axios-client";
import type { StoreUser, UpdateUser, userIndexParams } from "./UserTypes";

export const UserService = {
  index: async (params: userIndexParams) => {
    try {
      const response = await axiosClient.get("/users", { params: params });
      return response;
    } catch (error) {
      throw error;
    }
  },
  store: async (values: StoreUser) => {
    try {
      const response = await axiosClient.post("/users", values);
      return response;
    } catch (error) {
      throw error;
    }
  },
  show: async (userId: number | string | null) => {
    try {
      const response = await axiosClient.get("/users/" + userId);
      return response;
    } catch (error) {
      throw error;
    }
  },
  udpate: async (values: UpdateUser, userId: number | string | null) => {
    try {
      const response = await axiosClient.put("/users/" + userId, values);
      return response;
    } catch (error) {
      throw error;
    }
  },
  toggleStatus: async (userId: number | string | null, is_active: boolean) => {
    try {
      const response = await axiosClient.patch("/users/" + userId + "/active", {
        is_active: is_active,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
};
