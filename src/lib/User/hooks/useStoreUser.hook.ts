import { useState } from "react"
import { UserService } from "../UserService";
import type { StoreUser } from "../UserTypes";

export const useStoreUser = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const storeUser = async (values: StoreUser) => {
    try {
      setLoading(true);
      const response = await UserService.store(values);
      setResponse(response);
    } catch (error) {
      //TODO: MANEJAR ERRORES

    }
    finally {
      setLoading(false);
    }
  }
  return { storeUser, loading, response }

}