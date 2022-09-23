export interface Ship {
  id: string;
  image: string;
  name: string;
  model: string;
  active: boolean;
  class: number;
  imo: number;
  mmsi: number;
  roles: string[];
  type: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
  home_port: string;
}
