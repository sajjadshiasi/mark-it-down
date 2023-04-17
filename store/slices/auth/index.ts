import { StateCreator } from 'zustand';
import { EAuth } from '@/types';
import { ICommonSlice } from '../common/Interface';
import { IModalSlice } from '../modals/Interface';
import { IAuthSlice } from './Interface';

export const createAuthSlice: StateCreator<
  IAuthSlice & IModalSlice & ICommonSlice,
  [],
  [],
  IAuthSlice
> = (set, get) => ({
  authModal: EAuth.null,
  setAuthModal: (authModal: EAuth) => {
    if (authModal === EAuth.null) {
      set({ authModal });
      set({
        isOpenModal: { ...get().isOpenModal, auth: false },
      });
    }
    set({ isOpenMobileMenu: false });
    set({ authModal });
    set({
      isOpenModal: { ...get().isOpenModal, auth: true },
    });
    set({ isOpenProfileCard: false });
  },
});
