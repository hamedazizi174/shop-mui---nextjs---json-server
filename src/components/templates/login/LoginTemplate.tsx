import { HOME_PAGE_ROUTE } from "@/src/constant/Routes";
import useGetUserByEmailPass from "@/src/hooks/useGetUserByEmailPass";
import { UserProps } from "@/src/types/types";
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
import { useForm } from "react-hook-form";

export default function LoginTemplate() {
  const [loginData, setLoginData] = useState<UserProps>({
    email: "",
    password: "",
  });
  const { register, handleSubmit } = useForm();
  const { data } = useGetUserByEmailPass(loginData);
  // const data = getUsersByEmailPass(loginData);
  console.log(data);

  function handleLogin(formData) {
    // event.preventDefault();
    // console.log(formData);
    setLoginData(formData);
  }

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
              <form
                onSubmit={handleSubmit(handleLogin)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <TextField
                  {...register("email")}
                  label="email address"
                  variant="outlined"
                  type="email"
                  fullWidth
                />
                <TextField
                  {...register("password")}
                  label="password"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: orange[500],
                    ":hover": { backgroundColor: orange[600] },
                  }}
                >
                  Login
                </Button>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
