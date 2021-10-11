import React from "react";
import {makeStyles} from '@material-ui/core';
import { blue } from "@material-ui/core/colors";
import { blueGrey } from "@material-ui/core/colors";
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
  },
  wrapper:{
      padding:theme.spacing(2,2,0,32),
      [theme.breakpoints.down("sm")]: {
          padding:theme.spacing(2,2),
      },
    }, 

  navlinks:
  {
      color:blueGrey["A400"],
      "&:hover , &:hover div" : {
          color:blue["A400"],
      },
      "& div" :
      {
          color:blueGrey["A400"]
      },
  },

  activeNavLinks:
  {
      color:blue["A700"],
      " & div ": {
          color:blue["A700"],
      },
  },

  ratioButton:{fontsize:"1rem", fontWeight:"bold"},

  displayCardGraph : {
      position:"absolute",
      bottom:"0",
      left:"0",
      width:"100%",
      height:"45%"
  },

  displayCardGraph:{
      position:"relative",
  }

}))
