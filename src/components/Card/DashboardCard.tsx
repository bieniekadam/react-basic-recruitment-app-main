import { FC } from "react";
import { Paper, Stack, useTheme, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={2}>
      <Stack>
        <div>
          <Typography
            variant="subtitle2"
            style={{
              backgroundColor: "#202020",
              color: "white",
              padding: theme.spacing(1, 3),
            }}
          >
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>
        </div>
        <div style={{ padding: theme.spacing(1, 2) }}>
          <p>{text}</p>
        </div>
        <Stack
          style={{ padding: theme.spacing(1, 2) }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Link style={{ textDecoration: "none" }} to={linkTo}>
            <Button style={{ color: "#FF7F00", fontWeight: "700" }}>
              MORE INFO
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};
