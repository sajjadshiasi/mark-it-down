import { EAuth } from '@/types';

export interface IAuthSlice {
  authModal: EAuth;
  setAuthModal: (authModal: EAuth) => void;
}
