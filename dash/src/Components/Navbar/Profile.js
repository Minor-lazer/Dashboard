import React from "react";
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Button,Menu,MenuItem,Box,StyledBadge,Badge,ListItem,Avatar} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import {ListItemIcon} from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useState} from "react";
import image from "../Navbar/profilepic.jpg";


export default function Profile () {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const dropDownMenu = [
          {label:"Settings", icon:<SettingsIcon/>},
          {label:"Exit", icon:<ExitToAppIcon/>},
          {label:"settings", icon:<SettingsIcon/>}
      ]

      return ( 
        <Box>
        <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        color="inherit"
        startIcon={<Avatar src={image}></Avatar>}
        >
        {/* <Badge >
        <NotificationsIcon />
        </Badge> */}
       </Button>
       <Menu
       id="simple-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
       >
        {dropDownMenu.map((item,i) => 
            <MenuItem component={ListItem} onClick={handleClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
            </MenuItem>
            
       )}
       </Menu>
       </Box>
      )
}