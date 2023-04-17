import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createAuthSlice, createCommonSlice, createModalSlice } from './slices';
import { IAuthSlice } from './slices/auth/Interface';
import { ICommonSlice } from './slices/common/Interface';
import { IModalSlice } from './slices/modals/Interface';
import { createUserSlice } from './slices/user';
import { IUserSlice } from './slices/user/Interface';

export type IUseStore = IAuthSlice & ICommonSlice & IModalSlice & IUserSlice;

export const useStore = create<IUseStore>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createCommonSlice(...a),
      ...createModalSlice(...a),
      ...createUserSlice(...a),
    }),
    {
      name: 'activity',
      partialize: (state) => ({ user: state.user }),
    }
  )
);
