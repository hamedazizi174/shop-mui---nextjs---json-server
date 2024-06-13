import { getProducts } from "@/src/api/api";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductsGrid({ category }) {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    getProducts(category).then((data) => setProducts(data));
  }, [category]);
  return (
    <Grid container spacing={3}>
      {products && products.length > 0 ? (
        products?.map((product) => (
          <Grid item lg={3} key={product.id}>
            <Paper elevation={6}>
              <Card>
                <CardMedia
                  component="img"
                  height={290}
                  alt={product?.name}
                  image={product?.image}
                  sx={{ p: "5px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    height={70}
                  >
                    {product?.name}
                  </Typography>
                  <Typography variant="body1">
                    Price: {product?.price}$
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))
      ) : (
        <Typography>There is No Product in This Category </Typography>
      )}
    </Grid>
  );
}
