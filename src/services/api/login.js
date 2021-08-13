import { common } from './utils/core';

export const _login = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'POST',
      url: 'auth/login',
      param: {},
      reqdata: payload,
    };
    common(request)
      .then((response) => {
        response.data.status == 'SUCCESS' ?
          callback(null, response.data.responseContents) : callback(response.data.responseContents, null)
      })
      .catch((e) => {
        callback(e.response.data, null);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};