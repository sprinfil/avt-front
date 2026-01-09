import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { catchErrors } from "./lib/tools.ts";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error: any) => {
      // toast.error(error?.response?.data?.message || "Error inesperado");
      toast.error(await catchErrors(error));
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
