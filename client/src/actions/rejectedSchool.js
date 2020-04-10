import {baseUrl} from '../config';
import ax from 'axios';

export const ADD_REJECTEDSCHOOL = 'ADD_REJECTEDSCHOOL';
export const REQUEST_REJECTEDSCHOOLS = 'REQUEST_REJECTEDSCHOOLS';
export const RECEIVE_REJECTEDSCHOOLS = 'RECEIVE_REJECTEDSCHOOLS';

export const requestRejSchools = () => ({
  type: REQUEST_REJECTEDSCHOOLS,
});

export const receivedRejSchools = data => ({
  type: RECEIVE_REJECTEDSCHOOLS,
  rejectedSchools: data,
});

export const AddRejSchool = ({name = ''} = {}) => ({
  type: ADD_REJECTEDSCHOOL,
  name,
});

export const fetchRejectedSchools = () => async dispatch => {
  try {
    dispatch(requestRejSchools());
    const response = await ax.get(`${baseUrl}/rejectedschools`);
    const schools = await response.data;
    dispatch(receivedRejSchools(schools));
  } catch (error) {
    console.log('throwing Error', error);
  }
};

export const doAddRejSchool = ({name} = {}) => async dispatch => {
  try {
    await ax.post(`${baseUrl}/rejectedschools`, {name});

    dispatch(AddRejSchool({name}));
  } catch (error) {
    console.log('throwing Error', error);
  }
};
