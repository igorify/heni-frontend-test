import { gql } from "@apollo/client";
import { Ship } from "../types";

export type GetShipsResult = {
  ships: Ship[];
};

export const GET_SHIPS = gql`
  query getShips($limit: Int) {
    ships(limit: $limit) {
      id
      image
      name
      model
    }
  }
`;
