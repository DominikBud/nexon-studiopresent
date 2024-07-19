import { useMutation, useQueryClient } from "@tanstack/react-query";
import { writeDonationsApi } from "../sheetApi/writing";
import toast from "react-hot-toast";

export function useWriteDonations() {
  const queryClient = useQueryClient();
  const { mutate: writeDonations, isLoading } = useMutation({
    mutationFn: (data) => writeDonationsApi(data),
    onSuccess: () => {
      toast.success("uspesno ste upisali");
      queryClient.invalidateQueries({ queryKey: ["donations"] });
    },
    onError: (err) => console.log(err.message),
  });

  return { isLoading, writeDonations };
}
