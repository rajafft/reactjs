import { common_multipart, common } from './utils/core';

export const _productDescription = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'POST',
      url: 'products/getbyid',
      param: {},
      reqdata: payload,
    };
    common(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
export const _productList = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'GET',
      url: 'products/',
      param: {},
      reqdata: payload,
    };
    common(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};
export const _productListByCategory = async (payload, callback) => {
  try {
    let request = {
      reqmethod: 'POST',
      url: 'products/getProductbycatergory',
      param: {},
      reqdata: payload,
    };
    common(request)
      .then((response) => {
        response.data.statusCode == 200 &&
          callback(null, response.data.responseContents);
      })
      .catch((error) => {
        console.log('error', error);
      });
  } catch (e) {
    callback(e.response.data, null);
  }
};