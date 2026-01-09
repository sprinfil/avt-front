import { useQuery } from "@tanstack/react-query";
import { UserService } from "../UserService";

export const useUserShow = (id: number | string | null) => {
    const { data, error, isLoading, isError, refetch } = useQuery({
        queryKey: ["UserShow", id],
        queryFn: () => UserService.show(id),
        enabled: !!id,
    });

    return { data, error, isError, isLoading, refetch };
};