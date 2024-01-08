import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const initialVal = { email: "", password: "" };
  const [inputVal, setInputVal] = useState(initialVal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");
    console.log(inputVal);
  };
  return (
    <>
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Paper sx={{ p: 3, width: "400px" }}>
            <Stack gap={3}>
              <Typography variant="h5">Login Here</Typography>
              <Box component={"form"} onSubmit={handleSubmit}>
                <Stack gap={3}>
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={(e) => {
                      setInputVal((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                  <TextField
                    error
                    type="password"
                    label="Password"
                    name="password"
                    variant="outlined"
                    helperText="Enter conrrect"
                    onChange={(e) => {
                      setInputVal((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Login;
