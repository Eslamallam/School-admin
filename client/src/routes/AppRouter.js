import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Dashboard} from '../components/Dashboard';
import {Header} from '../components/Header';
import {SideBar} from '../components/SideBar';
import {SchoolList} from '../components/School/SchoolList';
import {RejectedSchoolsList} from '../components/RejectedSchool/RejectedSchoolsList';
import {AcceptedSchoolsList} from '../components/AcceptedSchool/AcceptedSchoolsList';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '120rem',
  },
  container: {
    display: 'flex',
  },
  sideBar: {
    flex: '0 0 17%',
  },
  content: {
    flex: 1,
    marginTop: '70px',
    marginLeft: 0,
  },
}));

function AppRoutes() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={classes.container}>
        <BrowserRouter>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.content}>
            <Switch>
              <Route path="/" component={Dashboard} exact={true} />
              <Route path="/pending" component={SchoolList} />
              <Route path="/rejected" component={RejectedSchoolsList} />
              <Route path="/accepted" component={AcceptedSchoolsList} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default AppRoutes;
