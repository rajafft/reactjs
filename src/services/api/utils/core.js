import Axios from 'axios';
const BASE_URL = 'http://ec2-52-74-16-82.ap-southeast-1.compute.amazonaws.com:4000/api/v1/';

export const common = async ({ reqmethod, url, param, reqdata }) => {
  return Axios({
    method: reqmethod,
    url: BASE_URL + url,
    data: reqdata,
    params: param,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      // Authorization: `${localStorage.getItem('accesstoken')}`,
    },
  });
};
export const common_multipart = async ({ reqmethod, url, param, reqdata }) => {
  return Axios({
    method: reqmethod,
    url: BASE_URL + url,
    data: reqdata,
    params: param,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
      // Authorization: `${localStorage.getItem('accesstoken')}`,
    },
  });
};
