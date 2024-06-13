import { getCategoris } from "@/src/api/api";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import Loading from "@/src/components/shared/Loading/Loading";

export default function Categories() {
  const [categories, setCategories] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategoris().then((data) => setCategories(data));
    setIsLoading(false);
  }, []);
  return (
    <Box p="20px">
      <Typography variant="h4" m="20px">
        Shop Our Top Categories
      </Typography>
      {isLoading ? (
        <Loading />
      ) : (
        <Stack direction="row" justifyContent="space-between" m="20px">
          {categories.map((category: any) => (
            <CategoryCard
              key={category.id}
              url={category.image}
              title={category.title}
              categoryName={category.categoryName}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}
