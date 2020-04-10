import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAcceptedSchools} from '../../actions/acceptedSchool';
import {AcceptedSchoolItem} from './AcceptedSchoolItem';

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

export const AcceptedSchoolsList = () => {
  const classes = useStyles();

  const acceptedSchools = useSelector(
    state => state.acceptedSchools.acceptedSchoolsList,
  );

  const isLoading = useSelector(state => state.acceptedSchools.loading);

  const acceptedSchoolsLength =
    acceptedSchools !== undefined ? acceptedSchools.length : 0;

  const isLoadingCheck = isLoading !== undefined ? isLoading : true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAcceptedSchools());
  }, [dispatch, acceptedSchoolsLength]);

  return (
    <main className={classes.content}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <List className={classes.root}>
              <Typography variant="h5" component="h6" gutterBottom>
                Accepted Schools
              </Typography>
              <Divider />
              {isLoadingCheck ? (
                <LinearProgress />
              ) : acceptedSchools.length === 0 ? (
                <p>No Accepted Schools Yet.</p>
              ) : (
                acceptedSchools.map(accptSchool => {
                  return (
                    <div key={accptSchool.id}>
                      <AcceptedSchoolItem {...accptSchool} />
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
