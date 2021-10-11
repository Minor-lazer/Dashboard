import React from "react";
import { Grid , Typography } from "@material-ui/core";
import { useStyles } from "../Pages/BodyStyle";


export const PageHeader = ({label,pageTitle}) => {
    const classes = useStyles();
    return  (
    <Grid container>
        <Grid item ={12} sm={12}>
            <Typography variant="caption">{label}</Typography>
            <Typography variant="h4" component="h3">{pageTitle}</Typography>
        </Grid>
    </Grid>
    );
} 