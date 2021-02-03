import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Badge from "@material-ui/core/Badge";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as common from "@bgroves/common";
import * as errorType from "../constants/ErrorType";
import * as errorSeverity from "../constants/ErrorSeverity";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";


const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);


export default function AppMenu({ msalInstance, name, initials, companyName }) {
  // common.log(`currentApp=${currentApp}`);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      {/* 
                <IconButton color="inherit">
                  <Badge onClick={handleLogout} color="primary">
                    <ExitToAppIcon />
                  </Badge>
                </IconButton>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>


                */}
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
          <AppsIcon />
        </Badge>
      </IconButton>
      </HtmlTooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSignout}>Signout</MenuItem>
        <MenuItem onClick={handleSignout}>Signout</MenuItem>
        <MenuItem onClick={handleSignout}>
          <React.Fragment>
            <Typography variant="subtitle2" gutterBottom>
              {name}
            </Typography>
            <hr/>
            <Typography variant="body2" gutterBottom>
              {companyName}
            </Typography>
          </React.Fragment>
        </MenuItem>
      </Menu>

    </React.Fragment>
  );
}
