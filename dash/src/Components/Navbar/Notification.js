import React from "react";
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Button,Menu,MenuItem,Box,StyledBadge,Badge,ListItem,Avatar,List} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import {ListItemIcon} from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useState} from "react";
import {useStyles} from "../Navbar/HeaderStyles";
import image from "../Navbar/profilepic.jpg";



export default function Notification () {
    const classes = useStyles();
   
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const dropDownMenu = [
          {label:"Ashim", desc:"Ashim liked your feed"},
          {label:"Joey", desc:"Joey liked your picture"},
          {label:"Haley", desc:"Hailey liked your feed"},
          {label:"Alt", desc:"Alt invited you to like his page"},
          {label:"Sammy", desc:"Sammy is participating in GSoC"}
      ]

      return ( 
        <Box>
        <IconButton 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        color="inherit"
        >
       <Badge badgeContent={4} color="secondary">
       <NotificationsIcon/>
       </Badge>
       </IconButton>
       <Menu
       id="simple-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
       >
        <List className={classes.navlist}>
        {dropDownMenu.map((item,i) => 
            <MenuItem component={ListItem} onClick={handleClose}>
                <ListItemIcon>
                    <Avatar className={classes.ulAvatar}>{item.label[0].toUpperCase()}</Avatar>
                </ListItemIcon>
                <ListItemText primary={item.label} secondary={item.desc}></ListItemText>
            </MenuItem>
            
       )}
       </List>
       </Menu>
       </Box>
      )
}