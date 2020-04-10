import {
  ADD_REJECTEDSCHOOL,
  REQUEST_REJECTEDSCHOOLS,
  RECEIVE_REJECTEDSCHOOLS,
} from '../actions/rejectedSchool';

const rejSchoolsDefaultState = [];

export default (state = rejSchoolsDefaultState, action) => {
  switch (action.type) {
    case ADD_REJECTEDSCHOOL:
      return {...state, name: action.name};
    case REQUEST_REJECTEDSCHOOLS:
      return {...state, loading: true};
    case RECEIVE_REJECTEDSCHOOLS:
      return {
        ...state,
        rejectedSchoolsList: action.rejectedSchools,
        loading: false,
      };
    default:
      return state;
  }
};
