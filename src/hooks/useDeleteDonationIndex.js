import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDonationIdnex } from "../sheetApi/deleting";
import toast from "react-hot-toast";

export function useDeleteDonationIndex() {
  const queryClient = useQueryClient();
  const { mutate: deleteDonation, isLoading } = useMutation({
    mutationFn: (index) => deleteDonationIdnex(index),
    onSuccess: () => {
      toast.success("uspesno ste obrisali");
      queryClient.invalidateQueries({ queryKey: ["donations"] });
    },
    onError: (err) => console.log(err.message),
  });

  return { isLoading, deleteDonation };
}
