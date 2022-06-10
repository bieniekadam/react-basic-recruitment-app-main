import React, { useState } from "react";
import "./App.css";
import { Grid, PaletteMode, ThemeProvider } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { Error404 } from "./screens/404";
import { navigationRoutes } from "./navigationRoutes";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DashboardScreen } from "./screens/Dashboard";

function App(): any {
  const [theme, setTheme] = useState(lightTheme);

  // const toggleTheme = (mode: PaletteMode) => {
  //   if (mode === "light") {
  //     setTheme(lightTheme);
  //   } else {
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
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <TopBar /> */}
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
              <List>
                {/* {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )} */}
                <LeftNavigation />
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <DashboardScreen />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <TopBar />

//         <Grid container>
//           <Grid item sx={{ width: 200 }}>
//             <LeftNavigation />
//           </Grid>
//           <Grid item xs>
//             <Routes>
//               {Object.values(navigationRoutes).map((route) => (
//                 <Route
//                   key={route.path}
//                   path={route.path}
//                   element={route.element}
//                 />
//               ))}
//               <Route path={"*"} element={<Error404 />} />
//             </Routes>
//           </Grid>
//         </Grid>
//   </BrowserRouter>
// </ThemeProvider>
//   );
// }

export default App;
