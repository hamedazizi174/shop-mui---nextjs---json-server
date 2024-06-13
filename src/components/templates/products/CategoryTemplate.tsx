import MainLayout from "@/src/Layout/Layout";
import ProductsGrid from "@/src/components/templates/products/ProductsGrid/ProductsGrid";
import { Divider, Stack, Typography } from "@mui/material";

export default function CategoryTemplate({ slug }) {
  return (
    <MainLayout>
      <Stack alignItems="center" p="30px">
        <Typography variant="h2" gutterBottom>
          {slug}
        </Typography>
        <Divider sx={{ mb: "30px", width: "100%" }} />
        <ProductsGrid category={slug} />
      </Stack>
    </MainLayout>
  );
}
