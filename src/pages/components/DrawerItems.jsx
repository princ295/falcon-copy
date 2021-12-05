import React, { Children, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { DrawerBackgroundColor, DrawerTextColor } from "../../constant/Colors";

import ApplyIcon from "@material-ui/icons/Alarm";
import ApprovalIcon from "@material-ui/icons/AlarmOn";

import ReportsIcon from "@material-ui/icons/List";

import logo from "../../assets/logo.png";
import { GrFormAdd } from 'react-icons/gr';
// import { withRouter } from "react-router";
// import Container from "./Container";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

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



const DrawerItems = () => {

  const history = useHistory();
  const classes = useStyles();


  const menuList = [
    {
      listName: "Create Module",
      icon: <GrFormAdd />,
      route: '/create_module',
    },
    {
      listName: "Create New Stage",
      icon: <ApplyIcon className={classes.iconStyle} />,
      route: "/create_new_stage",
    },
    {
      listName: "Create Module Stage",
      icon: <ApprovalIcon className={classes.iconStyle} />,
      route: '/create_module_stage',
    },
    {
      listName: "Manage Module Stage",
      icon: <ReportsIcon className={classes.iconStyle} />,
      route: '/manage_module_stage',
    },
    {
      listName: "Manage Edit",
      icon: <ReportsIcon className={classes.iconStyle} />,
      route: '/manage_edit',
    },
    {
      listName: "Manage Work Flow",
      icon: <ReportsIcon className={classes.iconStyle} />,
      route: '/manage_work_flow',
    },
  ];
  

  return (
    <>
      <div className={classes.toolbar}>
        <div className={classes.logoStyle}>
          <img src={logo} style={{ margin: "auto", height: 45 }}/>
          <Typography variant="button" color="textPrimary" style={{lineHeight: 1.5}}>DEPARTMENT OF COMMERCE & INDUSTRIES</Typography>
        </div>
      </div>
      <Divider />
      <List className={classes.rootList}>
        {menuList.map((text, index) => (
          <ListItem
            style={{ padding: '0.9rem'}}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              history.push(text.route)
            }}
          >
            <Link className={classes.listItem} to="">{text.icon} &nbsp; {text.listName}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
}
 
export default DrawerItems;