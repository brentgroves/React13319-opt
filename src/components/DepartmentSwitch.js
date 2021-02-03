import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Engineering } from '../containers/Engineering';
import LinearIndeterminate from './LinearIndeterminate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useMsal, useAccount } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';
import { callMsGraph, GetProfile } from '../api/graph';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function DepartmentSwitch({
  SetAccount,
  SetGraph,
  SetProfile,
  SetDepartment,
  Push,
}) {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: account,
      })
      .then((response) => {
        SetAccount(account);
        callMsGraph(response.accessToken).then((response) => {
          SetGraph(response);
        });
        GetProfile(response.accessToken).then((response) => {
          console.log(`before SetProfile ${response}`);
          SetProfile(response.positions[0].detail);
          const department = response.positions[0].detail.company.department;
          SetDepartment(department);
          switch (department) {
            case 'Production':
              console.log(`Redirecting to Production`);
              // Push('/tracker');
              break;
            case 'Engineering':
              console.log(`Redirecting to Production`);
              Push('/engineering');
              break;
            default:
              break;
          }
        });
      });
  }, [account]);



  const classes = useStyles();

  return (
    // Need This style for placement
    <div className={classes.root}>
      <CssBaseline />
      <Switch>
        <Route exact path="/engineering" component={Engineering} />
        <Route exact path="/transition" component={LinearIndeterminate} />
      </Switch>
    </div>
  );
}
