import { Box, CircularProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Box
      component="div"
      textAlign="center"
      alignContent="center"
      height="200px"
    >
      <CircularProgress />
    </Box>
  );
}
