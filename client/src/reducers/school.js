import {
  REQUEST_SCHOOLS,
  RECEIVE_SCHOOLS,
  REMOVE_SCHOOL,
} from '../actions/school';

const schoolsDefaultState = [];

export default (state = schoolsDefaultState, action) => {
  switch (action.type) {
    case REQUEST_SCHOOLS:
      return {...state, loading: true};
    case RECEIVE_SCHOOLS:
      return {...state, schoolsList: action.schools, loading: false};
    case REMOVE_SCHOOL:
      return state.schoolsList.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};
