import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ShipList } from "../../../containers/ship/ShipList";

export const getStaticProps = () => {
  return {
    props: {
      title: "SpaceX Ships",
      description: "SpaceX Ship List",
      url: "https://localhost:3000",
    },
  };
};

export const HomePage = () => {
  return (
    <>
      <Box component={Typography} mt={2} mb={4} align="center" variant="h2">
        Ships
      </Box>
      <ShipList />
    </>
  );
};
