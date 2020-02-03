import history from '../components/history';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_SERVERS
} from './types';

export const signOut = () => {
  return({
    type: SIGN_OUT
  });
};

export const loginToServer = (formValues) => {
  return async (dispatch) => {

    await trackPromise(axios.get(`http://demo8531410.mockable.io/token?username=${formValues.username}&password=${formValues.password}`)
    .then((res) => {
      dispatch({ type: SIGN_IN, payload: res.data.token });
    })
    .then((res) => {
      history.push('/result');
    }));
  };
};

export const fetchServers = (tokenID) => {
  return async (dispatch) => {

    await trackPromise(axios.get(`http://demo8531410.mockable.io/servers?token=${tokenID}`)
    .then((res) => {
      dispatch({ type: FETCH_SERVERS, payload: res.data });
    }));
  };
};
