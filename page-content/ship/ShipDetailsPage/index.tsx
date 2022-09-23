import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GET_SHIP } from "../../../api/ship/queries/getShip";
import { ShipDetails } from '../../../containers/ship/ShipDetails';
import { client } from '../../../utils/apollo-client';

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: ['/ship/[id]'], fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const { data: { ship } } = await client?.query({ 
    query: GET_SHIP, variables: { id }
  });

  return {
    props: {
      title: `SpaceX Ship: ${ship.name}`,
      description: `SpaceX Ship '${ship.name}' Detailed Page`,
      url: "https://localhost:3000",
      image: ship.image
    },
  };
};

export const ShipDetailsPageContent = () => {
  return (
    <>
      <Box component={Typography} mt={2} mb={4} align="center" variant="h2">
        Ship Details
      </Box>
      <ShipDetails/>
    </>
  );
};
