import React from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { navigationRoutes } from "../../navigationRoutes";

export const LeftNavigation = () => {
  return (
    <>
      <p>Management</p>
      <Link to={navigationRoutes.dashboard.path}>Dashboard</Link>
      <Link to={""}>Sports</Link>
      <Link to={""}>Competitions</Link>
      <Divider />
      <p>Planning</p>
      <Link to={""}>Scheduling</Link>
      <Link to={""}>Organisations</Link>
      <Divider />
      <p>People</p>
      <Link to={""}>Scheduling</Link>
      <Link to={""}>Organisations</Link>
    </>
  );
};
