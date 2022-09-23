import { gql } from "@apollo/client";
import { Ship } from "../types";

export type GetShipResult = {
  ships: Ship;
};

export const GET_SHIP = gql`
  query getShip($id: ID!) {
    ship(id: $id) {
      id
      image
      name
      model
      class
      imo
      mmsi
      roles
      type
      weight_kg
      weight_lbs
      year_built
      home_port
    }
  }
`;
