import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { UserService } from "../UserService";
import type { userIndexParams } from "../UserTypes";

export const useUserIndex = (params: userIndexParams) => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["UserIndex", params],
    queryFn: () => UserService.index(params),
    placeholderData: keepPreviousData,
  });

  return { data, error, isError, isLoading, refetch };
};
