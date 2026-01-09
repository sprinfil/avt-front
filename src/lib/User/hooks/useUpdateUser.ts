import { useState } from "react"
import { UserService } from "../UserService";
import type { UpdateUser } from "../UserTypes";
import { toast } from "sonner";
import { catchErrors } from "@/lib/tools";

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const updateUser = async (values: UpdateUser, userId: number | string | null) => {
    try {
      setLoading(true);
      const response = await UserService.udpate(values, userId);
      setResponse(response);
    } catch (error) {
      toast.error(await catchErrors(error));
    }
    finally {
      setLoading(false);
    }
  }
  return { updateUser, loading, response }

}