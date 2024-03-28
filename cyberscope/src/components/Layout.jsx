import React from "react";
import { Paper } from "@mui/material";
import Navbar from "./Navbar";
import CoinDetailsCard from "./CoinDetailsCard";
import { Outlet } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { yellow, teal } from "@mui/material/colors";

const Layout = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      //   primary: {
      //     main: yellow[700],
      //   },
      //   secondary: {
      //     main: teal[500],
      //   },
    },
    typography: {
      body: {
        fontSize: ".8rem",
      },
    },
  });

  function handleChangeMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper sx={{ borderRadius: 0, padding: 4, minHeight: "100vh" }} elevation={0}>
          <Navbar mode={darkMode} onChangeMode={handleChangeMode} />

          <Outlet />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
