import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SpeedIcon from '@material-ui/icons/Speed';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmailIcon from '@material-ui/icons/Email';

// PROBLEM WITH COLLAPSE SUB LIST AND FIREFOX
// WAIT FOR NEW VERSION OF MATERIAL-UI WHICH HAS NESTE LIST-ITEM COMPONENT
//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  const {
    Push,
  } = params;

  const handleToolLife = () => {
    // Push('/Plant6Issues');
    alert(`Plant 6 Issues`);
  };
  const handleMachiningTimes = () => {
    // Push('/Plant8Issues');
    alert(`Plant 8 Issues`);
  };
  const handleIssuesPlant9 = () => {
    // Push('/Plant9Issues');
    alert(`Plant 9 Issues`);
  };
  const handleSubscribeEmail = () => {
    // Push('/SubscribeEmail');
    alert(`SubscribeEmail`);
  };
  return (
    <List>
      <ListSubheader>Issues</ListSubheader>
      <Divider />
      <ListItem button onClick={handleToolLife}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Tool Life" />
      </ListItem>
      <ListItem button onClick={handleMachiningTimes}>
        <ListItemIcon>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Machining Time" />
      </ListItem>
      {/* <ListItem button onClick={handleIssuesPlant8}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Plant 9" />
      </ListItem> */}
      <Divider />
      <ListSubheader>Post</ListSubheader>
      <Divider />
      <ListItem button onClick={handleSubscribeEmail}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>

    </List>
  );
}
