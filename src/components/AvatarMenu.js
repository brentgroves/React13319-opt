import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";

import Badge from "@material-ui/core/Badge";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import { indigo} from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {AvatarMenuCard} from '../containers/AvatarMenuCard';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
    border: '0px',
  },

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  gutters: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },      

  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      paddingTop: '0px',
    },
  },
}))(MenuItem);
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: indigo[500],
    backgroundColor: theme.palette.common.white,
    //    color: theme.palette.getContrastText(indigo[500]),
    //    backgroundColor: indigo[500],
  },
}));

export default function AvatarMenu({ msalInstance, name, initials, companyName }) {
  // common.log(`currentApp=${currentApp}`);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    setAnchorEl(null);
    alert(`Signout`);
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
          </React.Fragment>
        }
      >
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={0} color="secondary">
            <Avatar className={classes.avatar}>{initials}</Avatar>
          </Badge>
          {/* <Badge badgeContent={0} color="secondary">
          <AppsIcon />
        </Badge> */}
        </IconButton>
      </HtmlTooltip>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          {/* <ListItemIcon> */}
          <AvatarMenuCard/>

          {/* </ListItemIcon> */}
        </StyledMenuItem>
      </StyledMenu>
    </React.Fragment>
  );
}
