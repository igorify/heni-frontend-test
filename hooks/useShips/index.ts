import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../../api/ship/queries/getShips";

export const useShips = (limit?: number, offset?: number) => {
  const { data, error, loading, fetchMore } = useQuery(GET_SHIPS, {
    variables: {
      limit,
      offset,
    },
  });

  return {
    data,
    error,
    loading,
    fetchMore,
  };
};
