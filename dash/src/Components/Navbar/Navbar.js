import React from "react";
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Button,Menu,MenuItem,Box, FormHelperText} from '@material-ui/core';
import {useState} from "react";
import Profile from "../Navbar/Profile.js";
import Notification from "../Navbar/Notification.js";
import Message from "../Navbar/Message.js";
import image from "../Navbar/profilepic.jpg";
import { useStyles } from "./HeaderStyles"
import {ListItemIcon} from '@material-ui/core/ListItemIcon';
import { ListItemText } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default function Navbar()
{

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return ( 
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"<AdminPanel>"}
          </Typography>
        <Hidden smDown>
        <Box className={classes.box}>
          <Notification/>
          <Message/>
          <Profile/>
        </Box>
        </Hidden>
        <Hidden mdUp>
           <IconButton color="inherit">
           <NotificationsIcon/>
        </IconButton>
        </Hidden>
        </Toolbar>
      </AppBar>
    )
}