import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { appBarBackground, textColorAppbar } from "../../constant/Colors";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LogOutIcon from "@material-ui/icons/PowerSettingsNew";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import DropdownIcon from "@material-ui/icons/ArrowDropDown";
// import { withRouter } from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: appBarBackground,
    color: textColorAppbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  iconStyle: {
    paddingRight: 4,
    color: "#1E32FA",
  },
  iconStyleLogOut: {
    paddingRight: 4,
    color: "red",
  },
  listItemStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    borderLeft: "1px solid #9e9e9e26",
  },
}));

const TopHeader = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [userDetails, setUserDetails] = React.useState(JSON.parse(sessionStorage.getItem("user")));

  React.useEffect(() => {
    // setUserDetails(JSON.parse(sessionStorage.getItem("user")));
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const handleChangeMenu = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
  };

  const handleLogOut = () => {
    // sessionStorage.clear();
    // props.history.push(LOGIN);
  };
  const settings = [
    // {
    //   title: "Update personal Details",
    //   route: SETTINGS + PERSONALDETAILS,
    //   icon: <PersonIcon className={classes.iconStyle} />,
    // },
    // {
    //   title: "Reporting / Link / Incharge Officer",
    //   route: "",
    //   icon: <GroupIcon className={classes.iconStyle} />,
    // },
    // {
    //   title: "Update Contact Details",
    //   route: SETTINGS + QUALIFICATIONCONTACT,
    //   icon: <ContactIcon className={classes.iconStyle} />,
    // },
    // {
    //   title: "Update Oath Language",
    //   route: "",
    //   icon: <OathIcon className={classes.iconStyle} />,
    // },

    // {
    //   title: "Add Family Member Details",
    //   route: "",
    //   icon: <HomeIcon className={classes.iconStyle} />,
    // },
    // {
    //   title: "Change Photo and Sign",
    //   route: "",
    //   icon: <AddPhoto className={classes.iconStyle} />,
    // },
    // {
    //   title: "Update Qualification",
    //   route: SETTINGS + QUALIFICATIONCONTACT,
    //   icon: <QualificationIcon className={classes.iconStyle} />,
    // },
    // {
    //   title: "Change Password",
    //   route: "",
    //   icon: <PasswordIcon className={classes.iconStyle} />,
    // },
  ];
  const handleClickSetting = () => {};

  return (
    <AppBar position="fixed" className={classes.appBar}>
        {/* Top Nav bar */}
      <Toolbar variant="regular" style={{ display: "flex", justifyContent: "space-between", boxShadow: 'none' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="body2" noWrap>
          DEPARTMENT OF COMMERCE & INDUSTRIES
        </Typography>

        {/* user profile */}

        <List style={{ paddingTop: 0, paddingBottom: 0, display: "flex" }}>
          
          <ListItem className={classes.listItemStyle}>
            <ListItemAvatar>
              <div>
                <Avatar
                  onClick={(e) => {
                    e.preventDefault();
                    // props.history.push(SETTINGS);
                  }}
                />

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {settings.map((data, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          props.history.push(data.route);
                        }}
                        style={{ fontSize: "0.8rem" }}
                      >
                        {data.icon}
                        <span style={{ paddingLeft: 8 }}>{data.title}</span>
                      </MenuItem>
                    );
                  })}

                  <MenuItem onClick={handleLogOut} style={{ fontSize: "0.8rem" }}>
                    <LogOutIcon className={classes.iconStyleLogOut} />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </ListItemAvatar>
            {width < 500 ? null : (
              <ListItemText
                primary={
                  <Typography style={{ fontSize: 14 }} noWrap>
                    {userDetails?.user_Name}
                  </Typography>
                }
                secondary={
                  <Typography style={{ fontSize: 12, color: "#0000007a" }} noWrap>
                    {userDetails?.role_Category}
                  </Typography>
                }
                onClick={(e) => {
                  e.preventDefault();
                //   props.history.push(SETTINGS);
                }}
              />
            )}
          </ListItem>
          <ListItem style={{ padding: 0, paddingBottom: 16 }}>
            <IconButton aria-label="delete" style={{ padding: 0 }} onClick={handleMenu}>
              <DropdownIcon />
            </IconButton>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default TopHeader;
