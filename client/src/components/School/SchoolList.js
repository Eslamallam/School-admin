import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSchools} from '../../actions/school';
import {SchoolItem} from './SchoolItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  content: {
    padding: '2px 8px',
  },

  container: {
    maxHeight: 550,
    color: theme.palette.text.primary,
  },

  toolbar: theme.mixins.toolbar,
}));

export const SchoolList = () => {
  const classes = useStyles();

  const schools = useSelector(state => state.schools.schoolsList);
  const isLoading = useSelector(state => state.schools.loading);

  const schoolsLength = schools !== undefined ? schools.length : 0;
  const isLoadingCheck = isLoading !== undefined ? isLoading : true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchools());
  }, [dispatch, schoolsLength]);

  return (
    <main className={classes.content}>
      {isLoadingCheck ? (
        <LinearProgress />
      ) : (
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead className={classes.Tblhead}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schools.map(schoolObj => {
                return <SchoolItem key={schoolObj.id} {...schoolObj} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
};
