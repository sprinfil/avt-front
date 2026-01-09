import { useQuery } from "@tanstack/react-query";
import { UserService } from "../UserService";

export const useUserIndex = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["UserIndex"],
    queryFn: UserService.index,
  });

  return { data, error, isError, isLoading, refetch };
};
