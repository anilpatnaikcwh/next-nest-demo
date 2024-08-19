import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "@/models";

export function Products({ products }: { products: IProduct[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "25px",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)"
        }
      }}>
      {products.map((product, index) => (
        <Card key={index} sx={{ borderRadius: "25px" }}>
          <CardMedia component="img" height="140" image={product.photo} alt={product.name} />
          <CardContent>
            <Typography className="mb-2 text-sm">{product.name}</Typography>
            <Typography className="text-sm">${product.price?.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
