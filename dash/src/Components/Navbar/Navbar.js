import React from "react";
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Button,Menu,MenuItem,Box, FormHelperText} from '@material-ui/core';
import {useState} from "react";
import Profile from "../Navbar/Profile.js";
import image from "../Navbar/profilepic.jpg";
import {ListItemIcon} from '@material-ui/core/ListItemIcon';
import { ListItemText } from '@material-ui/core';
export default function Navbar()
{
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const useStyles = makeStyles((theme)=>({
          toolbar:
          {
              display:"flex",
              flexFlow:"row wrap",
              justifyContent:"space-between"
          },
        logo:{
            color:"red",
        }

    }))
    const classes = useStyles();
    return ( 
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"<AdminPanel>"}
          </Typography>
        <Box>
        <Profile/>
        </Box>
        </Toolbar>
      </AppBar>
    )
}