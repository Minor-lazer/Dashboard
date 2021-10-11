import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {blueGrey} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme)=> ({
    section:{
        margin:theme.spacing(3,0)
    },

    pageTitle: {
        color:blueGrey[800],
        marginBottom:theme.spacing(2),
    },

    pageTitle: {
        color:blueGrey[500],
        marginBottom:theme.spacing(2),
    },

    cardLabel: {
        textTransform:"uppercase",
        color:blueGrey[500],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("xs")]: {
            fontSize:("0.8rem")
        },
    },

    cardTitle: {
        textTransform:"uppercase",
        color:blueGrey[500],
        textAlign:"center",
        margin:theme.spacing(1,0),
        [theme.breakpoints.down("xs")]: {
        fontSize:("1.8rem")
        },
    },

}));
