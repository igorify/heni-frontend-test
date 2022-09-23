import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Details } from "../../../components/Details";
import { useShip } from '../../../hooks/useShip';


export const ShipDetails = () => {
  const router = useRouter();
  const { query } = router;
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const { error, data, loading } = useShip(id);

  if (id && error) {
    return (    
      <Box component={Typography} mt={2} mb={4} align="center" variant="subtitle1">
        There is some error. Try to refresh the page.
      </Box>)
  }
  return (
    <Details
      name={data?.ship?.name}
      loading={loading || !id || false}
      model={data?.ship?.model || "No Model"}
      image={data?.ship?.image}
      alt={data?.ship?.name}
      active={data?.ship?.active || "No Active"}
      classValue={data?.ship?.class}
      imo={data?.ship?.imo}
      mmsi={data?.ship?.mmsi}
      roles={data?.ship?.roles}
      type={data?.ship?.type}
      weight_kg={data?.ship?.weight_kg}
      weight_lbs={data?.ship?.weight_lbs}
      year_built={data?.ship?.year_built}
      home_port={data?.ship?.home_port}
      {...(!!data?.ship && { href: `/ship/${data?.ship?.id}` })}
    />
  );
};
