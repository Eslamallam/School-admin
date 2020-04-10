import {baseUrl} from '../config';
import ax from 'axios';

export const REQUEST_SCHOOLS = 'REQUEST_SCHOOLS';
export const RECEIVE_SCHOOLS = 'RECEIVE_SCHOOLS';
export const REMOVE_SCHOOL = 'REMOVE_SCHOOL';

export const requestSchools = () => ({
  type: REQUEST_SCHOOLS,
});

export const receivedSchools = data => ({
  type: RECEIVE_SCHOOLS,
  schools: data,
});

//Delete
export const RemoveSchool = ({id} = {}) => ({
  type: REMOVE_SCHOOL,
  id,
});

export const fetchSchools = () => async dispatch => {
  try {
    dispatch(requestSchools());
    const response = await ax.get(`${baseUrl}/schools`);
    const schools = await response.data;
    dispatch(receivedSchools(schools));
  } catch (error) {
    console.log('throwing Error', error);
  }
};

export const deleteSchool = ({id} = {}) => async dispatch => {
  try {
    await ax.delete(`${baseUrl}/schools/${id}`);
    dispatch(RemoveSchool({id: id}));
  } catch (error) {
    console.log('throwing Error', error);
  }
};
