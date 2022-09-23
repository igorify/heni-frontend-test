import { useEffect, UIEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import debounce from 'lodash.debounce'
import { Ship } from "../../../api/ship/types";
import { ShipCard } from "../ShipCard";
import { useShips } from '../../../hooks/useShips';

const PAGE_SHIPS_LIMIT = 3;

export const ShipList = () => {
  const { error, data, loading, fetchMore } = useShips(PAGE_SHIPS_LIMIT);
  let offset = PAGE_SHIPS_LIMIT;
  const handleScroll = debounce((e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >= 
      e.target.documentElement.scrollHeight
    ) {
      offset += PAGE_SHIPS_LIMIT;
      fetchMore({
        variables: {
          limit: PAGE_SHIPS_LIMIT,
          offset
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if(!fetchMoreResult.ships.length) {
            return { ships: previousResult.ships }
          }
          return Object.assign({}, previousResult, {
            ships: [...previousResult.ships, ...fetchMoreResult.ships]
          });
        }
      })
    }
  }, 250);

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) {
    return (    
      <Box component={Typography} mt={2} mb={4} align="center" variant="subtitle1">
        There is some error. Try to refresh the page.
      </Box>)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {data?.ships.map((ship: Ship) => (
          <ShipCard key={ship.id} loading={loading} ship={ship} />
        ))
      }
    </Box>
  );
};
