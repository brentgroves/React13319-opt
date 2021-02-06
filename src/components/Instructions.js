import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },  
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },

  instructions: {
    padding: 14
  }
}));

export default function Instructions({
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout
}) {
  const classes = useStyles();

  const instructions = clsx(classes.paper, classes.instructions);
  return (
          <Paper>
            <AppBar position="static">
              <Toolbar>
                <PlayCircleFilledWhiteIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" className={instructions}>
                  Start by selecting a plant from the side menu or 
                  'Email' to set up a filter for issues to subscribe to.
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
  );
}
