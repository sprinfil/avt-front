import { create } from "zustand";
import { persist } from "zustand/middleware";

type state = {
  user: any;
  token: string;
  opcionMenu: string;
  setOpcionMenu: (opcionTemp: string) => void;
  setToken: (tokenTemp: string) => void;
  setUser: (userData: any) => void;
};

const ZustandPrincipal = create(
  persist(
    (set) => ({
      user: {},
      setUser: (userData: any) => set({ user: userData }),

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
