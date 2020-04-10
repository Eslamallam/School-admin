import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import schoolReducer from '../reducers/school';
import rejectedSchoolReducer from '../reducers/rejectedSchool';
import acceptedSchoolReducer from '../reducers/acceptedSchool';

export default () => {
  const store = createStore(
    combineReducers({
      schools: schoolReducer,
      rejectedSchools: rejectedSchoolReducer,
      acceptedSchools: acceptedSchoolReducer,
    }),

    applyMiddleware(thunk),
  );

  return store;
};
