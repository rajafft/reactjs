import { common_multipart, common } from './utils/core';

export const _categoryList = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'GET',
      url: 'Category/',
      param: {},
      reqdata: payload,
    };
    common(request)
      .then((response) => {
        response.status == 200 &&
          callback(null, response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
