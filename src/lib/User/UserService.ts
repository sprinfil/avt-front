import axiosClient from "@/axios-client";
import type { StoreUser, UpdateUser } from "./UserTypes";

export const UserService = {
  index: async () => {
    try {
      const response = await axiosClient.get("/users/select");
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
  }
};
