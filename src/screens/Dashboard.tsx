import React, { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { DashboardCard } from "../components/Card/DashboardCard";
import { Grid } from "@mui/material";
import { getDashboards } from "../service/dashboard.service";

export const DashboardScreen = (props: {}) => {
  const [items, setItems] = useState<DashboardType[]>([]);

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
        return navigationRoutes.competitions.path;
      case DashboardItem.ORGANISATIONS:
        return navigationRoutes.organisations.path;
      case DashboardItem.USERS:
        return navigationRoutes.users.path;
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {}, []);

  // if (!items || items.length === 0) {
  //   return <NoResults />;
  // }

  if (!items || items.length === 0) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.DASHBOARD}
            text={""}
            linkTo={"/"}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.SPORTS}
            text={""}
            linkTo={"sports"}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.COMPETITIONS}
            text={""}
            linkTo={"competitions"}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.SCHEDULING}
            text={""}
            linkTo={"scheduling"}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.ORGANISATIONS}
            text={""}
            linkTo={"organisations"}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title={DashboardItem.USERS}
            text={""}
            linkTo={"USERS"}
          />
        </Grid>
      </Grid>
    );
  }

  return <div>TODO: implement dashboard content according to designs</div>;
};

// return (
//   <>
//     {Object.entries(navigationRoutes).map(([categoryName, category]) => {
//       return (
//         <>
//           <ListItem>{categoryName}</ListItem>
//           {Object.values(category).map(
//             (navigation: NavigationRoute, index) => (
//               <Link
//                 to={navigation.path}
//                 style={{ color: "black", textDecoration: "none" }}
//               >
//                 <ListItem key={navigation.path} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={navigation.buttonText} />
//                   </ListItemButton>
//                 </ListItem>
//               </Link>
//             )
//           )}
//         </>
//       );
//     })}
//   </>
// );
// };
