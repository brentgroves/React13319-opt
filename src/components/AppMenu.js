import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Badge from "@material-ui/core/Badge";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";
import * as AppId from "../constants/AppId";
import * as AppSet from "../constants/AppSet";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as common from "@bgroves/common";
import { SetAccount } from "../actions";
import * as errorType from "../constants/ErrorType";
import * as errorSeverity from "../constants/ErrorSeverity";

export default function AppMenu({
  isAuthenticated,
  msalInstance,
  Push,
  currentApp,
  SetCurrentApp,
  SetAppError,
  appSet,
  Logout,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBuyer = () => {
    setAnchorEl(null);
    // alert(`Buyer App`);
    Push('/prod');   
    // window.location.href = 'http://google.com/';  
    //    Push('/oee');
  };
  const handleProd = () => {
    setAnchorEl(null);
    alert(`Production App`);
  };
  const handleSuper = () => {
    setAnchorEl(null);
    alert(`Supervisor App`);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={0} color="secondary">
          <AppsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleBuyer}>Buyer</MenuItem>
        <MenuItem onClick={handleProd}>Prod</MenuItem>
        <MenuItem onClick={handleSuper}>Super</MenuItem>
        <MenuItem onClick={handleSuper}>ToolSetter</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
