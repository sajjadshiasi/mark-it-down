/* eslint-disable import/no-anonymous-default-export */
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
} from '@/types/DTO/Auth';
import { userManagementInstance } from '../httpServices';

export default {
  loginWithCredential: (props: ICredentialLogin) =>
    userManagementInstance.post<IUserData>('authentication/login', props),

  refreshToken: (props: INewToken) =>
    userManagementInstance.post<IRefreshToken>(
      'authentication/refresh',
      {},
      {
        headers: {
          Authorization: props.Authorization,
        },
      }
    ),

  registerUser: (props: IRegisterUser) =>
    userManagementInstance.post<IRegisterStatus>(
      'authentication/register',
      props
    ),

  emailVerify: (props: IEmailVerify) =>
    userManagementInstance.get<IUserData>(
      `authentication/register/verify/${props.code}`
    ),

  loginWithOAuth: (props: IOAuthLogin) =>
    userManagementInstance.post<IUserData>(
      `authentication/social/${props.provider}`,
      {
        access_token: props.access_token,
      }
    ),

  forgotPassword: (props: IForgotPassword) =>
    userManagementInstance.post<IForgotStatus>(
      'authentication/forgot-password',
      props
    ),

  resetPassword: (props: IResetPassword) =>
    userManagementInstance.post<IResetPasswordStatus>(
      'authentication/forgot-password/reset',
      props
    ),
};
