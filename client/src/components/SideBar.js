import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import Pending from '@material-ui/icons/People';
import Accepted from '@material-ui/icons/PersonAdd';
import Rejected from '@material-ui/icons/PersonAddDisabled';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    marginTop: theme.spacing(8),
    width: '17%',
    color: theme.palette.text,
  },
}));

export const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/pending">
            <ListItemIcon>
              <Pending />
            </ListItemIcon>
            <ListItemText primary="Pending" />
          </ListItem>
          <ListItem button component={Link} to="/accepted">
            <ListItemIcon>
              <Accepted />
            </ListItemIcon>
            <ListItemText primary="Accepted" />
          </ListItem>
          <ListItem button component={Link} to="/rejected">
            <ListItemIcon>
              <Rejected />
            </ListItemIcon>
            <ListItemText primary="Rejected" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
