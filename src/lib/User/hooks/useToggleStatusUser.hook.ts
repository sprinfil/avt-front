import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../UserService";

export const useToggleStatusUser = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleStatus, isPending: loading } = useMutation({
    mutationFn: ({
      userId,
      is_active,
    }: {
      userId: number | string | null;
      is_active: boolean;
    }) => UserService.toggleStatus(userId, is_active),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["UserIndex"],
      });
    },
  });

  return { toggleStatus, loading };
};
