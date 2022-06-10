import React from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationRoute, navigationRoutes } from "../../navigationRoutes";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { Box } from "@material-ui/core";

export const LeftNavigation = (props: {}) => {
  return (
    // <Box sx={{ overflow: "auto" }}>
    //   <p>Management</p>
    //   <Link to={navigationRoutes.dashboard.path}>Dashboard</Link>
    //   <Link to={navigationRoutes.sports.path}>Sports</Link>
    //   <Link to={navigationRoutes.competitions.path}>Competitions</Link>
    //   <Divider />
    //   <p>Planning</p>
    //   <Link to={navigationRoutes.scheduling.path}>Scheduling</Link>
    //   <Link to={navigationRoutes.organisations.path}>Organisations</Link>
    //   <Divider />
    //   <p>People</p>
    //   <Link to={navigationRoutes.users.path}>Users</Link>
    // </Box>
    <>
      {Object.entries(navigationRoutes).map(([categoryName, category]) => {
        return (
          <>
            <ListItem>{categoryName}</ListItem>
            {Object.values(category).map(
              (navigation: NavigationRoute, index) => (
                <Link
                  to={navigation.path}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItem key={navigation.path} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={navigation.buttonText} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
            )}
          </>
        );
      })}
    </>
  );
};
