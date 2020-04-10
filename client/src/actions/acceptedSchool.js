import {baseUrl} from '../config';
import ax from 'axios';

export const ADD_ACCEPTEDSCHOOL = 'ADD_ACCEPTEDSCHOOL';
export const REQUEST_ACCEPTEDSCHOOLS = 'REQUEST_ACCEPTEDSCHOOLS';
export const RECEIVE_ACCEPTEDSCHOOLS = 'RECEIVE_ACCEPTEDSCHOOLS';

export const requestAccptSchools = () => ({
  type: REQUEST_ACCEPTEDSCHOOLS,
});

export const receivedAccptSchools = data => ({
  type: RECEIVE_ACCEPTEDSCHOOLS,
  acceptedSchools: data,
});

export const AddAccptSchool = ({name = ''} = {}) => ({
  type: ADD_ACCEPTEDSCHOOL,
  name,
});

export const fetchAcceptedSchools = () => async dispatch => {
  try {
    dispatch(requestAccptSchools());
    const response = await ax.get(`${baseUrl}/acceptedschools`);
    const schools = await response.data;
    dispatch(receivedAccptSchools(schools));
  } catch (error) {
    console.log('throwing Error', error);
  }
};

export const doAddAcceptedSchool = ({name} = {}) => async dispatch => {
  try {
    await ax.post(`${baseUrl}/acceptedschools`, {name});

    dispatch(AddAccptSchool({name}));
  } catch (error) {
    console.log('throwing Error', error);
  }
};
