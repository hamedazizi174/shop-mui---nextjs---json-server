import { CATEGORY_PAGE_ROUTE } from "@/src/constant/Routes";
import { CategoryProps } from "@/src/types/types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

export default function CategoryCard({
  url,
  title,
  categoryName,
}: CategoryProps) {
  return (
    <Link href={`${CATEGORY_PAGE_ROUTE}/${categoryName}`}>
      <Card sx={{ position: "relative" }}>
        <CardActionArea>
          <CardMedia component="img" image={url} alt="Furniture" />
          <CardContent
            sx={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
            }}
          >
            <Typography variant="h5">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
