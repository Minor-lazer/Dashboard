import React from "react";
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Button,Menu,MenuItem,Box, FormHelperText,Drawer} from '@material-ui/core';
import {useState} from "react";
import Profile from "../Navbar/Profile.js";
import Notification from "../Navbar/Notification.js";
import Message from "../Navbar/Message.js";
import image from "../Navbar/profilepic.jpg";
import { List,ListItem,ListItemIcon , ListItemText} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from "../Navbar/HeaderStyles";
import SideBarData from "../SideBar/SideBarData.js";

export default function SideBar ()
{
    const classes = useStyles();

    const [mobileOpen,setMobileOpen] = useState(false);
    const drawerHandler = () => 
    {
        setMobileOpen(!mobileOpen);
    }

    return ( 
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={drawerHandler}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
           <SideBarData/>    
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
          <SideBarData/>    

          </Drawer>
        </Hidden>
      </nav>
    )
}