import React, { Children, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";


import { makeStyles, useTheme } from "@material-ui/core/styles";

import { DrawerBackgroundColor, DrawerTextColor } from "../constant/Colors";
// import { withRouter } from "react-router";
import DrawerItems from "./components/DrawerItems";
import TopHeader from "./components/TopHeader";
import CardBlock from "../components/CardBlock";
import CreateModule from "./workflow/CreateModule";
import { useDispatch } from "react-redux";
import { fethStateData } from "../store/ducks/Global/actionCreator";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  logoStyle: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: '0.5rem',
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: DrawerBackgroundColor,
    color: DrawerTextColor,
  },
  iconStyle: {
    color: DrawerTextColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drwrStyle: {
    display: "flex",
    padding: 16,
    backgroundColor: "#1e32fa",
    margin: "auto",
    width: "80%",
    borderRadius: 5,

    // "&:hover": {
    //   backgroundColor: "white",
    //   color: "#1e32fa",
    // },
  },

  drwrStyleActive: {
    display: "flex",
    padding: 16,
    color: "#1e32fa",
    backgroundColor: "#ffffff",
    margin: "auto",
    width: "80%",
    borderRadius: 5,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",
    fontWeight: 500
  }
}));

// const Styles = {
//   drwrStyle: (routeProps) => [
//     {
//       display: "flex",
//       padding: 16,
//       backgroundColor: "#1e32fa",
//       margin: "auto",
//       width: "80%",
//       borderRadius: 5,
//     },
//   ],
// };
const DashboardLayout = (props) => {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopHeader handleDrawerToggle={handleDrawerToggle} title={props.title} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            <DrawerItems  />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerItems /> 
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
