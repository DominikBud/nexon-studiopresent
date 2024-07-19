import { useQuery } from "@tanstack/react-query";
import { readDonationsApi } from "../sheetApi/reading";

export function useReadDonations() {
  const { isLoading, data: donations } = useQuery({
    queryKey: ["donations"],
    queryFn: readDonationsApi,
  });

  return { isLoading, donations };
}
