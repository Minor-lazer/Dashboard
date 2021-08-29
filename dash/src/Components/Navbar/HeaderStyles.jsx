import React from "react";
import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme)=>({
    toolbar:
    {
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between"
    },
  logo:{
      color:"red",
  },
  box:{
    display:"flex",
    flexFlow:"reverse",
  },

  navlist:
  {
      minWidth:"250px",
      maxWidth:"300px",
  },

  ulAvatar:
  {
      backgroundColor:"blue",
      color:"white"
  },

  navAvatar:
  {
      height:"35px",
      width:"35px"
  },
  drawerPaper:
  {
      width:"250px",
      marginTop:"65px"
  }

}))
