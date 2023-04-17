import Axios, { AxiosError } from 'axios';

const baseURL = process.env.STRAPI_URL;

export const strapiAxiosInstance = Axios.create({ baseURL, headers: {} });

strapiAxiosInstance.interceptors.request.use(
  function (response) {
    // response.headers.Authorization = `Bearer ${authToken}`;

    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

strapiAxiosInstance.interceptors.response.use(
  function (response) {
    // const CancelToken = axios.CancelToken;
    // const access_token = localStorage.getItem('token');

    return response;
  },

  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
