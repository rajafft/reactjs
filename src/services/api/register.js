import { common_multipart } from './utils/core';

export const _buyerRegistration = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'POST',
      url: 'users/buyerregister',
      param: {},
      reqdata: payload,
    };
    common_multipart(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        callback(error, null);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
export const _sellerregister = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'POST',
      url: 'users/sellerregister',
      param: {},
      reqdata: payload,
    };
    common_multipart(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        callback(error, null);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
