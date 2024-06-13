import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "@/src/constant/Routes";
import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
    >
      <Link href={HOME_PAGE_ROUTE}>
        <Box component="img" src="/logo & text.png" width={150}></Box>
      </Link>
      <TextField
        placeholder="Search"
        variant="standard"
        fullWidth
        sx={{ bgcolor: "#eee", p: "5px", borderRadius: "10px" }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained">
                <Search />
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Stack
        minWidth="300px"
        direction="row"
        spacing={2}
        justifyContent="space-around"
      >
        <Link href={LOGIN_PAGE_ROUTE} underline="none">
          <Box>Login</Box>
        </Link>
        <Box>Cart</Box>
        <Box>About Us</Box>
      </Stack>
    </Stack>
  );
}
