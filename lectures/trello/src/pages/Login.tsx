import { AccountCircle, Password } from "@mui/icons-material";
import { Box, Button, CardContent, Container, InputAdornment, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function LoginPage() {
  const navigator = useNavigate();

  const navigateHome = () =>{
    navigator("/app/home")
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values)
      navigateHome()
    }
  })

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8 }}>
        <CardContent
          sx={{
            marginTop: 25,
            padding: 4,
            textAlign: "center",
            boxShadow: 3,
          }}>
          <Typography
            sx={{ marginY: 2 }}
            variant="h5"
            component="h1"
            gutterBottom
          >
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="input-email-textfield"
              label="email"
              type="email"
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="input-password-textfield"
              label="password"
              type="password"
              name="password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                marginTop: 2
              }}
              variant="contained"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Box>
    </Container>
  );
}

export default LoginPage;
