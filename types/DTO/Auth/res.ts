export interface ICredentialToken {
  access_token: string;
  refresh_token: string;
}

export interface ICredentialError {
  message: string;
  detail: {
    field?: string;
    message: string;
    rule?: string;
  };
}

export interface IUserData {
  code: number;
  data: ICredentialToken;
  status: boolean;
}
export interface IUserDataError {
  code: number;
  error: ICredentialError;
  status: boolean;
}

export interface IRefreshToken {
  code: number;
  data: IAccessToken;
  status: boolean;
}

export interface IAccessToken {
  access_token: string;
}

export interface IRefreshTokenError {
  code: number;
  error: {
    message: string;
    detail: {
      message: string;
    };
  };
  status: boolean;
}

export interface IRegisterStatus {
  code: number;
  data: {
    code: number;
    status: boolean;
  };
  status: boolean;
}
export interface IRegisterStatusError {
  code: number;
  error: {
    details: [
      {
        field: string;
        field_value: string;
        message: string;
        rule: string;
        rule_param: string;
      }
    ];
    message: string;
  };
  status: boolean;
}
export interface IForgotStatus {
  code: number;
  data: {
    code: number;
    status: boolean;
  };
  status: boolean;
}
export interface IForgotStatusError {
  code: number;
  error: {
    details: [
      {
        field: string;
        message: string;
        rule: string;
      }
    ];
    message: string;
  };
  status: boolean;
}
export interface IResetPasswordStatus {
  code: number;
  data: {
    code: number;
    status: boolean;
  };
  status: boolean;
}
export interface IResetPasswordStatusError {
  code: number;
  error: {
    details: [
      {
        field: string;
        message: string;
        rule: string;
      }
    ];
    message: string;
  };
  status: boolean;
}

export interface IDecodeToken {
  id: string;
  user_name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
  wallet: string;
  exp: number;
}
