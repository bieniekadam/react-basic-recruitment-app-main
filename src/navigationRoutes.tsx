import React from "react";

import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";
import { SchedulingScreen } from "./screens/Scheduling";
import { OrganisationsScreen } from "./screens/Organisations";
import { CompetitionsScreen } from "./screens/Competitions";
import { UsersScreen } from "./screens/Users";

export type NavigationRoute = {
  buttonText: string;
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, Record<string, NavigationRoute>>;

export const navigationRoutes: NavigationRoutes = {
  Management: {
    dashboard: {
      buttonText: "Dashboard",
      path: "/",
      element: <DashboardScreen />,
    },
    sports: {
      buttonText: "Sports",
      path: "/sports",
      element: <SportsScreen />,
    },
    scheduling: {
      buttonText: "Scheduling",
      path: "/scheduling",
      element: <SchedulingScreen />,
    },
  },
  Planning: {
    competitions: {
      buttonText: "Competitions",
      path: "/competitions",
      element: <CompetitionsScreen />,
    },
    organisations: {
      buttonText: "Organisations",
      path: "/orgnisations",
      element: <OrganisationsScreen />,
    },
  },
  People: {
    users: {
      buttonText: "Users",
      path: "/users",
      element: <UsersScreen />,
    },
  },
};
