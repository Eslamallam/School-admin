import {
  ADD_ACCEPTEDSCHOOL,
  REQUEST_ACCEPTEDSCHOOLS,
  RECEIVE_ACCEPTEDSCHOOLS,
} from '../actions/acceptedSchool';

const AccptSchoolsDefaultState = [];

export default (state = AccptSchoolsDefaultState, action) => {
  switch (action.type) {
    case ADD_ACCEPTEDSCHOOL:
      return {...state, name: action.name};
    case REQUEST_ACCEPTEDSCHOOLS:
      return {...state, loading: true};
    case RECEIVE_ACCEPTEDSCHOOLS:
      return {
        ...state,
        acceptedSchoolsList: action.acceptedSchools,
        loading: false,
      };
    default:
      return state;
  }
};
