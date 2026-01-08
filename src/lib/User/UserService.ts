import axiosClient from "@/axios-client";

export const UserService = {
  index: async () => {
    try {
      const response = axiosClient.get("/users/select");
      return response;
    } catch (error) {
      throw error;
    }
  },
};
