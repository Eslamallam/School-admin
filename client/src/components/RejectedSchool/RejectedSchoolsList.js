import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRejectedSchools} from '../../actions/rejectedSchool';
import {RejectedSchoolItem} from './RejectedSchoolItem';

const useStyles = makeStyles(theme => ({
  content: {
    padding: '8px 8px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },

  toolbar: theme.mixins.toolbar,
}));

export const RejectedSchoolsList = () => {
  const classes = useStyles();

  const rejectedSchools = useSelector(
    state => state.rejectedSchools.rejectedSchoolsList,
  );

  const isLoading = useSelector(state => state.rejectedSchools.loading);

  const rejectedSchoolsLength =
    rejectedSchools !== undefined ? rejectedSchools.length : 0;

  const isLoadingCheck = isLoading !== undefined ? isLoading : true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRejectedSchools());
  }, [dispatch, rejectedSchoolsLength]);

  return (
    <main className={classes.content}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <List className={classes.root}>
              <Typography variant="h5" component="h6" gutterBottom>
                Rejected Schools
              </Typography>
              <Divider />
              {isLoadingCheck ? (
                <LinearProgress />
              ) : rejectedSchools.length === 0 ? (
                <p>No Rejected Schools Yet.</p>
              ) : (
                rejectedSchools.map(rejSchool => {
                  return (
                    <div key={rejSchool.id}>
                      <RejectedSchoolItem {...rejSchool} />
                      <Divider light />
                    </div>
                  );
                })
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};
