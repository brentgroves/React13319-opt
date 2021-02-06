import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import clsx from "clsx";

import IssuesBarChartCard from "./IssuesBarChartCard";
import IssuesLineChartCard from "./IssuesLineChartCard";
import InstructionsCard from "./InstructionsCard";

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

export default function Dashboard({
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout
}) {
  const classes = useStyles();

  const instructions = clsx(classes.paper, classes.instructions);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs6>
            <IssuesLineChartCard />
        </Grid>
        <Grid item xs6>
            <IssuesBarChartCard />
        </Grid>
        <Grid item xs6>
          <InstructionsCard />
        </Grid>
      </Grid>
      </Container>
  );
}
