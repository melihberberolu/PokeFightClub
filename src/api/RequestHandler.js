import axios from 'axios';
import { Alert, Platform } from 'react-native';
import { apiEndpoint } from '../configs/environments';

function errorHandler(msg = '') {
  return Alert.alert('ERROR', msg);
}

const requestHandler = options => {
  let androidAxiosGetInstance;
  if (
    options.method &&
    Platform.OS === 'android' &&
    options.method.toLowerCase() === 'get'
  ) {
    androidAxiosGetInstance = {
      method: options.method || 'GET',
      url: apiEndpoint + options.url,
      headers: {
        ...(options.headers ? options.headers : {})
      },
      ...(options.params ? { params: options.params } : {})
    };
  }
  return axios(
    androidAxiosGetInstance
      ? androidAxiosGetInstance : {
        method: options.method || 'GET',
        url: apiEndpoint + options.url,
        headers: {
          ...(options.headers ? options.headers : {})
        },
        ...(options.data ? { data: options.data } : {}),
        ...(options.params ? { params: options.params } : {})
      }
  )
    .then(response => response.data)
    .catch(error => errorHandler(error));
};

export default requestHandler;
