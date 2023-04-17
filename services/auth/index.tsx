/* eslint-disable @typescript-eslint/naming-convention */
import jwtDecode from 'jwt-decode';
import { Auth as api } from '@/api';
import { useStore } from '@/store';
import {
  ICredentialLogin,
  IEmailVerify,
  IForgotPassword,
  IForgotStatus,
  INewToken,
  IOAuthLogin,
  IRefreshToken,
  IRegisterStatus,
  IRegisterUser,
  IResetPassword,
  IResetPasswordStatus,
  IUserData,
  IUserDataError,
} from '@/types/DTO/Auth';

const Auth = () => {
  const _loginWithCredential = (props: ICredentialLogin) =>
    new Promise<ICredentialLogin>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .loginWithCredential(props)
          .then((res: { data: IUserData }) => {
            const userData = jwtDecode(res.data.data.access_token);

            resolve(res.data as IUserData);
          })
          .catch((err: IUserDataError) => reject(err));
      }
    );
  const _refreshToken = (props: INewToken) =>
    new Promise<INewToken>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .refreshToken(props)
          .then((res: { data: IRefreshToken }) => {
            resolve(res.data as IRefreshToken);
          })
          .catch((err: any) => reject(err));
      }
    );
  const _loginWithOAuth = (props: IOAuthLogin) =>
    new Promise<IOAuthLogin>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .loginWithOAuth(props)
          .then((res: { data: IUserData }) => {
            const userData = jwtDecode(res.data.data.access_token);
            resolve(res.data as IUserData);
          })
          .catch((err: any) => reject(err));
      }
    );
  const _forgotPassword = (props: IForgotPassword) =>
    new Promise<IForgotStatus>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .forgotPassword(props)
          .then((res) => {
            resolve(res.data as IForgotStatus);
          })
          .catch((err: any) => reject(err));
      }
    );

  const _registerUser = (props: IRegisterUser) =>
    new Promise<IRegisterStatus>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .registerUser(props)
          .then((res: { data: IRegisterStatus }) => {
            resolve(res.data as IRegisterStatus);
          })
          .catch((err) => reject(err));
      }
    );

  const _emailVerify = (props: IEmailVerify) =>
    new Promise<IEmailVerify>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .emailVerify(props)
          .then((res: { data: IUserData }) => {
            resolve(res.data as IUserData);
          })
          .catch((err: any) => reject(err));
      }
    );

  const _resetPassword = (props: IResetPassword) =>
    new Promise<IResetPasswordStatus>(
      (resolve: (res: any) => void, reject: (err: any) => void) => {
        api
          .resetPassword(props)
          .then((res: { data: IResetPasswordStatus }) => {
            resolve(res.data as IResetPasswordStatus);
          })
          .catch((err: any) => reject(err));
      }
    );
  return {
    _loginWithCredential,
    _refreshToken,
    _loginWithOAuth,
    _forgotPassword,
    _registerUser,
    _emailVerify,
    _resetPassword,
  };
};

export default Auth;
