import { HOME_PAGE_ROUTE } from "@/src/constant/Routes";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";

export default function LoginTemplate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      height="100vh"
      bgcolor="lightgray"
      component="main"
      alignContent="center"
    >
      <Container
        sx={{
          padding: "40px",
          bgcolor: "white",
          borderRadius: "30px",
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "block" },
            }}
            md={6}
            pt={13}
          >
            <Box component="img" src="/login.svg" width={500}></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap="25px" textAlign="center">
              <Link href={HOME_PAGE_ROUTE}>
                <Box component="img" src="/logo & text.png" width={200}></Box>
              </Link>
              <Typography
                variant="h3"
                sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                Welcome Back
              </Typography>
              <Typography variant="body2" sx={{ opacity: "60%" }}>
                Please Login to Your Account
              </Typography>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="email address"
                variant="outlined"
                type="email"
                fullWidth
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="password"
                variant="outlined"
                type="password"
                fullWidth
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: orange[500],
                  ":hover": { backgroundColor: orange[600] },
                }}
              >
                Login
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
