import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "./User/UserTypes";

type state = {
  user: User;
  token: string;
  opcionMenu: string;
  setOpcionMenu: (opcionTemp: string) => void;
  setToken: (tokenTemp: string) => void;
  setUser: (userData: User) => void;
};

const ZustandPrincipal = create(
  persist(
    (set) => ({
      user: {
        id: 0,
        name: "",
        username: "",
        created_at: "",
        updated_at: "",
      },
      setUser: (userData: User) => set({ user: userData }),

      token: "",
      setToken: (tokenTemp: string) => set({ token: tokenTemp }),

      opcionMenu: "",
      setOpcionMenu: (opcionTemp: string) => set({ opcionMenu: opcionTemp }),
    }),
    {
      name: "zustand-storage",
      partialize: (state: state) => ({
        user: state.user,
        token: state.token,
        opcionMenu: state.opcionMenu,
      }),
    }
  )
);

export default ZustandPrincipal;
