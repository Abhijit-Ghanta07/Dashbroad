import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, []);

  return (
    <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Typography variant="h4">Something went Wrong!Please Retry...</Typography>
    </Box>
  );
};

export default Error;
