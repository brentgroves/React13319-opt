import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { indigo, deepOrange, deepPurple } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OutlinedCard from './OutlinedCard';


const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: indigo[500],
    backgroundColor: theme.palette.common.white,
    //    color: theme.palette.getContrastText(indigo[500]),
    //    backgroundColor: indigo[500],
  },
  orange: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function ToolbarAvatar({
  msalInstance,
  name,
  initials,
  companyName,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    msalInstance.logout();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="subtitle2" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {companyName}
            </Typography>
            <OutlinedCard />
          </React.Fragment>
        }
      >
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={0} color="secondary">
            <Avatar className={classes.avatar}>{initials}</Avatar>
          </Badge>
        </IconButton>
      </HtmlTooltip>
    </React.Fragment>
  );
}
