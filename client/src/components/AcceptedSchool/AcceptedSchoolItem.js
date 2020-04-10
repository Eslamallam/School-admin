import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Done from '@material-ui/icons/DoneAll';
import School from '@material-ui/icons/Business';

export const AcceptedSchoolItem = ({id, name}) => {
  return (
    <ListItem key={id} role={undefined}>
      <ListItemIcon>
        <School />
      </ListItemIcon>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
