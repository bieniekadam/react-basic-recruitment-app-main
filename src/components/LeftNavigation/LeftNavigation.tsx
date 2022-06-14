import React from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationRoute, navigationRoutes } from "../../navigationRoutes";
import ListItem from "@mui/material/ListItem";
import { ListItemButton, Typography } from "@mui/material";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@mui/material";

import {
  Home,
  CalendarMonth,
  EmojiEvents,
  LocationCity,
  SupervisedUserCircle,
  SportsSoccer,
} from "@mui/icons-material";

export const LeftNavigation = (props: {}) => {
  return (
    <>
      {Object.entries(navigationRoutes).map(([categoryName, category]) => {
        return (
          <>
            <ListItem>
              <Typography variant="subtitle2" color="dimgray">
                {categoryName}
              </Typography>
            </ListItem>
            {Object.values(category).map(
              (navigation: NavigationRoute, index) => (
                <Link
                  to={navigation.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ListItem key={navigation.path} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {navigation.path === "/sports" ? (
                          <SportsSoccer />
                        ) : navigation.path === "/competitions" ? (
                          <EmojiEvents />
                        ) : navigation.path === "/scheduling" ? (
                          <CalendarMonth />
                        ) : navigation.path === "/organisations" ? (
                          <LocationCity />
                        ) : navigation.path === "/users" ? (
                          <SupervisedUserCircle />
                        ) : (
                          <Home />
                        )}
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          variant="subtitle2"
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          {navigation.buttonText}
                        </Typography>
                      </ListItemText>
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
