import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Rejected from '@material-ui/icons/DomainDisabled';
import School from '@material-ui/icons/Business';

export const RejectedSchoolItem = ({id, name}) => {
  return (
    <>
      <ListItem key={id} role={undefined}>
        <ListItemIcon>
          <School />
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <ListItemIcon>
            <Rejected />
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};
