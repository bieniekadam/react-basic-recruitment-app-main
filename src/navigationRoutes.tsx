import React from "react";

import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";
import { SchedulingScreen } from "./screens/Scheduling";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
  // scheduling: {
  //   path: "/scheduling",
  //   element: <Scheduling />,
  // },
  // competitions: {
  //   path: "/competetions",
  //   element: <Competitions />,
  // },
  // organisations: {
  //   path: "/orgnisations",
  //   element: <Organisations />,
  // },
  // users: {
  //   path: "/users",
  //   element: <Users />,
  // },
};
