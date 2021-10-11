import React from "react";
import { useEffect } from "react"; 
import { Box, CardContent , Grid , Typography , Card , Button } from "@material-ui/core";
import {makeStyles} from '@material-ui/core';
import { useStyles } from "../Components/Navbar/HeaderStyles";
import { PageHeader } from "../Common/CommonComponent";
import { DisplayCardGraph } from "../Common/GraphComponent";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {randomValueGenerator} from  "../utils/fakeArrayDataGenerator";
export default function DashBoard()
{
    const classes = useStyles();
    const DisplayData = [
        {label:"Post",value:randomValueGenerator({digit:1000}),icon:"",iconLabel:""},
        {label:"Pages",value:randomValueGenerator({digit:500}),icon:"",iconLabel:""},
        {label:"New Visitor",value:randomValueGenerator({digit:10}),icon:"",iconLabel:""},
        {label:"New Visitor",value:randomValueGenerator({digit:50}),icon:"",iconLabel:""},
    ]
    
    useEffect (() => {
        DisplayCardGraph();
    } )
    
    return (
     <Box>
     <PageHeader label="PageHeader" pageTitle = "Dashboard Overview"/>
     <Grid container>
      <Grid item xs={6} sm={3}>
          <Card>
          <CardContent className={classes.CardContent}>
          <canvas id="myChart" width="400" height="400" className={classes.displayClassGraph}></canvas>
          <Typography variant="body2" color="text.secondary" className={classes.cardLabel}>
           Word of the Day
          </Typography>
          <Typography variant="h5" component="h6" color="text.secondary" className={classes.cardTitle}>
           3453
          </Typography>
          <Typography component="p" style={{textAlign:"center" , marginBottom:"0px"}} >
          <Button size="small" className={classes.radioBtn}
           startIcon = 'small'
           className = {classes.radioBtn}
           startIcon = {<ArrowDropDownIcon/>}
          >
          5%
          </Button>
          </Typography>          
          </CardContent>
          </Card>
      </Grid>   

     </Grid>
     </Box>
    )
}