import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      py={1}
    >
      <Box component="img" src="/logo & text.png" width={150}></Box>
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
        <Box>Login</Box>
        <Box>Cart</Box>
        <Box>About Us</Box>
      </Stack>
    </Stack>
  );
}
