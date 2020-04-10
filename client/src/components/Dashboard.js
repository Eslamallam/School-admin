import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import School from '@material-ui/icons/Business';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
}));

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <School color="inherit" fontSize="large" />
      <Typography variant="h4" component="h5" gutterBottom>
        Schools Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Paper>
  );
};
