import { Box, Stack, TextField } from "@mui/material";
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
      <TextField placeholder="Search" sx={{ width: "1000px" }} />
      <Box>Login</Box>
      <Box>Cart</Box>
      <Box>About Us</Box>
    </Stack>
  );
}
