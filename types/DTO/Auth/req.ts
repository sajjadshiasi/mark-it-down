export interface ICredentialLogin {
  email: string;
  password: string;
}

export interface INewToken {
  Authorization: string;
}
export interface IRegisterUser {
  birth_date: string;
  email: string;
  password: string;
}
export interface IEmailVerify {
  code: string | string[];
}
export interface IOAuthLogin {
  provider: 'google' | 'facebook';
  access_token: string;
}
export interface IForgotPassword {
  email: string;
}
export interface IResetPassword {
  code: string;
  password: string;
}
