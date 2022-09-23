import { useQuery } from "@apollo/client";
import { GET_SHIP } from "../../api/ship/queries/getShip";

export const useShip = (id?: string) => {
  const { data, error, loading } = useQuery(GET_SHIP, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
