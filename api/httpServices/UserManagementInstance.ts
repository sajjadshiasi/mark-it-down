import Axios, { AxiosError } from 'axios';
import { getSession } from 'next-auth/react';
import { IResetPasswordStatusError } from '@/types/DTO/Auth';

const baseURL = 'https://builder-service.kitblock.io/user';
export const userManagementInstance = Axios.create({ baseURL, headers: {} });

userManagementInstance.interceptors.request.use(
  function (response) {
    // response.headers.Authorization = `Bearer ${authToken}`;

    // if (!response?.headers.token) {
    //   const session = await getSession();
    //   if (session !== null) {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     response.headers = { token: session.accessToken };
    //   }
    // }

    return response;
  },
  function (error: IResetPasswordStatusError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error, 'errrrrr');
    return Promise.reject(error);
  }
);

userManagementInstance.interceptors.response.use(
  function (response) {
    // response.headers.Authorization = `Bearer ${authToken}`;

    // if (!response?.headers.token) {
    //   const session = await getSession();
    //   if (session !== null) {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     response.headers = { token: session.accessToken };
    //   }
    // }

    return response;
  },
  (error) =>
    // console.log(error.response, 'error');

    Promise.reject(error.response.data)
);
