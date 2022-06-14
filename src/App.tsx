import React, { useState } from "react";
import "./App.css";
import { Grid, PaletteMode, ThemeProvider } from "@mui/material";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { DashboardScreen } from "./screens/Dashboard";
import Logo from "./images/logo.svg";
import { DashboardItem } from "./types/dashboard.types";
import { UsersScreen } from "./screens/Users";
import { OrganisationsScreen } from "./screens/Organisations";
import { SchedulingScreen } from "./screens/Scheduling";
import { CompetitionsScreen } from "./screens/Competitions";
import { CenterFocusStrong } from "@mui/icons-material";
import { flexbox } from "@mui/system";

function App(): any {
  const [theme, setTheme] = useState(lightTheme);

  // const toggleTheme = (mode: PaletteMode) => {
  //   if (mode === "light") {
  //     setTheme(lightTheme);
  // } else {
  //     setTheme(darkTheme);
  //   }

  const drawerWidth = 240;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              height: 48,
              display: "flexbox",
              justifyContent: "center",
            }}
          >
            <Toolbar>
              <Toolbar>
                <Box
                  component="img"
                  sx={{
                    height: 32,
                  }}
                  alt="Your logo."
                  src={Logo}
                />
              </Toolbar>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <LeftNavigation />
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="competitions" element={<CompetitionsScreen />} />
              <Route path="scheduling" element={<SchedulingScreen />} />
              <Route path="organisations" element={<OrganisationsScreen />} />
              <Route path="users" element={<UsersScreen />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
