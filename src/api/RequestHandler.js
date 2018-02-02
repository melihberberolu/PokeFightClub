import axios from 'axios';
import get from 'lodash/get';
import { Alert } from 'react-native';
import { apiEndpoint } from '../configs/environments';

function errorHandler(msg = '') {
  return Alert.alert('ERROR', msg);
}

const requestHandler = options =>
  axios({
    method: options.method || 'GET',
    url: apiEndpoint + options.url,
    headers: get(options, 'headers'),
    params: get(options, 'params')
  })
    .then(response => response.data)
    .catch(error => errorHandler(error));

export default requestHandler;
