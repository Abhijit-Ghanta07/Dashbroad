import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// styles
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e5266",
    },
    secondary: {
      main: "#d3d0cb",
    },
    info: {
      main: "#6e8898",
    },
    action: {
      main: "#e2c044",
    },
    success: {
      main: "#e2c044",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>
);
