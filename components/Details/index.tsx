import MaterialCard, {
  CardProps as MaterialCardProps,
} from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

export interface DetailsProps extends MaterialCardProps {
  image?: CardMediaProps["image"];
  alt?: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
  name?: TypographyProps["children"];
  model?: TypographyProps["children"];
  loading?: boolean;
  active?: boolean | string;
  classValue?: number;
  imo?: number;
  mmsi?: number;
  roles?: string[];
  type?: string;
  weight_kg?: number;
  weight_lbs?: number;
  year_built?: number;
  home_port?: string;
}

export const Details = ({
  image,
  alt,
  name,
  model,
  loading,
  active,
  classValue,
  imo,
  mmsi,
  roles,
  type,
  weight_kg,
  weight_lbs,
  year_built,
  home_port
}: DetailsProps) => {
  return (
    <Box component={MaterialCard} maxWidth={900} sx={{margin: '0 auto', textAlign: 'center'}} >
      {!image || loading ? (
        <Skeleton
          data-testid='loading-placeholder'
          variant="rectangular"
          height={260}
          animation={loading ? "pulse" : false}
        />
      ) : (
        <CardMedia component="img" height="260" image={image} alt={alt} />
      )}

      <CardContent>
        <Box
          component={Typography}
          gutterBottom
          variant="h5"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          mb={2}
        >
          {loading ? <Skeleton data-testid='loading-placeholder'/> : name}
        </Box>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Model: ${model}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Active: ${active}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Class: ${classValue}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Imo: ${imo}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Mmsi: ${mmsi}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Roles: ${roles?.join(', ')}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Type: ${type}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Weight (kg): ${weight_kg}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Weight (lbs): ${weight_lbs}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Year built: ${year_built}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {loading ? <Skeleton data-testid='loading-placeholder'/> : `Home port: ${home_port}`}
        </Typography>
      </CardContent>
    </Box>
  );
};
