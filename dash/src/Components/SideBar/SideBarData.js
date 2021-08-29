import Notifications from "@material-ui/icons/Notifications";
import { List,ListItem,ListItemIcon , ListItemText} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LinkIcon from '@material-ui/icons/Link';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBarData()
{
   const SideData = [ 
       {label:"Dashboard" ,link:"/" , icon:<DashboardIcon/>},
       {label:"Blog Post" ,link:"/blog", icon:<BookIcon/>},
       {label:"Link 1" , link:"/link", icon:<LinkIcon/>},
       {label:"Notification" ,link:"/notification", icon:<NotificationsIcon/>},
       {label:"Logout" ,link:"/logout", icon:<ExitToAppIcon/>}
   ];

    return ( 

        <List>
                {SideData.map((item,i) =>(
                <ListItem key={i} component={NavLink} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
                </ListItem>
                ))}
        </List>
    );
}