import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../services/apiPlants";

export function usePlants() {
  const {
    isLoading,
    data: plants,
    error,
  } = useQuery({
    queryKey: ["plant"],
    queryFn: getPlants,
  });

  return { isLoading, plants, error };
}
